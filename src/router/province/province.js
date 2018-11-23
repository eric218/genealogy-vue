export default [{
    path: 'home',
    name: 'p_home',
    meta: {
        title: "首页"
    },
    component: () => import('@/pages/province/Home')
}, {
    path: 'culture',
    name: 'p_culture',
    meta: {
        title: "家族文化"
    },
    component: () => import('@/pages/province/Culture')
}, {
    path: 'genealogy',
    name: 'p_genealogy',
    meta: {
        title: "数字家谱"
    },
    component: () => import('@/pages/province/Genealogy')
}, {
    path: 'human',
    name: 'p_human',
    meta: {
        title: "祖先名人"
    },
    component: () => import('@/pages/province/Human')
}, {
    path: 'tree',
    name: 'p_tree',
    meta: {
        title: "各地分支"
    },
    component: () => import('@/pages/province/Tree')
}, {
    path: 'record',
    name: 'p_record',
    meta: {
        title: "记录家族"
    },
    component: () => import('@/pages/province/Record')
}, {
    path: 'charity',
    name: 'p_charity',
    meta: {
        title: "慈善公益"
    },
    component: () => import('@/pages/province/Charity')
}, {
    path: 'detail',
    name: 'p_detail',
    meta: {
        title: "详情"
    },
    component: () => import('@/pages/province/Detail')
}]