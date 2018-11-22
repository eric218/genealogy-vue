function resetUser(store, obj) {
    if (localStorage.user) {
        store.commit('updateUser', JSON.parse(localStorage.user));
    }
}
export default {
    resetUser
}