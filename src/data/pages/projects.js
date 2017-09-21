import componentData from '../componentData'

export default {
  path: '/projects',
  cards: [
    {
      name: 'ignite',
      media: {
        title: 'Ignite - online web game',
        src: '/static/images/projects/ignite/preview-min.png',
        flex: 'xs12',
        height: '200px'
      },
      body: {
        components: [
          {
            is: componentData.notification,
            data: {
              message: 'Work in progress',
              type: 'warning'
            }
          },
          {
            is: componentData.article,
            data: {
              title: 'Ignite - online web game',
              paragraph: 'Operation ignition is a online web base real time multiplayer, RPG game. Ignite is played from a 2D top down camera, with dynamically generated terrain. (WIP) Our game encourages teamwork with 9 unique classes, guilds, and party system.'
            }
          }
        ]
      },
      details: {
        showDetails: false,
        components: [
          {
            is: componentData.button,
            data: [
              {label: 'Details', link: '/projects/ignite', icon: 'link'}
            ]
          },
          {
            is: componentData.chips,
            data: [
              {label: 'NodeJS', icon: 'device_hub', color: 'green'},
              {label: 'AngularJS', icon: 'pageview', color: 'red'},
              {label: 'SocketJS', icon: 'rss_feed', color: 'blue'},
              {label: 'TravisCI', icon: 'rss_feed', color: 'amber'},
              {label: 'PhaserJS', icon: 'videogame_asset', color: 'purple'}
            ]
          }
        ]
      },
      actions: [
        {label: 'Go to ignite', href: 'http://ignite.zapto.org'},
        {label: 'View on Github', href: 'http://ignite.zapto.org', icon: 'code'}
      ]
    },
    {
      name: 'mazeproject',
      media: {
        title: 'Random maze generation project',
        src: '/static/images/projects/maze-project/preview-full-min.png',
        flex: 'xs12',
        height: '200px'
      },
      body: {
        components: [
          {
            is: componentData.article,
            data: {
              title: 'Random maze generation project',
              paragraph: 'My grade 12 Computer Science project featuring perfect maze random generation and a simple recursive backtracker solution. This project was written in Java using the growing tree algorithm. It also features many Object oriented programming techniques like inheritance and polymorphism.'
            }
          }
        ]
      },
      details: {
        showDetails: false,
        components: [
          {
            is: componentData.button,
            data: [
              {label: 'More on perfect mazes', href: 'http://www.astrolog.org/labyrnth/algrithm.htm', icon: 'link'}
            ]
          },
          {
            is: componentData.chips,
            data: [
              {label: 'Java', icon: 'computer', color: 'red'},
              {label: 'OOP', icon: 'extension', color: 'blue'},
              {label: 'Growing tree algorithm', icon: 'call_split', color: 'green'}
            ]
          }
        ]
      },
      actions: [
        {label: 'View on github', href: 'https://github.com/CynicalBird/mazeproject', icon: 'code'},
        {label: 'Download Jar', href: 'https://github.com/CynicalBird/mazeproject/releases', icon: 'cloud_download'}
      ]
    },
    {
      name: 'stock-trader-app',
      media: {
        title: 'Stock trader web app',
        color: 'secondary',
        icon: {
          size: 'x-large',
          name: 'swap_horiz'
        },
        flex: 'xs12',
        height: '200px'
      },
      body: {
        components: [
          {
            is: componentData.notification,
            data: {
              message: 'App is hosted with Heroku free dynos first loads may be slower than expected.'
            }
          },
          {
            is: componentData.article,
            data: {
              title: 'Stock trader web app',
              paragraph: 'You can buy and sell stocks'
            }
          }
        ]
      },
      details: {
        showDetails: false,
        components: [
          {
            is: componentData.chips,
            data: [
              {label: 'VueJS', icon: 'pageview', color: 'teal'},
              {label: 'Animations', icon: 'directions_run', color: 'orange'},
              {label: 'Vuex', icon: 'memory', color: 'light-blue'},
              {label: 'Vuetify', icon: 'star', color: 'blue'},
              {label: 'Local Storage', icon: 'save', color: 'indigo'},
              {label: 'Heroku', icon: 'cloud', color: 'purple'}
            ]
          }
        ]
      },
      actions: [
        {label: 'Go to stock trading app', href: 'https://alex-stock-trading.herokuapp.com'},
        {label: 'View on github', href: 'https://github.com/aa-ng/StockTrader', icon: 'code'}
      ]
    },
    {
      name: 'noteapp',
      media: {
        title: 'Note taking web app',
        color: 'accent',
        icon: {
          size: 'x-large',
          name: 'note'
        },
        flex: 'xs12',
        height: '200px'
      },
      body: {
        components: [
          {
            is: componentData.article,
            data: {
              title: 'Note taking web app',
              paragraph: 'A simple note taking app using VueJS'
            }
          }
        ]
      },
      details: {
        showDetails: false,
        components: [
          {
            is: componentData.chips,
            data: [
              {label: 'VueJS', icon: 'pageview', color: 'teal'},
              {label: 'Animations', icon: 'directions_run', color: 'orange'},
              {label: 'Vuetify', icon: 'star', color: 'blue'},
              {label: 'Local Storage', icon: 'save', color: 'indigo'}
            ]
          }
        ]
      },
      actions: [
        {label: 'Go to note taking app', link: '/projects/webdev/notes'},
        {label: 'View on github', href: 'https://github.com/aa-ng/portfolio-website-front/blob/master/src/components/pages/projects/webdev/Notes.vue', icon: 'code'}
      ]
    },
    {
      name: 'SvgAnimation',
      media: {
        title: 'SVG Animation',
        icon: {
          size: 'x-large',
          name: 'border_color'
        },
        flex: 'xs12',
        height: '200px'
      },
      body: {
        components: [
          {
            is: componentData.article,
            data: {
              title: 'SVG Animation / Manipulation',
              paragraph: 'Adding animations to a SVG image'
            }
          }
        ]
      },
      actions: [
        {label: 'View', link: '/projects/webdev/svg-animation'},
        {label: 'View on github', href: 'https://github.com/aa-ng/portfolio-website-front/blob/master/static/images/logos/chrome.svg?short_path=af42474#L6-L38', icon: 'code'}
      ]
    }
  ]
}
