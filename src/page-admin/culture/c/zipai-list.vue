<template>
    <div>
        <Button type="primary" @click="toAdd">发布新文章</Button>
        <Table border :columns="columns" :data="list.records" style="margin:16px 0;"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8" />
        <Drawer title="添加字派" width="50%" :closable="false" v-model="addForm.culture_zipai">
            <Form :model="formData" :label-width="80">
                <FormItem label="字派所在地">
                    <Input v-model="formData.ziapiLocation" placeholder="输入字派所在地" />
                </FormItem>
                <FormItem label="祖先名">
                    <Input v-model="formData.ancestorsName" placeholder="输入祖先名" />
                </FormItem>
                <FormItem label="祖先历代">
                    <Input v-model="formData.ancestorsName" placeholder="输入祖先历代" />
                </FormItem>
                <FormItem label="祖先近世">
                    <Input v-model="formData.ancestorsName" placeholder="输入祖先近世" />
                </FormItem>
                <FormItem label="字派列表">
                    <Tag checkable type="dot" v-for="(v,i) in count" :key="i" :name="i" closable @on-close="handleClose">{{v}}</Tag>
                    <Poptip placement="top" width="300" title="添加字派名" @on-ok="toAddZipai">
                        <Button icon="ios-add" type="dashed">添加</Button>
                        <div class="api" slot="content">
                            <Row>
                                <i-col :span="24">
                                    <i-input placeholder="添加字派名"></i-input>
                                </i-col>
                                <i-col :span="24">
                                    <i-button type="primary" style="width:100%;margin-top:16px;">确定</i-button>
                                </i-col>
                            </Row>
                        </div>
                    </Poptip>
                </FormItem>
                <FormItem label="">
                    <Button type="primary">提交</Button>
                </FormItem>
            </Form>
        </Drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: ['德', '智', '体', '美', '劳'],
            addForm: {
                culture_zipai: false,
                culture_news: false,
            },
            formData: {
                ziapiLocation: '',
            },
            columns: [
                {
                    title: 'ID',
                    key: 'id',
                    width: 100
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
                    title: '转发数',
                    key: 'share'
                }, {
                    title: '日期',
                    key: 'updateTimeLong',
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
                                        this.show(params.index)
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
                }],
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
            }).then(res => {
                this.list = res.data;
            })
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        },
        show(index) {
            this.$Modal.info({
                title: '提示',
                content: '查看正文'
            })
        },
        remove(index) {
            this.$Modal.confirm({
                title: '提示',
                content: '确定删除这个文章？',
                onOk: () => {
                    this.api.get(this.api.admin + this.api.urls.culture_zipai_del, {
                        id: this.list.records[index].id
                    }).then(res => {
                        this.list.records.splice(index, 1);
                    })
                },
                onCancel: () => {
                }
            });
        },
        toAdd() {
            this.addForm[this.menucurr.menuType] = true
        },
        handleClose(e, obj) {
            this.count.splice(obj, 1)
        },
        toAddZipai() {
            if (this.count.length) {
                this.count.push(this.count[this.count.length - 1] + 1);
            } else {
                this.count.push(0);
            }
        }
    },
    props: ['url']
}
</script>