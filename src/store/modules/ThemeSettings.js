const state = {
  drawerLinks: [
    { icon: 'home', link: '/', label: 'Home Page' },
    { icon: 'laptop', link: '/projects', label: 'My projects' },
    { icon: 'assignment', href: '/static/documents/resume.pdf', label: 'Resume' },
    { icon: 'face', link: '/about', label: 'About alex' },
    { icon: 'settings', link: '/settings', label: 'Settings' },
    { icon: 'lock', link: '/admin', label: 'Admin' }
  ],
  theme: {
    dark: true,
    actionColor: 'info'
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
  }
}

export default {
  state,
  getters
}
