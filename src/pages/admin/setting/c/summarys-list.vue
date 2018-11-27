<template>
    <div>
        <Button type="primary" @click="toEdit(0)">添加</Button>
        <Table border :columns="columns" :data="list" style="margin:16px 0;"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8" />
        <Drawer :mask-closable="false" :title="formData.id ? '修改':'添加'" width="50%"  v-model="isedit">
            <Form :model="formData" :label-width="80">
                <FormItem label="堂">
                    <Input v-model="formData.rootGroup" placeholder="堂" @keyup.enter.native="toSubmit" />
                </FormItem>
                <FormItem label="始迁祖">
                    <Input v-model="formData.rootPerson" placeholder="始迁祖" @keyup.enter.native="toSubmit" />
                </FormItem>
                <FormItem label="负责人">
                    <Input v-model="formData.leader" placeholder="负责人" @keyup.enter.native="toSubmit" />
                </FormItem>
                <FormItem label="负责人电话">
                    <Input v-model="formData.leaderPhone" placeholder="负责人电话" @keyup.enter.native="toSubmit" />
                </FormItem>
                <FormItem label="膜拜" v-if="formData.id">
                    <Input v-model="formData.worshipNum" placeholder="膜拜" @keyup.enter.native="toSubmit" />
                </FormItem>
                <FormItem label="点赞" v-if="formData.id">
                    <Input v-model="formData.praiseNum" placeholder="点赞" @keyup.enter.native="toSubmit" />
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
            filePath: '',
            columns: [
                {
                    title: 'ID',
                    key: 'id'
                }, {
                    title: '堂',
                    key: 'title'
                }, {
                    title: '始迁祖',
                    key: 'rootPerson'
                }, {
                    title: '负责人',
                    key: 'leader',
                }, {
                    title: '负责人电话',
                    key: 'leaderPhone',
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
            this.api.get(this.api.admin.base + this.url, {
                siteId: this.$store.state.siteId,
                pageNo: this.page
            }).then(res => {
                let list = res.data.records;
                list.forEach(v => {
                    v.title = v.status == 2 ? v.rootGroup + '[草稿]' : v.rootGroup
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
                this.api.get(this.api.admin.base + this.api.admin.admin_summarys_info, {
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
                    this.api.get(this.api.admin.base + this.api.admin.admin_summarys_del, {
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
            if (!this.api.isMobile(this.formData.leaderPhone)) {
                this.$Message.error('请输入正确的手机号');
                return;
            }
            let data = {
                siteId: this.$store.state.siteId,
                rootGroup: this.formData.rootGroup,
                rootPerson: this.formData.rootPerson,
                leader: this.formData.leader,
                leaderPhone: this.formData.leaderPhone,
                worshipNum: this.formData.worshipNum ? this.formData.worshipNum : 0,
                praiseNum: this.formData.praiseNum ? this.formData.praiseNum : 0,
                fileName: this.fileName,
                filePath: this.filePath,
            }
            if (this.formData.id) {
                data.id = this.formData.id
            }
            this.api.post(this.api.admin.base + this.api.admin.admin_summarys_edit, data).then(res => {
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
                siteId: this.$store.state.siteId,
                rootGroup: this.formData.rootGroup,
                rootPerson: this.formData.rootPerson,
                leader: this.formData.leader,
                leaderPhone: this.formData.leaderPhone,
                worshipNum: this.formData.worshipNum ? this.formData.worshipNum : 0,
                praiseNum: this.formData.praiseNum ? this.formData.praiseNum : 0,
                fileName: this.fileName,
                filePath: this.filePath,
            }
            if (this.formData.id) {
                data.id = this.formData.id
            }
            this.api.post(this.api.admin.base + this.api.admin.admin_summarys_drft, data).then(res => {
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