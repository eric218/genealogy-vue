const routes = [{
        path: "/",
        redirect: "/c/Home"
    },
    {
        path: "/c/Home",
        meta: {
            keepAlive: false,
            title: "首页"
        },
        component: resolve => require(["../page-county/Home.vue"], resolve)
    },
    {
        path: "/c/Culture",
        meta: {
            keepAlive: false,
            title: "家族文化"
        },
        component: resolve => require(["../page-county/Culture.vue"], resolve)
    },
    {
        path: "/c/Charity",
        meta: {
            keepAlive: false,
            title: "慈善公益"
        },
        component: resolve => require(["../page-county/Charity.vue"], resolve)
    },
    {
        path: "/c/Products",
        meta: {
            keepAlive: false,
            title: "家族产业"
        },
        component: resolve => require(["../page-county/Products.vue"], resolve)
    },
    {
        name: "Human",
        path: "/c/Human",
        meta: {
            keepAlive: false,
            title: "家族名人"
        },
        component: resolve => require(["../page-county/Human.vue"], resolve)
    },
    {
        name: "Ancestors",
        path: "/c/Ancestors",
        meta: {
            keepAlive: false,
            title: "祖先分支"
        },
        component: resolve => require(["../page-county/Ancestors.vue"], resolve)
    },
    {
        name: "Dynamic",
        path: "/c/Dynamic",
        meta: {
            keepAlive: false,
            title: "记录家族"
        },
        component: resolve => require(["../page-county/Dynamic.vue"], resolve)
    },
    {
        name: "Detail",
        path: "/c/Detail",
        meta: {
            keepAlive: false,
            title: "文章详情"
        },
        component: resolve => require(["../page-county/Detail.vue"], resolve)
    },
    {
        name: "User",
        path: "/User",
        meta: {
            keepAlive: false,
            title: "个人中心"
        },
        component: resolve => require(["../page-user/User.vue"], resolve)
    },
    {
        name: "UserFamily",
        path: "/User/Family",
        meta: {
            keepAlive: false,
            title: "我的家谱"
        },
        component: resolve => require(["../page-user/Family.vue"], resolve)
    },
    {
        name: "UserDonate",
        path: "/User/Donate",
        meta: {
            keepAlive: false,
            title: "捐赠记录"
        },
        component: resolve => require(["../page-user/Donate.vue"], resolve)
    },
    {
        name: "UserNote",
        path: "/User/Note",
        meta: {
            keepAlive: false,
            title: "我的日志"
        },
        component: resolve => require(["../page-user/Note.vue"], resolve)
    },
    {
        name: "UserMsg",
        path: "/User/Msg",
        meta: {
            keepAlive: false,
            title: "我的日志"
        },
        component: resolve => require(["../page-user/Msg.vue"], resolve)
    },
    {
        name: "UserVideo",
        path: "/User/Video",
        meta: {
            keepAlive: false,
            title: "我的视频"
        },
        component: resolve => require(["../page-user/Video.vue"], resolve)
    },
    {
        name: "UserImage",
        path: "/User/Image",
        meta: {
            keepAlive: false,
            title: "我的图片"
        },
        component: resolve => require(["../page-user/Image.vue"], resolve)
    },
    {
        name: "UserMsg",
        path: "/User/Msg",
        meta: {
            keepAlive: false,
            title: "我的说说"
        },
        component: resolve => require(["../page-user/Msg.vue"], resolve)
    },
    {
        name: "Census",
        path: "/Census",
        meta: {
            keepAlive: false,
            title: "统谱编修"
        },
        component: resolve => require(["../page-census/Census.vue"], resolve)
    }
];
export default routes;