import Vue from 'vue';
import router from './router/';
import store from './store/';
import Api from './utils/api.js';
import App from './App.vue';
import iView from 'iview';
import config from '@/config'
import '@/assets/theme/iview.less'
import './assets/icon/iconfont.css';
Vue.use(iView);

Vue.prototype.api = Api
Vue.prototype.$config = config
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');