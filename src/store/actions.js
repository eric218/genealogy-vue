import {
    getNavData
} from '@/api/data.js'
async function handleNavlist(store, obj) {
    let res = await getNavData();
    console.log(res);
    store.commit('setNavList', res.data.data.menu_show)
    // store.commit('setHomeData', res.data.data)
    store.state.siteId = 1
}

export default {
    handleNavlist,
}