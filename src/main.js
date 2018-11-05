import Vue from 'vue';
import router from './router/';
import store from './store/';
import Api from './utils/api.js';
import App from './App.vue';
import iView from 'iview';
import config from '@/config'
import './assets/theme/iview.less';
import './index.less'
// import 'iview/dist/styles/iview.css';
import './assets/icon/iconfont.css';
import './assets/css/app.scss';
import 'url-search-params-polyfill';

if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.use(iView);

Vue.prototype.api = Api
Vue.prototype.$config = config
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');