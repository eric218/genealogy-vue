import Vue from 'vue';
import router from './router/';
import store from './store/';
import Api from './utils/api.js';
import App from './App.vue';
import iView from 'iview';
import './assets/theme/iview.less';
// import 'iview/dist/styles/iview.css';
import './assets/icon/iconfont.css';
import './assets/css/app.scss';
import 'url-search-params-polyfill';

Vue.use(iView);

Vue.prototype.api = Api
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');