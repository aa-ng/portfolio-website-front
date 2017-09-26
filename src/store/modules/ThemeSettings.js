import Defaults from '../../data/settings/defaults'
import * as types from '../types'

const state = {
  // stores drawer navigation links
  [types.DRAWER_LINKS]: [
    { icon: 'home', link: '/', label: 'Home Page' },
    { icon: 'laptop', link: '/projects', label: 'My projects' },
    { icon: 'assignment', href: '/static/documents/resume.pdf', label: 'Resume' },
    { icon: 'face', link: '/about', label: 'About alex' },
    { icon: 'settings', link: '/settings', label: 'Settings' }
  ],
  [types.DRAWERS]: ['Permanent', 'Persistent', 'Temporary'],
  // stores the variables we want to save for settings
  [types.STORED_SETTINGS]: [
    {name: types.THEME, setter: types.MUTATE_THEME},
    {name: types.FOOTER, setter: types.MUTATE_FOOTER},
    {name: types.PRIMARY_DRAWER, setter: types.MUTATE_PRIMARY_DRAWER}
  ],
  [types.THEME]: Defaults[types.THEME],
  [types.PRIMARY_DRAWER]: Defaults[types.PRIMARY_DRAWER],
  [types.FOOTER]: Defaults[types.FOOTER]
}

const getters = {
  [types.DRAWER_LINKS] (state) {
    return state[types.DRAWER_LINKS]
  },
  [types.THEME] (state) {
    return state[types.THEME]
  },
  [types.PRIMARY_DRAWER] (state) {
    return state[types.PRIMARY_DRAWER]
  },
  [types.FOOTER] (state) {
    return state[types.FOOTER]
  },
  [types.DRAWERS] (state) {
    return state[types.DRAWERS]
  },
  [types.STORED_SETTINGS] (state) {
    return state[types.STORED_SETTINGS]
  }
}

const mutations = {
  [types.MUTATE_THEME] (state, payload) {
    state[types.THEME] = payload
  },
  [types.MUTATE_PRIMARY_DRAWER] (state, payload) {
    state[types.PRIMARY_DRAWER] = payload
  },
  [types.MUTATE_FOOTER] (state, payload) {
    state[types.FOOTER] = payload
  }
}

const actions = {
  [types.SAVE_SETTINGS] ({state, getters}) {
    for (var i = 0; i < getters[types.STORED_SETTINGS].length; i++) {
      var setting = getters[types.STORED_SETTINGS][i].name
      if (getters[setting]) {
        console.log('Saving ' + setting + ': ' + getters[setting])
        localStorage.setItem(setting, JSON.stringify(getters[setting]))
      }
    }
  },
  [types.GET_SETTINGS] ({commit, getters}) {
    for (var i = 0; i < getters[types.STORED_SETTINGS].length; i++) {
      var setting = getters[types.STORED_SETTINGS][i]
      var name = setting.name
      var setter = setting.setter
      var save = localStorage.getItem(name)
      if (save) {
        console.log('Found ' + name + ': ' + save)
        commit(setter, JSON.parse(save))
      }
    }
  },
  [types.RESET_SETTINGS] ({commit, getters, dispatch}) {
    for (var i = 0; i < getters[types.STORED_SETTINGS].length; i++) {
      var name = getters[types.STORED_SETTINGS][i].name
      var setter = getters[types.STORED_SETTINGS][i].setter
      commit(setter, Defaults[name])
      dispatch(types.SAVE_SETTINGS)
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
