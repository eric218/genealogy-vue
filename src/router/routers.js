import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [{
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: () => import('@/pages/login/login.vue')
    },
    {
        path: '/',
        name: '_home',
        redirect: '/home',
        component: Main,
        children: [{
            path: '/home',
            name: 'home',
            meta: {
                hideInMenu: false,
                notCache: true,
                title: '控制台',
                icon: 'md-home'
            },
            component: () => import('@/pages/home/home')
        }]
    },
    {
        path: '/setting',
        name: '_setting',
        redirect: '/setting/setting',
        meta: {
            icon: 'ios-settings',
            title: '运营',
            hide: true
        },
        component: Main,
        children: [{
            path: 'setting',
            name: 'setting',
            meta: {
                icon: 'md-settings',
                title: '基本设置'
            },
            component: () => import('@/pages/setting/setting')
        },{
            path: 'feeds',
            name: 'feeds',
            meta: {
                icon: 'md-text',
                title: '寻根留言'
            },
            component: () => import('@/pages/setting/feeds')
        },{
            path: 'list',
            name: 'list',
            meta: {
                icon: 'md-text',
                title: '内容管理'
            },
            component: () => import('@/pages/setting/list')
        },{
            path: 'slider',
            name: 'slider',
            meta: {
                icon: 'ios-images',
                title: '轮播图'
            },
            component: () => import('@/pages/setting/slider')
        },{
            path: 'links',
            name: 'links',
            meta: {
                icon: 'ios-infinite',
                title: '最铁盟友'
            },
            component: () => import('@/pages/setting/links')
        }]
    },
    {
        path: '/podium',
        name: '_podium',
        redirect: '/podium/podium',
        meta: {
            icon: 'ios-podium',
            title: '数据中心',
        },
        component: Main,
        children: [{
            path: 'podium',
            name: 'podium',
            meta: {
                icon: 'md-podium',
                title: '数据中心'
            },
            component: () => import('@/pages/podium/podium')
        }]
    },
    {
        path: '/culture',
        name: '_culture',
        redirect: '/culture/list',
        meta: {
            icon: 'md-bookmarks',
            title: '家族文化'
        },
        component: Main,
        children: [{
            path: 'list',
            name: 'culture-list',
            meta: {
                icon: 'md-book',
                title: '全部文章',
            },
            component: () => import('@/pages/culture/list')
        }, {
            path: 'type',
            name: 'culture-type',
            meta: {
                icon: 'ios-build',
                title: '类别设置',
            },
            component: () => import('@/pages/culture/type')
        }, {
            path: 'detail',
            name: 'culture-detail',
            meta: {
                icon: 'md-settings',
                title: '详细',
                hideInMenu: true,
            },
            component: () => import('@/pages/culture/detail')
        }]
    },
    {
        path: '/charitable',
        name: '_charitable',
        redirect: '/charitable/list',
        meta: {
            icon: 'ios-heart',
            title: '慈善公益',
            hide: false
        },
        component: Main,
        children: [{
            path: 'list',
            name: 'charitable-list',
            meta: {
                icon: 'md-heart',
                title: '公益记录',
            },
            component: () => import('@/pages/charitable/list')
        }, {
            path: 'out',
            name: 'charitable-out',
            meta: {
                icon: 'ios-infinite',
                title: '财务支出',
            },
            component: () => import('@/pages/charitable/out')
        }, {
            path: 'in',
            name: 'charitable-in',
            meta: {
                icon: 'md-albums',
                title: '捐款名录',
            },
            component: () => import('@/pages/charitable/in')
        }, {
            path: 'detail',
            name: 'culture-detail',
            meta: {
                icon: 'md-settings',
                title: '详细',
                hide: true,
                hideInMenu: true,
            },
            component: () => import('@/pages/charitable/detail')
        }]
    },
    {
        path: '/business',
        name: '_business',
        redirect: '/business/list',
        meta: {
            icon: 'md-pie',
            title: '家族产业',
            hide: true
        },
        component: Main,
        children: [{
            path: 'public',
            name: 'business-public',
            meta: {
                icon: 'ios-aperture',
                title: '家族产业',
            },
            component: () => import('@/pages/business/public')
        }, {
            path: 'personal',
            name: 'business-personal',
            meta: {
                icon: 'md-aperture',
                title: '个人产业',
            },
            component: () => import('@/pages/business/personal')
        }, {
            path: 'detail',
            name: 'culture-detail',
            meta: {
                icon: 'md-settings',
                title: '详细',
                hide: true,
                hideInMenu: true,
            },
            component: () => import('@/pages/business/detail')
        }]
    },
    {
        path: '/notable',
        name: '_notable',
        redirect: '/notable/list',
        meta: {
            icon: 'ios-people',
            title: '家族名人',
            hide: false
        },
        component: Main,
        children: [{
            path: 'list',
            name: 'notable-list',
            meta: {
                icon: 'md-star-half',
                title: '家族名人',
            },
            component: () => import('@/pages/notable/list')
        }, {
            path: 'type',
            name: 'notable-type',
            meta: {
                icon: 'md-git-network',
                title: '组织架构',
                hide: true,
            },
            component: () => import('@/pages/notable/type')
        }, {
            path: 'detail',
            name: 'notable-detail',
            meta: {
                icon: 'md-settings',
                title: '详细',
                hide: true,
                hideInMenu: true,
            },
            component: () => import('@/pages/notable/detail')
        }]
    },
    {
        path: '/record',
        name: '_record',
        redirect: '/record/list',
        meta: {
            icon: 'md-ribbon',
            title: '记录家族',
        },
        component: Main,
        children: [{
            path: 'list',
            name: 'ios-cloud',
            meta: {
                icon: 'logo-rss',
                title: '记录家族',
            },
            component: () => import('@/pages/record/list')
        }, {
            path: 'video',
            name: 'video',
            meta: {
                icon: 'md-videocam',
                title: '视频',
            },
            component: () => import('@/pages/record/video')
        }, {
            path: 'image',
            name: 'image',
            meta: {
                icon: 'md-image',
                title: '图片',
            },
            component: () => import('@/pages/record/image')
        }, {
            path: 'message',
            name: 'message',
            meta: {
                icon: 'ios-megaphone',
                title: '说说',
            },
            component: () => import('@/pages/record/message')
        }]
    },
    {
        path: '/users',
        name: '_users',
        redirect: '/users/list',
        meta: {
            icon: 'md-people',
            title: '用户管理',
            hide: false
        },
        component: Main,
        children: [{
            path: 'list',
            name: 'users-list',
            meta: {
                icon: 'ios-people-outline',
                title: '全部用户',
            },
            component: () => import('@/pages/users/list')
        },{
            path: 'manager',
            name: 'users-manager',
            meta: {
                icon: 'md-paw',
                title: '管理员',
            },
            component: () => import('@/pages/users/manager')
        },{
            path: 'log',
            name: 'log',
            meta: {
                icon: 'md-code',
                title: '管理员日志'
            },
            component: () => import('@/pages/users/log')
        }]
    },
    {
        path: '/help',
        name: '_help',
        redirect: '/help/help',
        meta: {
            icon: 'logo-buffer',
            title: '用户管理',
            hide: false
        },
        component: Main,
        children: [{
            path: 'help',
            name: 'help',
            meta: {
                icon: 'md-help-circle',
                title: '帮助',
            },
            component: () => import('@/pages/home/help')
        }]
    },
    {
        path: '/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/pages/error/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/pages/error/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/pages/error/404.vue')
    }
]