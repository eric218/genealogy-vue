import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const routes = [{
        path: "/",
        redirect: "/Home"
    },
    {
        name: "Home",
        path: "/Home",
        meta: {
            keepAlive: false,
            title: "首页"
        },
        component: resolve => require(["../pages/Home/Home.vue"], resolve)
    },
    {
        name: "Culture",
        path: "/Culture",
        meta: {
            keepAlive: false,
            title: "家族文化"
        },
        component: resolve => require(["../pages/Culture/Culture.vue"], resolve)
    },
    {
        name: "Charity",
        path: "/Charity",
        meta: {
            keepAlive: false,
            title: "慈善公益"
        },
        component: resolve => require(["../pages/Charity/Charity.vue"], resolve)
    },
    {
        name: "Products",
        path: "/Products",
        meta: {
            keepAlive: false,
            title: "家族产业"
        },
        component: resolve => require(["../pages/Products/Products.vue"], resolve)
    },
    {
        name: "Human",
        path: "/Human",
        meta: {
            keepAlive: false,
            title: "家族名人"
        },
        component: resolve => require(["../pages/Human/Human.vue"], resolve)
    },
    {
        name: "Ancestors",
        path: "/Ancestors",
        meta: {
            keepAlive: false,
            title: "祖先分支"
        },
        component: resolve => require(["../pages/Ancestors/Ancestors.vue"], resolve)
    },
    {
        name: "User",
        path: "/User",
        meta: {
            keepAlive: false,
            title: "个人中心"
        },
        component: resolve => require(["../pages/User/User.vue"], resolve)
    },
    {
        name: "UserFamily",
        path: "/User/Family",
        meta: {
            keepAlive: false,
            title: "我的家谱"
        },
        component: resolve => require(["../pages/User/Family.vue"], resolve)
    },
    {
        name: "UserDonate",
        path: "/User/Donate",
        meta: {
            keepAlive: false,
            title: "捐赠记录"
        },
        component: resolve => require(["../pages/User/Donate.vue"], resolve)
    },
    {
        name: "UserNote",
        path: "/User/Note",
        meta: {
            keepAlive: false,
            title: "我的日志"
        },
        component: resolve => require(["../pages/User/Note.vue"], resolve)
    },
    {
        name: "UserMsg",
        path: "/User/Msg",
        meta: {
            keepAlive: false,
            title: "我的日志"
        },
        component: resolve => require(["../pages/User/Msg.vue"], resolve)
    },
    {
        name: "UserVideo",
        path: "/User/Video",
        meta: {
            keepAlive: false,
            title: "我的视频"
        },
        component: resolve => require(["../pages/User/Video.vue"], resolve)
    },
    {
        name: "UserImage",
        path: "/User/Image",
        meta: {
            keepAlive: false,
            title: "我的图片"
        },
        component: resolve => require(["../pages/User/Image.vue"], resolve)
    },
    {
        name: "UserMsg",
        path: "/User/Msg",
        meta: {
            keepAlive: false,
            title: "我的说说"
        },
        component: resolve => require(["../pages/User/Msg.vue"], resolve)
    },
    {
        name: "Dynamic",
        path: "/Dynamic",
        meta: {
            keepAlive: false,
            title: "记录家族"
        },
        component: resolve => require(["../pages/Dynamic/Dynamic.vue"], resolve)
    },
    {
        name: "Detail",
        path: "/Detail",
        meta: {
            keepAlive: false,
            title: "文章详情"
        },
        component: resolve => require(["../pages/Home/Detail.vue"], resolve)
    },
    {
        name: "Census",
        path: "/Census",
        meta: {
            keepAlive: false,
            title: "统谱编修"
        },
        component: resolve => require(["../pages/Census/Census.vue"], resolve)
    }
];
export default new Router({
    // mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        document.title = to.meta.title;
    }
});