import Vue from 'vue'
import Vuex from 'vuex'
/* Contains all route card data */
import Data from '../data/routeData'
/* Theme settings module */
import ThemeSettings from './modules/ThemeSettings'
/* Authentication module */
import Authentication from './modules/Authentication'
/* Common Mutations */
import * as mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Authentication,
    ThemeSettings
  },
  state: {
    loading: false,
    error: null,
    cards: null
  },
  mutations,
  actions: {
    getRouteData ({commit, state}, payload) {
      const routeData = Data.find(route => route.path.toUpperCase() === payload.path.toUpperCase())
      if (routeData) {
        commit('setCards', routeData.cards)
      }
    }
  },
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
