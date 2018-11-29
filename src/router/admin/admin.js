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
            component: () => import('@/pages/admin/home/home')
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
            path: 'addsite',
            name: 'addsite',
            meta: {
                icon: 'md-add-circle',
                role: 9,
                title: '开通网站'
            },
            component: () => import('@/pages/admin/setting/addsite')
        }, {
            path: 'setting',
            name: 'setting',
            meta: {
                icon: 'md-settings',
                title: '网站设置'
            },
            component: () => import('@/pages/admin/setting/setting')
        }, {
            path: 'summarys',
            name: 'summarys',
            meta: {
                icon: 'ios-analytics',
                title: '联谊会概况设置'
            },
            component: () => import('@/pages/admin/setting/summarys')
        }, {
            path: 'withdraw',
            name: 'withdraw',
            meta: {
                icon: 'ios-clock-outline',
                title: '提现'
            },
            component: () => import('@/pages/admin/setting/withdraw')
        }, {
            path: 'feeds',
            name: 'feeds',
            meta: {
                icon: 'md-text',
                title: '寻根留言'
            },
            component: () => import('@/pages/admin/setting/feeds')
        }, {
            path: 'list',
            name: 'list',
            meta: {
                icon: 'ios-ionic',
                title: '内容审核'
            },
            component: () => import('@/pages/admin/setting/list')
        }, {
            path: 'slider',
            name: 'slider',
            meta: {
                icon: 'ios-images',
                title: '轮播图'
            },
            component: () => import('@/pages/admin/setting/slider')
        }, {
            path: 'links',
            name: 'links',
            meta: {
                icon: 'ios-infinite',
                title: '最铁盟友'
            },
            component: () => import('@/pages/admin/setting/links')
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
            component: () => import('@/pages/admin/podium/podium')
        }, {
            path: 'outline',
            name: 'outline',
            meta: {
                icon: 'ios-infinite',
                title: '线下捐款'
            },
            component: () => import('@/pages/admin/podium/outline')
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
            component: () => import('@/pages/admin/culture/list')
        }, {
            path: 'type',
            name: 'culture-type',
            meta: {
                icon: 'ios-build',
                title: '类别设置',
            },
            component: () => import('@/pages/admin/culture/type')
        }]
    },
    {
        path: 'charitable',
        name: '_charitable',
        redirect: '/charitable/in',
        component: Manager,
        meta: {
            icon: 'ios-heart',
            title: '慈善公益',
            hide: false
        },

        children: [{
            path: 'in',
            name: 'charitable-in',
            meta: {
                icon: 'md-albums',
                title: '财务收益',
            },
            component: () => import('@/pages/admin/charitable/in')
        }, {
            path: 'out',
            name: 'charitable-out',
            meta: {
                icon: 'ios-infinite',
                title: '财务支出',
            },
            component: () => import('@/pages/admin/charitable/out')
        }, {
            path: 'detail',
            name: 'charitable-detail',
            meta: {
                icon: 'md-settings',
                title: '详细',
                hide: true,
                hideInMenu: true,
            },
            component: () => import('@/pages/admin/charitable/detail')
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
            component: () => import('@/pages/admin/business/public')
        }, {
            path: 'personal',
            name: 'business-personal',
            meta: {
                icon: 'md-aperture',
                title: '个人产业',
            },
            component: () => import('@/pages/admin/business/personal')
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
            component: () => import('@/pages/admin/notable/list')
        }, {
            path: 'type',
            name: 'notable-type',
            meta: {
                icon: 'md-git-network',
                title: '组织架构',
                hide: true,
            },
            component: () => import('@/pages/admin/notable/type')
        }, {
            path: 'detail',
            name: 'notable-detail',
            meta: {
                icon: 'md-settings',
                title: '详细',
                hide: true,
                hideInMenu: true,
            },
            component: () => import('@/pages/admin/notable/detail')
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
            path: 'notice',
            name: 'notice',
            meta: {
                icon: 'ios-bookmarks-outline',
                title: '县级公告',
            },
            component: () => import('@/pages/admin/record/notice')
        }, {
            path: 'rss',
            name: 'rss',
            meta: {
                icon: 'logo-rss',
                title: '家族动态',
            },
            component: () => import('@/pages/admin/record/rss')
        }, {
            path: 'video',
            name: 'video',
            meta: {
                icon: 'md-videocam',
                title: '家族视频',
            },
            component: () => import('@/pages/admin/record/video')
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
            path: 'alluser',
            name: 'users-list',
            meta: {
                icon: 'ios-people-outline',
                title: '全部用户',
            },
            component: () => import('@/pages/admin/users/alluser')
        }, {
            path: 'manager',
            name: 'users-manager',
            meta: {
                icon: 'md-paw',
                role: 9,
                title: '管理员',
            },
            component: () => import('@/pages/admin/users/manager')
        }, {
            path: 'log',
            name: 'log',
            meta: {
                icon: 'md-code',
                role: 9,
                title: '管理员日志',
            },
            component: () => import('@/pages/admin/users/log')
        }]
    },
    {
        path: 'help',
        name: '_help',
        redirect: '/help/help',
        component: Manager,
        meta: {
            icon: 'logo-buffer',
            title: '帮助',
            hide: false
        },

        children: [{
            path: 'help',
            name: 'help',
            meta: {
                icon: 'md-help-circle',
                title: '帮助',
            },
            component: () => import('@/pages/admin/home/help')
        }]
    }
]