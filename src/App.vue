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
      <keep-alive>
        <router-view
          :primaryDrawer="primaryDrawer"
          :drawers="drawers"
          :footer="footer"
          :theme="theme"
        ></router-view>
      </keep-alive>
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

  /*
   //import Firebase from 'firebase'
  let config = {
    apiKey: process.env.FIRE_API_KEY,
    authDomain: process.env.FIRE_AUTH_DOM,
    databaseURL: process.env.FIRE_BASE_URL,
    storageBucket: process.env.FIRE_STORE_BUCK,
    messagingSenderId: process.env.FIRE_MESSAGE_ID
  }

  let app = Firebase.initializeApp(config)
  let db = app.database()
  db.ref('books')
  */

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
      }
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
