import Defaults from '../../data/settings/defaults'

const state = {
  // stores drawer navigation links
  drawerLinks: [
    { icon: 'home', link: '/', label: 'Home Page' },
    { icon: 'laptop', link: '/projects', label: 'My projects' },
    { icon: 'assignment', href: '/static/documents/resume.pdf', label: 'Resume' },
    { icon: 'face', link: '/about', label: 'About alex' },
    { icon: 'settings', link: '/settings', label: 'Settings' },
    { icon: 'lock', link: '/admin', label: 'Admin' }
  ],
  drawers: ['Permanent', 'Persistent', 'Temporary'],
  // stores the variables we want to save for settings
  settings: [
    {name: 'theme', setter: 'setTheme'},
    {name: 'footer', setter: 'setFooter'},
    {name: 'primaryDrawer', setter: 'setPrimaryDrawer'}
  ],
  theme: Defaults.theme,
  primaryDrawer: Defaults.primaryDrawer,
  footer: Defaults.footer
}

const getters = {
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
  settings (state) {
    return state.settings
  }
}

const mutations = {
  setTheme (state, payload) {
    state.theme = payload
  },
  setPrimaryDrawer (state, payload) {
    state.primaryDrawer = payload
  },
  setFooter (state, payload) {
    state.footer = payload
  }
}

const actions = {
  saveSettings ({state, getters}) {
    for (var i = 0; i < getters.settings.length; i++) {
      var setting = getters.settings[i].name
      if (getters[setting]) {
        console.log('Saving ' + setting + ': ' + getters[setting])
        localStorage.setItem(setting, JSON.stringify(getters[setting]))
      }
    }
  },
  retrieveSettings ({commit, getters}) {
    for (var i = 0; i < getters.settings.length; i++) {
      var setting = getters.settings[i].name
      var settingSetter = getters.settings[i].setter
      var save = localStorage.getItem(setting)
      if (save) {
        console.log('Found ' + setting + ': ' + save)
        commit(settingSetter, JSON.parse(save))
      }
    }
  },
  resetSettings ({commit, getters, dispatch}) {
    for (var i = 0; i < getters.settings.length; i++) {
      var setting = getters.settings[i].name
      var settngSetter = getters.settings[i].setter
      commit(settngSetter, Defaults[setting])
      dispatch('saveSettings')
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
