const mutations = {
    updateSiteid(state, obj) {
        state.siteId = obj
    },
    updateUser(state, obj) {
        localStorage.user = JSON.stringify(obj)
        state.user = obj
    },
}
export default mutations