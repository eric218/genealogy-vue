import store_county from './module/county.js'
const mutations = {
    updateSiteid(state, obj) {
        localStorage.siteId = obj
        store_county.state.apiList = null
        state.siteId = obj
    },
    updateUser(state, obj) {
        localStorage.user = JSON.stringify(obj)
        state.user = obj
    },
}
export default mutations