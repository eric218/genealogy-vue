<template>
    <div>
        <Button type="primary" @click="toEdit(0)">添加</Button>
        <Table border :columns="columns" :data="list" style="margin:16px 0;"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8" />
        <Drawer :title="formData.id ? '修改':'添加'" width="50%" :closable="false" v-model="isedit">
            <Form :model="formData" :label-width="80">
                <FormItem label="标题">
                    <Input v-model="formData.newsTitle" placeholder="标题" />
                </FormItem>
                <FormItem label="预览图">
                    <Upload class="upload" :action="api.admin + api.urls.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']">
                        <Button type="dashed">
                            <div class="img" :style="api.imgBG(filePath)" v-if="filePath" />
                            <div class="img" :style="api.imgBG(formData.fanNewsUploadFileList[0].filePath)" v-else-if="formData.fanNewsUploadFileList.length"></div>
                            <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                        </Button>
                    </Upload>
                </FormItem>
                <FormItem label="位于">
                    <Input v-model="formData.industryLocation" placeholder="位于" />
                </FormItem>
                <FormItem label="正文">
                    <Input type="textarea" v-model="formData.newsText" placeholder="正文" />
                </FormItem>
                <FormItem label="浏览数" v-if="formData.id">
                    <Input v-model="formData.visitNum" placeholder="浏览数" />
                </FormItem>
                <FormItem label="">
                    <Button type="primary" @click="toSubmit">提交</Button>
                    <Button style="margin-left:16px" @click="toDrft" v-if="formData.status != 1">存为草稿</Button>
                </FormItem>
            </Form>
        </Drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isedit: false,
            list: [],
            total: 0,
            page: 1,
            formData: {
                id: '',
                fanNewsUploadFileList: [],
            },
            fileName: '',
            filePath:'',
            columns: [
                {
                    title: 'ID',
                    key: 'id'
                }, {
                    title: '标题',
                    key: 'title'
                }, {
                    title: '浏览数',
                    key: 'visitNum'
                }, {
                    title: '日期',
                    key: 'datetime',
                }, {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small',
                                    icon: 'ios-create',
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.toEdit(this.list[params.index].id)
                                    }
                                }
                            }),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small',
                                    icon: 'md-trash',
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            })
                        ]);
                    }
                }
            ],
        }
    },
    watch: {
        url: function (curVal, oldVal) {
            if (curVal != oldVal) {
                this.getList();
            }
        },
    },
    mounted: function () {
        this.getList()
    },
    methods: {
        getList(e) {
            this.api.get(this.url, {
                pageNo: this.page
            }).then(res => {
                let list = res.data.records;
                list.forEach(v => {
                    v.title = v.status == 2 ? v.newsTitle + '[草稿]' : v.newsTitle
                    v.datetime = this.dayjs(v.updateTime).format('YYYY-MM-DD HH:mm:ss')
                })
                this.list = list;
                this.total = res.data.total
            })
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        },
        toEdit(e) {
            this.fileName = '';
            this.filePath = '';
            if (!e) {
                this.formData = {}
                this.isedit = true;
            } else {
                this.api.get(this.api.admin + this.api.urls.industry_info, {
                    id: e
                }).then(res => {
                    this.formData = res.data;
                    this.isedit = true;
                })
            }
        },
        remove(index) {
            this.$Modal.confirm({
                title: '提示',
                content: '确定删除这个文章？',
                onOk: () => {
                    this.api.get(this.api.admin + this.api.urls.industry_del, {
                        id: this.list[index].id
                    }).then(res => {
                        this.list.splice(index, 1);
                        this.getList();
                    })
                },
            });
        },
        handleSuccess(res, file) {
            if (res.code == 200) {
                this.fileName = res.data.file_name
                this.filePath = res.data.file_path
            }
        },
        toSubmit() {
            let data = {
                showId: this.type,
                newsTitle: this.formData.newsTitle,
                newsText: this.formData.newsText,
                industryLocation: this.formData.industryLocation,
                visitNum: this.formData.visitNum ? this.formData.visitNum : 0,
                fileName: this.fileName,
                filePath: this.filePath,
            }
            if (this.formData.id) {
                data.id = this.formData.id
            }
            this.api.post(this.api.admin + this.api.urls.industry_edit, data).then(res => {
                if (res.code === 200) {
                    if (data.id) {
                        this.$Message.success('修改成功');
                    } else {
                        this.$Message.success('添加成功');
                    }
                    this.getList();
                    this.isedit = false;
                }
            })
        },
        toDrft() {
            let data = {
                showId: this.type,
                newsTitle: this.formData.newsTitle,
                newsText: this.formData.newsText,
                industryLocation: this.formData.industryLocation,
                visitNum: this.formData.visitNum ? this.formData.visitNum : 0,
                fileName: this.fileName,
                filePath: this.filePath,
            }
            if (this.formData.id) {
                data.id = this.formData.id
            }
            this.api.post(this.api.admin + this.api.urls.industry_drft, data).then(res => {
                if (res.code === 200) {
                    if (data.id) {
                        this.$Message.success('修改成功');
                    } else {
                        this.$Message.success('添加成功');
                    }
                    this.getList();
                    this.isedit = false;
                }
            })
        }
    },
    props: ['url', 'menu', 'type']
}
</script>
<style lang="scss" scoped>
.upload {
  button {
    width: 162px;
    height: 122px;
    padding: 0;
    .img {
      width: 160px;
      height: 120px;
      padding: 0;
      background: no-repeat center / cover;
    }
  }
}
</style>