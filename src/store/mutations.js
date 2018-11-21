const mutations = {
    updateSiteid(state, obj) {
        state.siteId = obj;
    },
    updateUser(state, obj) {
        localStorage.token = obj.token
        state.user = obj
    },
}
export default mutations