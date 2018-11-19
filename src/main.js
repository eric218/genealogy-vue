import Vue from 'vue';
import router from './router/';
import store from './store/';
import App from './App.vue';
import iView from 'iview' //iview
import Api from './libs/api' //util插件
import config from './libs/config' //公共配置
import iviewArea from 'iview-area' //iview-area
import '@/assets/theme/iview.less'
import '@/assets/icon/iconfont.css';
import dayjs from 'dayjs'
Vue.use(iView);
Vue.use(iviewArea);

Vue.prototype.api = Api
Vue.prototype.dayjs = dayjs
Vue.prototype.$config = config
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');