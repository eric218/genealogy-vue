import Vue from 'vue';
import router from './router/';
import store from './store/';
import App from './App.vue';
import iView from 'iview';
import Api from './libs/api.js';
import config from './libs/config'
import '@/assets/theme/iview.less'
import '@/assets/icon/iconfont.css';
import dayjs from 'dayjs'
Vue.use(iView);

Vue.prototype.api = Api
Vue.prototype.dayjs = dayjs
Vue.prototype.$config = config
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');