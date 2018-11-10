import BASE from '@/layouts/base'
import Main from '@/layouts/main'
import admin from './admin'
import nation from './nation'
import province from './province'
import county from './county'
import user from './user'

export default [{
        path: "/",
        redirect: "/base"
    },
    {
        path: "/base",
        name: 'base',
        meta: {
            title: '配置',
        },
        component: () => import('@/page_county/base.vue')
    },
    {
        path: '/a',
        redirect: '/a/home',
        component: BASE,
        meta: {
            hideInMenu: true,
        },
        children: admin
    },
    {
        path: "/n",
        redirect: "/n/home",
        component: Main,
        children: nation
    },
    {
        path: "/p",
        redirect: "/p/Home",
        component: Main,
        children: province
    },
    {
        path: "/c",
        redirect: "/c/home",
        component: Main,
        children: county
    },
    {
        path: "/u",
        redirect: "/u/user",
        component: Main,
        children: user
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