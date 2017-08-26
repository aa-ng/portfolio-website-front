<template>
  <v-app
    id="alex-website"
    :dark="theme.dark"
    :light="!theme.dark"
    standalone
  >
    <alex-drawer :primaryDrawer="primaryDrawer"></alex-drawer>
    <alex-header
      :primaryDrawer="primaryDrawer"
    ></alex-header>
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

  export default {
    computed: {
      primaryDrawer () {
        return this.$store.getters.primaryDrawer
      },
      theme () {
        return this.$store.getters.theme
      },
      footer () {
        return this.$store.getters.footer
      },
      drawers () {
        return this.$store.getters.drawers
      }
    },
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
