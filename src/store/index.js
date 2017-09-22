import Vue from 'vue'
import Vuex from 'vuex'
/* Theme settings module */
import ThemeSettings from './modules/ThemeSettings'
/* Authentication module */
import Authentication from './modules/Authentication'
/* Notifications module */
import Notifications from './modules/Notifications'
/* Common Mutations */
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Authentication,
    ThemeSettings,
    Notifications
  },
  state: {
    loading: false,
    error: null,
    cards: null
  },
  mutations,
  actions,
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    cards (state) {
      return state.cards
    }
  }
})
