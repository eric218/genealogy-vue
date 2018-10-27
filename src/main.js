import Vue from 'vue';
import router from './router/';
import store from './store/';
import Api from './api.js';
import App from './App.vue';
import iView from 'iview';
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import './assets/theme/iview.less';
// import 'iview/dist/styles/iview.css';
import './assets/icon/iconfont.css';
import './assets/css/app.scss';
import 'url-search-params-polyfill';

Vue.use(iView);
Vue.use(VueQuillEditor)

Vue.prototype.api = Api
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');