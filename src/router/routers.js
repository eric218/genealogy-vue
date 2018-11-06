import Manager from '@/layout/manager'
import Main from '@/layout/main'
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
        path: "/",
        redirect: "/c"
    },
    // {
    //     path: "/n/Home",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "首页"
    //     },
    //     component: resolve => require(["../page-nation/Home.vue"], resolve)
    // },
    // {
    //     path: "/n/Culture",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "家族文化"
    //     },
    //     component: resolve => require(["../page-nation/Culture.vue"], resolve)
    // },
    // {
    //     path: "/n/Genealogy",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "数字家谱"
    //     },
    //     component: resolve => require(["../page-nation/Genealogy.vue"], resolve)
    // },
    // {
    //     path: "/n/Human",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "祖先名人"
    //     },
    //     component: resolve => require(["../page-nation/Human.vue"], resolve)
    // },
    // {
    //     path: "/n/Tree",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "各地分支"
    //     },
    //     component: resolve => require(["../page-nation/Tree.vue"], resolve)
    // },
    // {
    //     path: "/n/Record",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "记录家族"
    //     },
    //     component: resolve => require(["../page-nation/Record.vue"], resolve)
    // },
    // {
    //     path: "/n/Charity",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "慈善公益"
    //     },
    //     component: resolve => require(["../page-nation/Charity.vue"], resolve)
    // },
    // {
    //     path: "/n/Detail",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "详情"
    //     },
    //     component: resolve => require(["../page-nation/Detail.vue"], resolve)
    // },
    // {
    //     path: "/p/Home",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "首页"
    //     },
    //     component: resolve => require(["../page-province/Home.vue"], resolve)
    // },
    // {
    //     path: "/p/Culture",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "家族文化"
    //     },
    //     component: resolve => require(["../page-province/Culture.vue"], resolve)
    // },
    // {
    //     path: "/p/Genealogy",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "数字家谱"
    //     },
    //     component: resolve => require(["../page-province/Genealogy.vue"], resolve)
    // },
    // {
    //     path: "/p/Human",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "祖先名人"
    //     },
    //     component: resolve => require(["../page-province/Human.vue"], resolve)
    // },
    // {
    //     path: "/p/Tree",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "各地分支"
    //     },
    //     component: resolve => require(["../page-province/Tree.vue"], resolve)
    // },
    // {
    //     path: "/p/Record",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "记录家族"
    //     },
    //     component: resolve => require(["../page-province/Record.vue"], resolve)
    // },
    // {
    //     path: "/p/Charity",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "慈善公益"
    //     },
    //     component: resolve => require(["../page-province/Charity.vue"], resolve)
    // },
    // {
    //     path: "/p/Detail",
    //     meta: {
    //         hideInMenu: true,
    //         
    //         title: "详情"
    //     },
    //     component: resolve => require(["../page-province/Detail.vue"], resolve)
    // },
    {
        path: "/c",
        meta: {
            hideInMenu: true,
        },
        redirect: "/c/Home",
        component: Main,
        children: [{
            path: 'home',
            name: 'c_home',
            meta: {
                title: "首页"
            },
            component: () => import('@/page-county/Home')
        }, {
            path: 'culture',
            name: 'c_culture',
            meta: {
                title: "家族文化"
            },
            component: () => import('@/page-county/Culture')
        }, {
            path: 'charity',
            name: 'c_charity',
            meta: {
                title: "慈善公益"
            },
            component: () => import('@/page-county/Charity')
        }, {
            path: 'products',
            name: 'c_products',
            meta: {
                title: "慈善公益"
            },
            component: () => import('@/page-county/Products')
        }, {
            path: 'human',
            name: 'c_human',
            meta: {
                title: "家族名人"
            },
            component: () => import('@/page-county/Human')
        }, {
            path: 'ancestors',
            name: 'c_ancestors',
            meta: {
                title: "祖先分支"
            },
            component: () => import('@/page-county/Ancestors')
        }, {
            path: 'dynamic',
            name: 'c_dynamic',
            meta: {
                title: "记录家族"
            },
            component: () => import('@/page-county/Dynamic')
        }, {
            path: 'detail',
            name: 'c_detail',
            meta: {
                title: "文章详情"
            },
            component: () => import('@/page-county/Detail')
        }]
    },
    {
        path: "/u",
        meta: {
            hideInMenu: true,
        },
        redirect: "/u/user",
        component: Main,
        children: [{
            path: 'user',
            name: 'u-center',
            meta: {
                title: "个人中心"
            },
            component: () => import('@/page-user/User')
        }, {
            path: 'family',
            name: 'u-family',
            meta: {
                title: "我的家谱"
            },
            component: () => import('@/page-user/Family')
        }, {
            path: 'donate',
            name: 'u-donate',
            meta: {
                title: "捐赠记录"
            },
            component: () => import('@/page-user/Donate')
        }, {
            path: 'note',
            name: 'u-note',
            meta: {
                title: "我的日志"
            },
            component: () => import('@/page-user/Note')
        }, {
            path: 'msg',
            name: 'u-msg',
            meta: {
                title: "我的消息"
            },
            component: () => import('@/page-user/Msg')
        }, {
            path: 'video',
            name: 'u-video',
            meta: {
                title: "我的视频"
            },
            component: () => import('@/page-user/Video')
        }, {
            path: 'image',
            name: 'u-image',
            meta: {
                title: "我的图片"
            },
            component: () => import('@/page-user/Image')
        }]
    },
    {
        name: "Census",
        path: "/Census",
        meta: {
            hideInMenu: true,
            title: "统谱编修"
        },
        component: resolve => require(["../page-census/Census.vue"], resolve)
    }, {
        path: '/Admin/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: () => import('@/page-admin/login/login.vue')
    },
    {
        path: '/Admin/',
        name: '_home',
        redirect: '/home',
        component: Manager,
        children: [{
            path: '/Admin/home',
            name: 'home',
            meta: {
                title: '控制台',
                icon: 'md-home'
            },
            component: () => import('@/page-admin/home/home')
        }]
    },
    {
        path: '/Admin/setting',
        name: '_setting',
        redirect: '/setting/setting',
        meta: {
            icon: 'ios-settings',
            title: '运营',
            hide: true
        },
        component: Manager,
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
        path: '/Admin/podium',
        name: '_podium',
        redirect: '/podium/podium',
        meta: {
            icon: 'ios-podium',
            title: '数据中心',
        },
        component: Manager,
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
        path: '/Admin/culture',
        name: '_culture',
        redirect: '/culture/list',
        meta: {
            icon: 'md-bookmarks',
            title: '家族文化'
        },
        component: Manager,
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
        }, {
            path: 'detail',
            name: 'culture-detail',
            meta: {
                icon: 'md-settings',
                title: '详细',
                hideInMenu: true,
            },
            component: () => import('@/page-admin/culture/detail')
        }]
    },
    {
        path: '/Admin/charitable',
        name: '_charitable',
        redirect: '/charitable/list',
        meta: {
            icon: 'ios-heart',
            title: '慈善公益',
            hide: false
        },
        component: Manager,
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
        path: '/Admin/business',
        name: '_business',
        redirect: '/business/list',
        meta: {
            icon: 'md-pie',
            title: '家族产业',
            hide: true
        },
        component: Manager,
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
        path: '/Admin/notable',
        name: '_notable',
        redirect: '/notable/list',
        meta: {
            icon: 'ios-people',
            title: '家族名人',
            hide: false
        },
        component: Manager,
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
        path: '/Admin/record',
        name: '_record',
        redirect: '/record/list',
        meta: {
            icon: 'md-ribbon',
            title: '记录家族',
        },
        component: Manager,
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
        path: '/Admin/users',
        name: '_users',
        redirect: '/users/list',
        meta: {
            icon: 'md-people',
            title: '用户管理',
            hide: false
        },
        component: Manager,
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
        path: '/Admin/help',
        name: '_help',
        redirect: '/help/help',
        meta: {
            icon: 'logo-buffer',
            title: '用户管理',
            hide: false
        },
        component: Manager,
        children: [{
            path: 'help',
            name: 'help',
            meta: {
                icon: 'md-help-circle',
                title: '帮助',
            },
            component: () => import('@/page-admin/home/help')
        }]
    },
    {
        path: '/Admin/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/page-admin/error/401.vue')
    },
    {
        path: '/Admin/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/page-admin/error/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/page-admin/error/404.vue')
    }
]