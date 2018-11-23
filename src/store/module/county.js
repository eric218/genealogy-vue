import api from '@/libs/api.js'
import base_store from '@/store/';

function handleHomeApi(store, obj) {
    api.get(api.urls.base + api.urls.common_home_all, {
        siteId: base_store.state.siteId
    }).then(res => {
        store.commit('setApiList', res.data.index_show)
    })
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