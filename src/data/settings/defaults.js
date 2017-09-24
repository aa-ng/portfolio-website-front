import { THEME, PRIMARY_DRAWER, FOOTER } from '../../store/types'

export default {
  [THEME]: {
    dark: true,
    actionColor: 'info'
  },
  // drawer data
  [PRIMARY_DRAWER]: {
    // active / open model
    model: true,
    // stores the current type of drawer
    type: 'persistent',
    clipped: false,
    floating: false,
    mini: false
  },
  [FOOTER]: {
    // footer position fixed
    fixed: false
  }
}
