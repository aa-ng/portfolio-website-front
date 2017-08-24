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
    },
    cards: [
      {
        media: {
          title: "Welcome I'm Alex",
          src: '/static/images/projects/ru-fighter/alex-min.png',
          flex: 'xs12',
          color: 'accent',
          contain: true,
          height: '200px'
        },
        body: {
          flex: 'xs12',
          title: "Welcome I'm Alex",
          summary: 'Welcome to my portfolio website!',
          chips: [
            {label: 'Web developer', icon: 'web', color: 'indigo'},
            {label: 'Software developer', icon: 'code', color: 'light-blue'},
            {label: 'Digital media enthusiast', icon: 'work', color: 'pink'}
          ]
        }
      },
      {
        actions: [{label: 'Details', link: '/projects'}],
        body: {
          flex: 'xs12',
          title: 'Projects',
          summary: 'Check out some of my selected projects here on this site or on Github.'
        },
        details: {
          showDetails: false,
          buttons: [
            {label: 'Random maze gen', link: '/projects#mazeproject'},
            {label: 'Ignite', link: '/projects#ignite'},
            {label: 'Portfolio website', link: '/projects#webportfolio'}
          ]
        },
        media: {
          title: 'Projects',
          height: '200px',
          src: '/static/images/projects/ignite/preview.png',
          flex: 'xs12'
        }
      },
      {
        body: {
          flex: 'xs12 md8 lg9',
          title: 'About me',
          summary: 'Entering their 3rd year of Computer Science at Ryerson university Alex is strengthening their development portfolio, with new technologies and frameworks like VueJS, NodeJS and Firebase. Alex is also interested in the future of machine learning and data sciences.'
        },
        media: {
          title: 'About me',
          contain: true,
          src: '/static/images/profile_pic_round.png',
          flex: 'xs12 md4 lg3'
        },
        details: {
          title: 'Summary of skills',
          showDetails: false,
          chips: [
            {label: 'NodeJS', icon: 'device_hub', color: 'green'},
            {label: 'VueJS', icon: 'pageview', color: 'teal'},
            {label: 'Responsive design', icon: 'dashboard', color: 'blue'},
            {label: 'AJAX', icon: 'send', color: 'purple'},
            {label: 'Git', icon: 'history', color: 'orange'},
            {label: 'Java', icon: 'computer', color: 'red'}
          ],
          buttons: [{label: 'Details', link: '/about'}]
        },
        actions: [{label: 'Resume', href: '/static/documents/resume.pdf', icon: 'assignment'}]
      },
      {
        body: {
          title: 'Contact me',
          summary: 'Fields below are currently in maintenance, send me an email at: Alex.ng.personal@gmail.com',
          form: {
            inputs: [
              {label: 'Name', required: true, model: ''},
              {label: 'Email', required: true, model: ''},
              {label: 'Message', required: true, model: '', multiline: true}
            ],
            action: {
              label: 'Out of order',
              icon: 'close'
            }
          }
        },
        actions: [
          {label: 'Github', href: 'https://github.com/CynicalBird', icon: 'link'},
          {label: 'LinkedIn', href: 'https://www.linkedin.com/in/alex-ng-130039134/?ppe=1', icon: 'link'}
        ],
        details: {
          showDetails: false,
          buttons: [
            {label: 'Email', href: 'mailto:alex.ng.personal@gmail.com', icon: 'email'}
          ]
        }
      }
    ]
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
    },
    drawers (state) {
      return state.drawers
    },
    cards (state) {
      return state.cards
    }
  }
})
