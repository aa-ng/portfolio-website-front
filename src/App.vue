<template>
  <v-app
    id="alex-website"
    :dark="dark"
    :light="!dark"
    standalone
  >
    <alex-progress-bar v-if="loading"></alex-progress-bar>
    <alex-drawer></alex-drawer>
    <alex-header></alex-header>
    <main>
      <router-view></router-view>
    </main>
    <alex-snackbar :data="snackbar"></alex-snackbar>
    <alex-footer></alex-footer>
  </v-app>
</template>

<script>
  import Drawer from './components/navigation/drawer/Drawer.vue'
  import Toolbar from './components/navigation/toolbar/Toolbar.vue'
  import Loading from './components/progress/Loading.vue'
  import Snackbar from './components/messages/Snackbar.vue'
  import Footer from './components/navigation/footer/Footer.vue'
  import componentData from './data/componentData'
  import { mapGetters, mapActions } from 'vuex'
  import * as types from './store/types'

  export default {
    computed: {
      ...mapGetters({
        loading: [types.LOADING],
        theme: [types.THEME],
        snackbar: [types.SNACKBAR]
      }),
      dark () {
        return this.theme.dark
      }
    },
    components: {
      [componentData.drawer]: Drawer,
      [componentData.toolbar]: Toolbar,
      [componentData.progressBar]: Loading,
      [componentData.snackbar]: Snackbar,
      [componentData.footer]: Footer
    },
    methods: {
      ...mapActions({
        retrieveSettings: [types.GET_SETTINGS]
      })
    },
    mounted () {
      this.retrieveSettings()
    }
  }
</script>

<style lang="stylus">
  #alex-website {
    overflow: hidden;
  }
  @import './stylus/main'
</style>
