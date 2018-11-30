import LayoutBase from '@/layouts/base'
import LayoutCounty from '@/layouts/county'
import LayoutProvince from '@/layouts/province'
import LayoutUser from '@/layouts/user'

import admin from './admin/admin'
import nation from './nation/nation'
import province from './province/province'
import county from './county/county'
import user from './user/user'

export default [{
        path: "/",
        redirect: "/base"
    },
    {
        path: "/base",
        name: 'base',
        meta: {
            title: '炎黄统谱网',
        },
        component: () => import('@/pages/error/base.vue')
    },
    {
        path: '/a',
        redirect: '/a/home',
        component: LayoutBase,
        meta: {
            title: '炎黄统谱网',
            hideInMenu: true,
        },
        children: admin
    },
    {
        path: "/n",
        redirect: "/n/home",
        component: LayoutBase,
        meta: {
            title: '炎黄统谱网',
        },
        children: nation
    },
    {
        path: "/p",
        redirect: "/p/Home",
        component: LayoutProvince,
        meta: {
            title: '炎黄统谱网',
        },
        children: province
    },
    {
        path: "/c",
        redirect: "/c/home",
        component: LayoutCounty,
        meta: {
            title: '炎黄统谱网',
        },
        children: county
    },
    {
        path: "/u",
        redirect: "/u/user",
        component: LayoutUser,
        meta: {
            title: '炎黄统谱网',
        },
        children: user
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            title: '404错误',
            hideInMenu: true
        },
        component: () => import('@/pages/error/404.vue')
    }
]