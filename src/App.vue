<template>
  <v-app
    id="alex-website"
    :dark="theme.dark"
    :light="!theme.dark"
    standalone
  >
    <alex-loading v-if="loading"></alex-loading>
    <alex-drawer :primaryDrawer="primaryDrawer"></alex-drawer>
    <alex-header
      :primaryDrawer="primaryDrawer"
    ></alex-header>
    <main>
      <router-view
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
  import { mapGetters } from 'vuex'
  import Drawer from './components/navigation/Drawer/Drawer.vue'
  import HeaderBar from './components/navigation/Header/HeaderBar.vue'
  import Fab from './components/navigation/Fab.vue'
  import Loading from './components/progress/Loading.vue'

  export default {
    computed: {
      ...mapGetters([
        'loading',
        'primaryDrawer',
        'theme',
        'footer',
        'drawers'
      ])
    },
    components: {
      'alex-drawer': Drawer,
      'alex-header': HeaderBar,
      'alex-fab': Fab,
      'alex-loading': Loading
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
