import Vue from 'vue'
import Vuex from 'vuex'
/* Theme settings module */
import ThemeSettings from './modules/ThemeSettings'
/* Authentication module */
import Authentication from './modules/Authentication'
/* Notifications module */
import Notifications from './modules/Notifications'
/* Common Mutations */
import mutations from './mutations'
import actions from './actions'
// global types
import * as types from './types'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Authentication,
    ThemeSettings,
    Notifications
  },
  state: {
    [types.LOADING]: false,
    [types.ERROR]: null,
    [types.CARDS]: null
  },
  mutations,
  actions,
  getters: {
    [types.LOADING] (state) {
      return state[types.LOADING]
    },
    [types.ERROR] (state) {
      return state[types.ERROR]
    },
    [types.CARDS] (state) {
      return state[types.CARDS]
    }
  }
})
