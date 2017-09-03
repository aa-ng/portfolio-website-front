export default [
  {
    path: '/',
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
          src: '/static/images/projects/ignite/preview-min.png',
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
          src: '/static/images/profile-pic-round-min.png',
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
          ]
        },
        actions: [
          {label: 'Details', link: '/about'},
          {label: 'Resume', href: '/static/documents/resume.pdf', icon: 'assignment'}
        ]
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
          {label: 'Github', href: 'https://github.com/aa-ng', icon: 'link'},
          {label: 'LinkedIn', href: 'https://www.linkedin.com/in/alex-ng-130039134/?ppe=1', icon: 'link'},
          {label: 'Email', href: 'mailto:alex.ng.personal@gmail.com', icon: 'email'}
        ]
      }
    ]
  },
  {
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
          title: 'Ignite - online web game',
          summary: 'Operation ignition is a online web base real time multiplayer, RPG game. Ignite is played from a 2D top down camera, with dynamically generated terrain. (WIP) Our game encourages teamwork with 9 unique classes, guilds, and party system.',
          buttons: []
        },
        details: {
          showDetails: false,
          chips: [
            {label: 'NodeJS', icon: 'device_hub', color: 'green'},
            {label: 'AngularJS', icon: 'pageview', color: 'red'},
            {label: 'SocketJS', icon: 'rss_feed', color: 'blue'},
            {label: 'TravisCI', icon: 'rss_feed', color: 'amber'},
            {label: 'PhaserJS', icon: 'videogame_asset', color: 'purple'}
          ],
          buttons: [
            {label: 'Details', link: '/projects/ignite', icon: 'link'}
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
          title: 'Random maze generation project',
          summary: 'My grade 12 Computer Science project featuring perfect maze random generation and a simple recursive backtracker solution. This project was written in Java using the growing tree algorithm. It also features many Object oriented programming techniques like inheritance and polymorphism.',
          buttons: []
        },
        details: {
          showDetails: false,
          chips: [
            {label: 'Java', icon: 'computer', color: 'red'},
            {label: 'OOP', icon: 'extension', color: 'blue'},
            {label: 'Growing tree algorithm', icon: 'call_split', color: 'green'}
          ],
          buttons: [
            {label: 'More on perfect mazes', href: 'http://www.astrolog.org/labyrnth/algrithm.htm', icon: 'link'}
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
          title: 'Stock trader web app',
          summary: 'You can buy and sell stocks - App is hosted with Heroku free dynos first loads may be slower than expected.'
        },
        details: {
          showDetails: false,
          chips: [
            {label: 'VueJS', icon: 'pageview', color: 'teal'},
            {label: 'Animations', icon: 'directions_run', color: 'orange'},
            {label: 'Vuex', icon: 'memory', color: 'light-blue'},
            {label: 'Vuetify', icon: 'star', color: 'blue'},
            {label: 'Local Storage', icon: 'save', color: 'indigo'},
            {label: 'Heroku', icon: 'cloud', color: 'purple'}
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
          title: 'Note taking web app',
          summary: 'A simple note taking app using VueJS - WIP'
        },
        details: {
          showDetails: false,
          chips: [
            {label: 'VueJS', icon: 'pageview', color: 'teal'},
            {label: 'Animations', icon: 'directions_run', color: 'orange'},
            {label: 'Vuetify', icon: 'star', color: 'blue'},
            {label: 'Local Storage', icon: 'save', color: 'indigo'}
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
          title: 'SVG Animation / Manipulation',
          summary: 'Adding animations to a SVG image'
        },
        actions: [
          {label: 'View', link: '/projects/webdev/svg-animation'},
          {label: 'View on github', href: 'https://github.com/aa-ng/portfolio-website-front/blob/master/static/images/logos/chrome.svg?short_path=af42474#L6-L38', icon: 'code'}
        ]
      }
    ]
  }
]
