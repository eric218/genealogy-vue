import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import admin from './module/admin'
import county from './module/county'
import province from './module/province'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
    modules: {
        user,
        admin,
        county,
        province,
    }
})