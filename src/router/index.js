import Vue from 'vue';
import Router from 'vue-router';
import routes from './routerConfig.js';
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        document.title = to.meta.title;
    }
});