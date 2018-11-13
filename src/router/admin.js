import Manager from '@/layouts/manager'
export default [{
        path: 'home',
        redirect: 'home/home',
        component: Manager,
        children: [{
            path: '/a/home/home',
            name: 'home',
            meta: {
                title: '控制台',
                icon: 'md-home',
            },
            component: () => import('@/page-admin/home/home')
        }]
    },
    {
        path: 'setting',
        name: 'admin_setting',
        redirect: 'setting/setting',
        component: Manager,
        meta: {
            icon: 'ios-settings',
            title: '运营',
        },
        children: [{
            path: 'setting',
            name: 'setting',
            meta: {
                icon: 'md-settings',
                title: '基本设置'
            },
            component: () => import('@/page-admin/setting/setting')
        }, {
            path: 'feeds',
            name: 'feeds',
            meta: {
                icon: 'md-text',
                title: '寻根留言'
            },
            component: () => import('@/page-admin/setting/feeds')
        }, {
            path: 'list',
            name: 'list',
            meta: {
                icon: 'md-text',
                title: '内容管理'
            },
            component: () => import('@/page-admin/setting/list')
        }, {
            path: 'slider',
            name: 'slider',
            meta: {
                icon: 'ios-images',
                title: '轮播图'
            },
            component: () => import('@/page-admin/setting/slider')
        }, {
            path: 'links',
            name: 'links',
            meta: {
                icon: 'ios-infinite',
                title: '最铁盟友'
            },
            component: () => import('@/page-admin/setting/links')
        }]
    },
    {
        path: 'podium',
        name: '_podium',
        redirect: 'podium/podium',
        component: Manager,
        meta: {
            icon: 'ios-podium',
            title: '数据中心',
        },

        children: [{
            path: 'podium',
            name: 'podium',
            meta: {
                icon: 'md-podium',
                title: '数据中心'
            },
            component: () => import('@/page-admin/podium/podium')
        }]
    },
    {
        path: 'culture',
        name: '_culture',
        redirect: '/culture/list',
        component: Manager,
        meta: {
            icon: 'md-bookmarks',
            title: '家族文化'
        },

        children: [{
            path: 'list',
            name: 'culture-list',
            meta: {
                icon: 'md-book',
                title: '全部文章',
            },
            component: () => import('@/page-admin/culture/list')
        }, {
            path: 'type',
            name: 'culture-type',
            meta: {
                icon: 'ios-build',
                title: '类别设置',
            },
            component: () => import('@/page-admin/culture/type')
        }]
    },
    {
        path: 'charitable',
        name: '_charitable',
        redirect: '/charitable/list',
        component: Manager,
        meta: {
            icon: 'ios-heart',
            title: '慈善公益',
            hide: false
        },

        children: [{
            path: 'list',
            name: 'charitable-list',
            meta: {
                icon: 'md-heart',
                title: '公益记录',
            },
            component: () => import('@/page-admin/charitable/list')
        }, {
            path: 'out',
            name: 'charitable-out',
            meta: {
                icon: 'ios-infinite',
                title: '财务支出',
            },
            component: () => import('@/page-admin/charitable/out')
        }, {
            path: 'in',
            name: 'charitable-in',
            meta: {
                icon: 'md-albums',
                title: '捐款名录',
            },
            component: () => import('@/page-admin/charitable/in')
        }, {
            path: 'detail',
            name: 'charitable-detail',
            meta: {
                icon: 'md-settings',
                title: '详细',
                hide: true,
                hideInMenu: true,
            },
            component: () => import('@/page-admin/charitable/detail')
        }]
    },
    {
        path: 'business',
        name: '_business',
        redirect: '/business/list',
        component: Manager,
        meta: {
            icon: 'md-pie',
            title: '家族产业',
            hide: true
        },

        children: [{
            path: 'public',
            name: 'business-public',
            meta: {
                icon: 'ios-aperture',
                title: '家族产业',
            },
            component: () => import('@/page-admin/business/public')
        }, {
            path: 'personal',
            name: 'business-personal',
            meta: {
                icon: 'md-aperture',
                title: '个人产业',
            },
            component: () => import('@/page-admin/business/personal')
        }, {
            path: 'detail',
            name: 'business-detail',
            meta: {
                icon: 'md-settings',
                title: '详细',
                hide: true,
                hideInMenu: true,
            },
            component: () => import('@/page-admin/business/detail')
        }]
    },
    {
        path: 'notable',
        name: '_notable',
        redirect: '/notable/list',
        component: Manager,
        meta: {
            icon: 'ios-people',
            title: '家族名人',
            hide: false
        },

        children: [{
            path: 'list',
            name: 'notable-list',
            meta: {
                icon: 'md-star-half',
                title: '家族名人',
            },
            component: () => import('@/page-admin/notable/list')
        }, {
            path: 'type',
            name: 'notable-type',
            meta: {
                icon: 'md-git-network',
                title: '组织架构',
                hide: true,
            },
            component: () => import('@/page-admin/notable/type')
        }, {
            path: 'detail',
            name: 'notable-detail',
            meta: {
                icon: 'md-settings',
                title: '详细',
                hide: true,
                hideInMenu: true,
            },
            component: () => import('@/page-admin/notable/detail')
        }]
    },
    {
        path: 'record',
        name: '_record',
        redirect: '/record/list',
        component: Manager,
        meta: {
            icon: 'md-ribbon',
            title: '记录家族',
        },

        children: [{
            path: 'list',
            name: 'ios-cloud',
            meta: {
                icon: 'logo-rss',
                title: '记录家族',
            },
            component: () => import('@/page-admin/record/list')
        }, {
            path: 'video',
            name: 'video',
            meta: {
                icon: 'md-videocam',
                title: '视频',
            },
            component: () => import('@/page-admin/record/video')
        }, {
            path: 'image',
            name: 'image',
            meta: {
                icon: 'md-image',
                title: '图片',
            },
            component: () => import('@/page-admin/record/image')
        }, {
            path: 'message',
            name: 'message',
            meta: {
                icon: 'ios-megaphone',
                title: '说说',
            },
            component: () => import('@/page-admin/record/message')
        }]
    },
    {
        path: 'users',
        name: '_users',
        redirect: '/users/list',
        component: Manager,
        meta: {
            icon: 'md-people',
            title: '用户管理',
            hide: false
        },

        children: [{
            path: 'list',
            name: 'users-list',
            meta: {
                icon: 'ios-people-outline',
                title: '全部用户',
            },
            component: () => import('@/page-admin/users/list')
        }, {
            path: 'manager',
            name: 'users-manager',
            meta: {
                icon: 'md-paw',
                title: '管理员',
            },
            component: () => import('@/page-admin/users/manager')
        }, {
            path: 'log',
            name: 'log',
            meta: {
                icon: 'md-code',
                title: '管理员日志'
            },
            component: () => import('@/page-admin/users/log')
        }]
    },
    {
        path: 'help',
        name: '_help',
        redirect: '/help/help',
        component: Manager,
        meta: {
            icon: 'logo-buffer',
            title: '用户管理',
            hide: false
        },

        children: [{
            path: 'help',
            name: 'help',
            meta: {
                icon: 'md-help-circle',
                title: '帮助',
            },
            component: () => import('@/page-admin/home/help')
        }]
    }
]