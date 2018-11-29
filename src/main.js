import Vue from 'vue';
import router from './router/';
import store from './store/';
import App from './App.vue';
import iView from 'iview'
import Api from './libs/api'
import iviewArea from 'iview-area'
import '@/assets/theme/iview.less'
import '@/assets/icon/iconfont.css';
import dayjs from 'dayjs'
Vue.use(iView);
Vue.use(iviewArea);

Vue.prototype.api = Api
Vue.prototype.dayjs = dayjs

router.beforeEach((to, from, next) => {
    let role = localStorage.user ? JSON.parse(localStorage.user).role : null
    if (role) {
        if (to.meta.role && to.meta.role != role) {
            router.back(-1)
        } else {
            next()
        }
    } else {
        next()
    }
})
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');