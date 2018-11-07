import Manager from '@/layouts/manager'
import Main from '@/layouts/main'

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
        meta: {
            hideInMenu: true,
        },
        redirect: "/base"
    },
    {
        path: "/base",
        name: 'base',
        meta: {
            title: '配置',
            hideInMenu: true,
        },
        component: () => import('@/page-county/base.vue')
    },
    {
        path: "/n",
        meta: {
            hideInMenu: true,
        },
        redirect: "/n/home",
        component: Main,
        children: [{
            path: 'home',
            name: 'n_home',
            meta: {
                title: "首页"
            },
            component: () => import('@/page-nation/Home')
        }, {
            path: 'culture',
            name: 'n_culture',
            meta: {
                title: "家族文化"
            },
            component: () => import('@/page-nation/Culture')
        }, {
            path: 'genealogy',
            name: 'n_genealogy',
            meta: {
                title: "数字家谱"
            },
            component: () => import('@/page-nation/Genealogy')
        }, {
            path: 'human',
            name: 'n_human',
            meta: {
                title: "祖先名人"
            },
            component: () => import('@/page-nation/Human')
        }, {
            path: 'tree',
            name: 'n_tree',
            meta: {
                title: "各地分支"
            },
            component: () => import('@/page-nation/Tree')
        }, {
            path: 'record',
            name: 'n_record',
            meta: {
                title: "记录家族"
            },
            component: () => import('@/page-nation/Record')
        }, {
            path: 'charity',
            name: 'n_charity',
            meta: {
                title: "慈善公益"
            },
            component: () => import('@/page-nation/Charity')
        }, {
            path: 'detail',
            name: 'n_detail',
            meta: {
                title: "详情"
            },
            component: () => import('@/page-nation/Detail')
        }]
    },
    {
        path: "/p",
        meta: {
            hideInMenu: true,
        },
        redirect: "/p/Home",
        component: Main,
        children: [{
            path: 'home',
            name: 'p_home',
            meta: {
                title: "首页"
            },
            component: () => import('@/page-province/Home')
        }, {
            path: 'culture',
            name: 'p_culture',
            meta: {
                title: "家族文化"
            },
            component: () => import('@/page-province/Culture')
        }, {
            path: 'genealogy',
            name: 'p_genealogy',
            meta: {
                title: "数字家谱"
            },
            component: () => import('@/page-province/Genealogy')
        }, {
            path: 'human',
            name: 'p_human',
            meta: {
                title: "祖先名人"
            },
            component: () => import('@/page-province/Human')
        }, {
            path: 'tree',
            name: 'p_tree',
            meta: {
                title: "各地分支"
            },
            component: () => import('@/page-province/Tree')
        }, {
            path: 'record',
            name: 'p_record',
            meta: {
                title: "记录家族"
            },
            component: () => import('@/page-province/Record')
        }, {
            path: 'charity',
            name: 'p_charity',
            meta: {
                title: "慈善公益"
            },
            component: () => import('@/page-province/Charity')
        }, {
            path: 'detail',
            name: 'p_detail',
            meta: {
                title: "详情"
            },
            component: () => import('@/page-province/Detail')
        }]
    },
    {
        path: "/c",
        meta: {
            hideInMenu: true,
        },
        redirect: "/c/home",
        component: Main,
        children: [{
                path: 'home',
                name: 'home',
                meta: {
                    title: "首页"
                },
                component: () => import('@/page-county/Home')
            }, {
                path: 'culture_home',
                name: 'culture_home',
                meta: {
                    title: "家族文化"
                },
                component: () => import('@/page-county/culture')
            }, {
                path: 'charity_home',
                name: 'charity_home',
                meta: {
                    title: "慈善公益"
                },
                component: () => import('@/page-county/charity')
            }, {
                path: 'industry_home',
                name: 'industry_home',
                meta: {
                    title: "家族产业"
                },
                component: () => import('@/page-county/industry')
            }, {
                path: 'famous_home',
                name: 'famous_home',
                meta: {
                    title: "家族名人"
                },
                component: () => import('@/page-county/famous')
            }, {
                path: 'ancestors',
                name: 'famous_home',
                meta: {
                    title: "祖先分支"
                },
                component: () => import('@/page-county/Ancestors')
            }, {
                path: 'family_record_home',
                name: 'family_record_home',
                meta: {
                    title: "记录家族"
                },
                component: () => import('@/page-county/family_record')
            },
            {
                path: "tongpu_home",
                name: "tongpu_home",
                meta: {
                    title: "统谱编修"
                },
                component: () => import('@/page-county/tongpu')
            },
            {
                path: 'detail',
                name: 'detail',
                meta: {
                    title: "文章详情"
                },
                component: () => import('@/page-county/Detail')
            }
        ]
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