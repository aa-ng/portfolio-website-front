import componentData from '../componentData'
import { LINKEDIN, GITHUB } from '../socialMedia'
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
    fixed: false,
    components: [
      {
        is: componentData.buttons,
        data: [
          /*
          {
            label: 'Facebook',
            icon: {
              name: 'fa-facebook-official',
              size: 'large'
            }
          },
           */
          {
            label: 'Linked in',
            href: LINKEDIN,
            icon: {
              name: 'fa-linkedin',
              size: 'large'
            }
          },
          {
            label: 'Github',
            href: GITHUB,
            icon: {
              name: 'fa-github',
              size: 'large'
            }
          }
        ]
      }
    ]
  }
}
