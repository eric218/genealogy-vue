import {
    getNavData,
} from '@/api/data.js'
import base_store from '@/store/';

async function handleHomeApi(store, obj) {
    let res = await getNavData({
        siteId: base_store.state.siteId
    });
    store.commit('setApiList', res.data.data.index_show)
    console.log(res.data.data.index_show)
}
export default {
    state: {
        apiList: null, //首页api
    },
    mutations: {
        setApiList(state, obj) {
            state.apiList = obj
        },
    },
    actions: {
        handleHomeApi,
    }
}