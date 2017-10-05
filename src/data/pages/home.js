import { MAZE_PROJECT, STOCK_TRADER, NOTE_APP } from '../projectData'
import { GITHUB, LINKEDIN, EMAIL } from '../socialMedia'
import componentConfig from '../componentData'

export default {
  path: '/',
  cards: [
    {
      media: {
        title: "Welcome I'm Alex",
        src: '/static/images/projects/ru-fighter/alex-min.png',
        flex: 'xs12',
        color: 'accent',
        contain: true,
        height: '150px'
      },
      body: {
        flex: 'xs12',
        components: [
          {
            is: componentConfig.article,
            data: {
              paragraph: 'Welcome to my portfolio website!'
            }
          },
          {
            is: componentConfig.chips,
            data: [
              {label: 'Web developer', icon: 'web', color: 'indigo'},
              {label: 'Software developer', icon: 'code', color: 'light-blue'},
              {label: 'Digital media enthusiast', icon: 'work', color: 'pink'}
            ]
          }
        ]
      }
    },
    {
      media: {
        title: 'Projects',
        height: '150px',
        src: '/static/images/projects/ignite/preview-min.png',
        flex: 'xs12'
      },
      body: {
        flex: 'xs12',
        components: [
          {
            is: componentConfig.article,
            data: {
              title: 'Projects',
              paragraph: 'Check out my full list of my selected projects.'
            }
          }
        ]
      },
      details: {
        showDetails: false,
        components: [
          {
            is: componentConfig.buttons,
            data: [
              {label: 'Random maze gen', link: '/projects#mazeproject'},
              {label: 'Ignite', link: '/projects#ignite'},
              {label: 'Portfolio website', link: '/projects#webportfolio'}
            ]
          }
        ]
      },
      actions: [{label: 'More', link: '/projects'}]
    },
    STOCK_TRADER,
    NOTE_APP,
    MAZE_PROJECT,
    {
      media: {
        title: 'Location',
        summary: 'Toronto, Ontario',
        icon: {
          size: 'x-large',
          name: 'location_city'
        },
        height: '132px',
        flex: 'xs6 md4'
      },
      body: {
        padding: '0px',
        flex: 'xs6 md8',
        components: [
          {
            is: componentConfig.map,
            data: {
              draggable: false,
              position: {
                lat: 43.6532,
                lng: -79.3832
              },
              zoom: 9,
              width: 'auto',
              height: '200px'
            }
          }
        ]
      }
    },
    {
      media: {
        title: 'About me',
        contain: true,
        src: '/static/images/profile-pic-round-min.png',
        flex: 'xs12 md4'
      },
      body: {
        flex: 'xs12 md8',
        components: [
          {
            is: componentConfig.article,
            data: {
              title: 'About me',
              paragraph: 'Entering their 3rd year of Computer Science at Ryerson university Alex is practicing core web app development concepts with new technologies and frameworks like VueJS and NodeJS. Alex is also interested in the future of machine learning and data sciences.'
            }
          }
        ]
      },
      details: {
        showDetails: false,
        components: [
          {
            is: componentConfig.article,
            data: {
              title: 'Summary of skills'
            }
          },
          {
            is: componentConfig.chips,
            data: [
              {label: 'NodeJS', icon: 'device_hub', color: 'green'},
              {label: 'VueJS', icon: 'pageview', color: 'teal'},
              {label: 'Responsive design', icon: 'dashboard', color: 'blue'},
              {label: 'AJAX', icon: 'send', color: 'purple'},
              {label: 'Git', icon: 'history', color: 'orange'},
              {label: 'Java', icon: 'computer', color: 'red'}
            ]
          }
        ]
      },
      actions: [
        {label: 'More', link: '/about'},
        {label: 'Resume', href: '/static/documents/resume.pdf', icon: 'assignment'}
      ]
    },
    {
      body: {
        components: [
          {
            is: componentConfig.alert,
            data: {
              type: 'error',
              message: 'Fields below are currently in maintenance, send me an email at: Alex.ng.personal@gmail.com'
            }
          },
          {
            is: componentConfig.article,
            data: {
              title: 'Contact me'
            }
          },
          {
            is: componentConfig.form,
            data: {
              inputs: [
                {
                  label: 'Name',
                  required: true,
                  model: '',
                  type: 'text'
                },
                {
                  label: 'Email',
                  required: true,
                  model: '',
                  type: 'email'
                },
                {
                  label: 'Message',
                  required: true,
                  model: '',
                  multiline: true
                }
              ],
              action: {
                label: 'Out of order',
                icon: 'close'
              }
            }
          }
        ]
      },
      actions: [
        {label: 'Github', href: GITHUB, icon: 'link'},
        {label: 'LinkedIn', href: LINKEDIN, icon: 'link'},
        {label: 'Email', href: EMAIL, icon: 'email'}
      ]
    }
  ]
}
