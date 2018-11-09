export default [{
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