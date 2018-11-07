const mutations = {
    setNavList(state, obj) {
        state.navList = obj
    },
    setApiList(state, obj) {
        state.apiList = obj
    },
    updateSiteid(state, obj) {
        state.siteId = obj;
    },
    setHomeData(state, obj) {
        state.homeData[obj.type] = obj.data.data
    }
}
export default mutations