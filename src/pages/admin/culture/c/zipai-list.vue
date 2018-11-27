<template>
    <div>
        <Button type="primary" @click="toEdit(0)">添加字派</Button>
        <Table border :columns="columns" :data="list" style="margin:16px 0;"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8" />
        <Drawer :mask-closable="false" :title="formData.id ? '修改':'添加'" width="50%" v-model="isedit">
            <Form :model="formData" :label-width="80">
                <FormItem label="字派所在地">
                    <Input v-model="formData.ziapiLocation" placeholder="输入字派所在地" />
                </FormItem>
                <FormItem label="祖先名">
                    <Input v-model="formData.ancestorsName" placeholder="输入祖先名" />
                </FormItem>
                <FormItem label="祖先历代">
                    <Input v-model="formData.lidai" placeholder="输入祖先历代" />
                </FormItem>
                <FormItem label="祖先近世">
                    <Input v-model="formData.jinshi" placeholder="输入祖先近世" />
                </FormItem>
                <FormItem label="字派列表">
                    <Tag checkable type="dot" v-for="(v,i) in formData.list" :key="i" :name="i" closable @on-close="handleClose">{{v}}</Tag>
                    <Poptip width="300" title="添加字派名">
                        <Button icon="ios-add" type="dashed">添加</Button>
                        <div class="api" slot="content">
                            <Row>
                                <i-col :span="24">
                                    <i-input placeholder="添加字派名" v-model="zipai_txt"></i-input>
                                </i-col>
                                <i-col :span="24">
                                    <i-button type="primary" style="width:100%;margin-top:16px;" @click="toAddZipai">确定</i-button>
                                </i-col>
                            </Row>
                        </div>
                    </Poptip>
                </FormItem>
                <FormItem label="浏览数" v-if="formData.id">
                    <Input v-model="formData.visitNum" placeholder="浏览数" />
                </FormItem>
                <FormItem label="">
                    <Button type="primary" @click="toSubmit" style="margin-right:16px;">修改</Button>
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
            zipai_txt: '',
            formData: {
                id: '',
                ziapiLocation: '',
                ancestorsName: '',
                visitNum: '',
                jinshi: 0,
                lidai: 0,
                list: [],
            },
            columns: [
                {
                    title: 'ID',
                    width: 80,
                    key: 'id'
                }, {
                    title: '字派所在地',
                    key: 'ziapiLocation'
                }, {
                    title: '祖先名',
                    key: 'ancestorsName'
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
            this.api.get(this.api.admin.base + this.url, {
                pageNo: this.page
            }).then(res => {
                let list = res.data.records;
                list.forEach(v => {
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
            if (!e) {
                this.formData = {
                    id: '',
                    ziapiLocation: '',
                    ancestorsName: '',
                    visitNum: '',
                    jinshi: 0,
                    lidai: 0,
                    list: [],
                }
                this.isedit = true;
            } else {
                this.api.get(this.api.admin.base + this.api.admin.culture_zipai_info, {
                    id: e
                }).then(res => {
                    this.formData.id = res.data.id;
                    this.formData.ancestorsName = res.data.ancestorsName
                    this.formData.ziapiLocation = res.data.ziapiLocation
                    this.formData.visitNum = res.data.visitNum
                    let zipaiTxt = res.data.zipaiTxt.length ? res.data.zipaiTxt.split(';') : []
                    this.formData.list = zipaiTxt.map((v, i) => {
                        let _v = v.split('|')
                        if (!i && zipaiTxt.length) {
                            this.formData.jinshi = _v[0]
                            this.formData.lidai = _v[1]
                        }
                        return _v[2]
                    })
                    this.isedit = true;
                })
            }
        },
        remove(index) {
            this.$Modal.confirm({
                title: '提示',
                content: '确定删除这条记录？',
                onOk: () => {
                    this.api.get(this.api.admin.base + this.api.admin.culture_zipai_del, {
                        id: this.list[index].id
                    }).then(res => {
                        this.list.splice(index, 1);
                        this.getList();
                    })
                },
            });
        },
        handleClose(e, obj) {
            this.formData.list.splice(obj, 1)
        },
        toAddZipai() {
            if (!this.zipai_txt) {
                this.$Message.error('请输入内容')
                return;
            }
            if (this.zipai_txt.length > 2) {
                this.$Message.warning('字派名过长')
                return;
            }
            this.formData.list.push(this.zipai_txt);
            this.zipai_txt = ''
        },
        toSubmit() {
            if (!this.formData.jinshi || !this.formData.lidai) {
                this.$Message.error('未录入近世历代');
                return;
            }
            let data = {
                showId: this.type,
                ziapiLocation: this.formData.ziapiLocation,
                ancestorsName: this.formData.ancestorsName,
                zipaiTxt: '',
                visitNum: this.formData.visitNum ? this.formData.visitNum : 0,
            }
            if (this.formData.id) {
                data.id = this.formData.id
            }
            let list = this.formData.list.map((v, i) => {
                let jinshi = i + parseInt(this.formData.jinshi)
                let lidai = i + parseInt(this.formData.lidai)
                return jinshi + '|' + lidai + '|' + v
            })
            if (!list.length) {
                this.$Message.error('未录入字派');
                return;
            }
            data.zipaiTxt = list.join(';')
            this.api.post(this.api.admin.base + this.api.admin.culture_zipai_edit, data).then(res => {
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