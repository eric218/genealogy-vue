<template>
    <div>
        <Button type="primary" @click="toEdit(0)">添加</Button>
        <Table border :columns="columns" :data="list" style="margin:16px 0;"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8" />
        <Drawer :mask-closable="false" :title="formData.id ? '提交':'添加'" width="50%" v-model="isedit">
            <Form :model="formData" :label-width="80">
                <FormItem label="人物">
                    <Input v-model="formData.personName" placeholder="姓名" />
                </FormItem>
                <FormItem label="头像">
                    <Upload class="upload" :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']">
                        <Button type="dashed">
                            <div class="img" :style="api.imgBG(formData.picFileSrc)" v-if="formData.picFileSrc" />
                            <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                        </Button>
                    </Upload>
                </FormItem>
                <FormItem label="人物简介">
                    <editor ref="editor" @on-change="handleChange" />
                </FormItem>
                <FormItem label="浏览数" v-if="formData.id">
                    <Input v-model="formData.visitNum" placeholder="浏览数" />
                </FormItem>
                <FormItem label="">
                    <Button type="primary" @click="toSubmit" style="margin-right:16px;">提交</Button>
                    <Button @click="toDrft" v-if="formData.status != 1" style="margin-right:16px;">存为草稿</Button>
                    <Button @click="isedit = false">关闭</Button>
                </FormItem>
            </Form>
        </Drawer>
    </div>
</template>

<script>
import Editor from '_c/editor'
export default {
    components: {
        Editor
    },
    data() {
        return {
            isedit: false,
            list: [],
            total: 0,
            page: 1,
            formData: {
                personName: '',
                personSummary: '',
                picFileName: '',
                picFileSrc: '',
            },
            columns: [
                { title: 'ID', width: 80, key: 'id' },
                {
                    title: ' ',
                    width: 64,
                    align: 'center',
                    key: 'status',
                    render: (h, e) => {
                        if (e.row.status != 2) {
                            return null
                        }
                        return h('Icon', {
                            props: {
                                type: 'ios-lock',
                                size: '20'
                            }
                        })
                    }
                },
                { title: '人物', key: 'personName' },
                { title: '浏览数', key: 'visitNum' },
                { title: '日期', key: 'datetime' },
                {
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
            this.api.get(this.api.admin.base + this.url, {
                pageNo: this.page
            }).then(res => {
                if (res.code == 200) {
                    let list = res.data.records;
                    list.forEach(v => {
                        v.datetime = this.dayjs(v.updateTime).format('YYYY-MM-DD HH:mm:ss')
                    })
                    this.list = list;
                    this.total = res.data.total
                } else {
                    this.list = [];
                }
            })
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        },
        handleChange(html, text) {
            this.formData.personSummary = html
        },
        toEdit(e) {
            this.fileName = '';
            this.filePath = '';
            this.$refs.editor.setHtml('')
            if (!e) {
                this.formData = {
                    personName: '',
                    personSummary: '',
                    picFileName: '',
                    picFileSrc: '',
                }
                this.isedit = true;
            } else {
                this.api.get(this.api.admin.base + this.api.admin.admin_famous_info, {
                    id: e
                }).then(res => {
                    if (res.code == 200) {
                        this.formData = res.data;
                        this.$refs.editor.setHtml(this.formData.personSummary)
                        this.isedit = true;
                    } else {
                        this.$Message.error('发生错误')
                    }
                })
            }
        },
        remove(index) {
            this.$Modal.confirm({
                title: '提示',
                content: '确定删除这个文章？',
                onOk: () => {
                    this.api.get(this.api.admin.base + this.api.admin.admin_famous_del, {
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
                this.formData.picFileName = res.data.file_name
                this.formData.picFileSrc = res.data.file_path
            }
        },
        toSubmit() {
            if (!this.formData.personName) {
                this.$Message.error('请填写人物姓名');
                return;
            }
            if (!this.formData.personSummary) {
                this.$Message.error('请填写人物简介');
                return;
            }
            let data = {
                showId: this.type,
                personName: this.formData.personName,
                personSummary: this.formData.personSummary,
                picFileName: this.formData.picFileName,
                picFileSrc: this.formData.picFileSrc,
                visitNum: this.formData.visitNum ? this.formData.visitNum : 0,
            }
            if (this.formData.id) {
                data.id = this.formData.id
            }
            this.api.post(this.api.admin.base + this.api.admin.admin_famous_edit, data).then(res => {
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
            if (!this.formData.personName) {
                this.$Message.error('请填写人物姓名');
                return;
            }
            if (!this.formData.personSummary) {
                this.$Message.error('请填写人物简介');
                return;
            }
            let data = {
                showId: this.type,
                personName: this.formData.personName,
                personSummary: this.formData.personSummary,
                picFileName: this.formData.picFileName,
                picFileSrc: this.formData.picFileSrc,
                visitNum: this.formData.visitNum ? this.formData.visitNum : 0,
            }
            if (this.formData.id) {
                data.id = this.formData.id
            }
            this.api.post(this.api.admin.base + this.api.admin.admin_famous_drft, data).then(res => {
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
    },
    props: ['url', 'menu', 'type']
}
</script>
<style lang="scss" scoped>
.upload {
  button {
    width: 162px;
    height: 162px;
    padding: 0;
    .img {
      width: 160px;
      height: 160px;
      padding: 0;
      background: no-repeat center / cover;
    }
  }
}
</style>
