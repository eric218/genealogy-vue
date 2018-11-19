import {
    getNavData,
    getHomeApi,
} from '@/api/data.js'
async function handleNavlist(store, obj) {
    let res = await getNavData({
        siteId: store.state.siteId
    });
    store.commit('setNavList', res.data.data.menu_show)
    store.commit('setApiList', res.data.data.index_show)
    handleHomeAll(store)
}
async function handleHomeAll(store) {
    let list = store.state.apiList;
    let res = null;
    for (let v in list) {
        if (list[v].apiUrl != 'http://192.168.2.179:8090/#' && list[v].apiUrl != '#') {
            res = await getHomeApi(list[v].apiUrl)
            store.commit('setHomeData', {
                type: v,
                data: res.data
            })
        }
    }
}

export default {
    handleNavlist,
}