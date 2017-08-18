import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    drawerLinks: [
      { icon: 'home', link: '/', label: 'Home Page' },
      { icon: 'laptop', link: '/projects', label: 'My projects' },
      { icon: 'assignment', href: '/static/documents/resume.pdf', label: 'Resume' },
      { icon: 'face', link: '/about', label: 'About alex' },
      { icon: 'settings', link: '/settings', label: 'Settings' },
      { icon: 'lock', link: '/admin', label: 'Admin' }
    ],
    theme: {
      dark: true
    },
    drawers: ['Permanent', 'Persistent', 'Temporary'],
    primaryDrawer: {
      model: true,
      type: 'persistent',
      clipped: false,
      floating: false,
      mini: false
    },
    footer: {
      fixed: false
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    drawerLinks (state) {
      return state.drawerLinks
    },
    theme (state) {
      return state.theme
    },
    primaryDrawer (state) {
      return state.primaryDrawer
    },
    footer (state) {
      return state.footer
    }
  }
})
