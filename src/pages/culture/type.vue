<template>
    <div>
        <Tree :data="data5" :render="renderContent"></Tree>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data5: [
                {
                    title: '家族文化',
                    expand: true,
                    render: (h, { root, node, data }) => {
                        return h('span', {
                            style: {
                                display: 'inline-block',
                                width: '100%'
                            }
                        }, [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px'
                                    }
                                }, [
                                        h('Button', {
                                            props: Object.assign({}, this.buttonProps, {
                                                icon: 'ios-add',
                                                type: 'primary'
                                            }),
                                            style: {
                                                width: '64px'
                                            },
                                            on: {
                                                click: () => { this.append(data) }
                                            }
                                        })
                                    ])
                            ]);
                    },
                    children: [
                        {
                            title: '本地字派',
                            expand: true,
                        },
                        {
                            title: '家族祠堂',
                            expand: true,
                        },
                        {
                            title: '源流',
                            expand: true,
                        },
                        {
                            title: '序',
                            expand: true,
                        },
                        {
                            title: '宗规族约',
                            expand: true,
                        },
                        {
                            title: '传说典故',
                            expand: true,
                        },
                    ]
                }
            ],
            buttonProps: {
                type: 'default',
                size: 'small',
            }
        }
    },
    methods: {
        renderContent(h, { root, node, data }) {
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                            h('Button', {
                                props: Object.assign({}, this.buttonProps, {
                                    icon: 'ios-add'
                                }),
                                style: {
                                    marginRight: '8px'
                                },
                                on: {
                                    click: () => { this.append(data) }
                                }
                            }),
                            h('Button', {
                                props: Object.assign({}, this.buttonProps, {
                                    icon: 'ios-remove'
                                }),
                                on: {
                                    click: () => { this.remove(root, node, data) }
                                }
                            })
                        ])
                ]);
        },
        append(data) {
            this.$Modal.confirm({
                render: (h) => {
                    return h('Input', {
                        props: {
                            value: this.value,
                            autofocus: true,
                            placeholder: '输入将添加的类目'
                        },
                        on: {
                            input: (val) => {
                                this.value = val;
                            }
                        }
                    })
                },
                onOk: () => {
                    if (!this.value) {
                        this.$Message.error('未定义类别名称');
                        return;
                    }
                    const children = data.children || [];
                    children.push({
                        title: this.value,
                        expand: true
                    });
                    this.$set(data, 'children', children);
                },
            })
        },
        remove(root, node, data) {
            this.$Modal.confirm({
                title: '提示',
                content: '确定删除这个类别？',
                onOk: () => {
                    const parentKey = root.find(el => el === node).parent;
                    const parent = root.find(el => el.nodeKey === parentKey).node;
                    const index = parent.children.indexOf(data);
                    parent.children.splice(index, 1);
                },
            });
        }
    }
}
</script>
