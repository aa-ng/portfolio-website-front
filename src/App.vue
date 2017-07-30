<template>
  <v-app
    id="alex-website"
    :dark="theme.dark"
    :light="!theme.dark"
    standalone
  >
    <alex-header
      :primaryDrawer="primaryDrawer"
    ></alex-header>
    <alex-drawer :primaryDrawer="primaryDrawer"></alex-drawer>
    <main>
      <router-view
        :cards="cards"
        :primaryDrawer="primaryDrawer"
        :drawers="drawers"
        :footer="footer"
        :theme="theme"
      ></router-view>
    </main>
    <!--<alex-fab></alex-fab>-->
    <v-footer
      :absolute="footer.fixed"
    >
      <span>Alex Ng © {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Drawer from './components/navigation/Drawer/Drawer.vue'
  import HeaderBar from './components/navigation/Header/HeaderBar.vue'
  import Fab from './components/navigation/Fab.vue'

  export default {
    data: () => ({
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
            src: '/static/images/banner.jpg',
            flex: 'xs12',
            height: '200px'
          },
          body: {
            flex: 12,
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
          actions: [{label: 'Details', link: '/projects'}, {label: 'Github', href: 'https://www.github.com/cynicalbird'}],
          body: {
            flex: 'xs12',
            title: 'Projects',
            summary: 'Check out some of my selected projects here on this site or on Github.'
          },
          details: {
            showDetails: false,
            buttons: [
              {label: 'Random maze generation', link: '/projects/mazeproject'},
              {label: 'Ignite', link: '/projects/ignite'},
              {label: 'Portfolio website', link: '/projects/webportfolio'}
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
            ]
          },
          actions: [{label: 'Details', link: '/about'}, {label: 'Resume', href: '/static/documents/resume.pdf'}]
        },
        {
          body: {
            title: 'Contact me',
            summary: 'Fields below are currently in maintenance, send me an email at: Alex.ng.personal@gmail.com',
            form: [
              {label: 'Name', required: true, model: ''},
              {label: 'Email', required: true, model: ''},
              {label: 'Message', required: true, model: '', multiline: true}
            ]
          },
          actions: [
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/alex-ng-130039134/?ppe=1'},
            {label: 'Github', href: 'https://github.com/CynicalBird'},
            {label: 'Email', href: 'mailto:alex.ng.personal@gmail.com'}
          ]
        }
      ]
    }),
    components: {
      'alex-drawer': Drawer,
      'alex-header': HeaderBar,
      'alex-fab': Fab
    }
  }
</script>

<style lang="stylus">
  #alex-website {
    overflow: hidden;
  }
  /*
  @media only screen and (min-width: 601px)
  {
    #alex-website {
      margin-top: 56px;
    }
  }
  @media only screen and (min-width: 1440px)
  {
    #alex-website {
      margin-top: 64px;
    }
  }
  */
  #alex-website .container, #sandbox {
    /*min-height: 700px;*/
  }
  @import './stylus/main'
</style>
