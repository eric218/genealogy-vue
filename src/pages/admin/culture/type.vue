<template>
    <div>
        <Button type="primary" @click="toEdit(0)">添加类别</Button>
        <Table border :columns="columns" :data="list" style="margin:16px 0;"></Table>
        <Drawer :mask-closable="false" :title="formData.id ? '修改':'添加'" width="50%" v-model="isedit">
            <Form :model="formData" :label-width="80">
                <FormItem label="名称">
                    <Input v-model="formData.menuName" placeholder="名称" @keyup.enter.native="toSubmit" />
                </FormItem>
                <FormItem label="">
                    <Button type="primary" @click="toSubmit" style="margin-right:16px;">提交</Button>
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
            formData: {},
            columns: [
                { title: 'ID', width: 80, key: 'id' },
                { title: '类别', key: 'menuName' },
                { title: '类别标识', key: 'menuType' },
                { title: '顺序', key: 'orderIndex' },
                {
                    title: '显示',
                    width: 64,
                    align: 'center',
                    key: 'isWeb',
                    render: (h, e) => {
                        return h('Icon', {
                            props: {
                                type: e.row.isWeb ? 'ios-eye' : 'ios-eye-off',
                                color: '#ccc',
                                size: '20'
                            }
                        })
                    }
                },
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
                            !params.row.istatic ? '' : h('Button', {
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
    mounted: function () {
        this.getList()
    },
    methods: {
        getList(e) {
            this.api.get(this.api.admin.base + this.api.admin.admin_sys_menu, {
                siteId: this.$store.state.siteId,
                menuId: 2,
            }).then(res => {
                if (res.code == 200) {
                    this.list = res.data;
                } else {
                    this.list = [];
                }
            })
        },
        toEdit(e) {
            if (!e) {
                this.formData = {}
                this.isedit = true;
            } else {
                this.list.forEach(v => {
                    if (v.id == e) {
                        this.formData = v
                        this.isedit = true
                    }
                })
            }
        },
        remove(index) {
            this.$Modal.confirm({
                title: '提示',
                content: '确定删除这个类别？',
                onOk: () => {
                    this.api.get(this.api.admin.base + this.api.admin.admin_sys_menu_del, {
                        id: this.list[index].id
                    }).then(res => {
                        this.list.splice(index, 1);
                        this.getList();
                    })
                },
            });
        },
        toSubmit() {
            if (!this.formData.menuName) {
                this.$Message.error('未输入类别名');
                return;
            }
            let data = {
                siteId: this.$store.state.siteId,
                menuName: this.formData.menuName,
                parentId: this.list[0].parentId
            }
            let url = this.api.admin.base + this.api.admin.admin_sys_menu_add
            if (this.formData.id) {
                data = {
                    id: this.formData.id,
                    menuName: this.formData.menuName
                }
                url = this.api.admin.base + this.api.admin.admin_sys_menu_edit
            }
            this.api.post(url, data).then(res => {
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
}
</script>