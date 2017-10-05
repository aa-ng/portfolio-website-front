import componentData from './componentData'

export var IGNITE = {
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
          paragraph: 'Operation ignition is a online web base real time multi-player web game. Players can play as a guest to test the game quickly or register for an account to save progress.'
        }
      }
    ]
  },
  details: {
    showDetails: false,
    components: [
      {
        is: componentData.buttons,
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
}

export var MAZE_PROJECT = {
  name: 'mazeproject',
  media: {
    title: 'Random maze generation project',
    src: '/static/images/projects/maze-project/preview-full-min.png',
    flex: 'xs12',
    height: '150px'
  },
  body: {
    components: [
      {
        is: componentData.article,
        data: {
          title: 'Random maze generation project',
          paragraph: 'My Java Game featuring random perfect maze generation and a simple recursive back-tracker solution. This project was written using the growing tree algorithm.'
        }
      }
    ]
  },
  details: {
    showDetails: false,
    components: [
      {
        is: componentData.buttons,
        data: [
          {
            label: 'More on perfect mazes',
            href: 'http://www.astrolog.org/labyrnth/algrithm.htm'
          }
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
}

export var STOCK_TRADER = {
  name: 'stock-trader-app',
  media: {
    title: 'Stock trader web app',
    color: 'secondary',
    icon: {
      size: 'x-large',
      name: 'swap_horiz'
    },
    flex: 'xs12',
    height: '150px'
  },
  body: {
    components: [
      {
        is: componentData.alert,
        data: {
          message: 'App is hosted with Heroku free dynos first loads may be slower than expected.'
        }
      },
      {
        is: componentData.article,
        data: {
          title: 'Stock trader web app',
          paragraph: 'Stock trading simulator. You can buy/sell stocks and then end the day to see how the stock prices change.'
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
}

export var NOTE_APP = {
  name: 'noteapp',
  media: {
    title: 'Note taking web app',
    color: 'accent',
    icon: {
      size: 'x-large',
      name: 'note'
    },
    flex: 'xs12',
    height: '150px'
  },
  body: {
    components: [
      {
        is: componentData.article,
        data: {
          title: 'Note taking web app',
          paragraph: 'A simple web app to write and save notes made with VueJS. Notes are saved with local storage.'
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
}

export var SVG_ANIMATION = {
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

export default [IGNITE, MAZE_PROJECT, STOCK_TRADER, NOTE_APP, SVG_ANIMATION]
