<template>
  <v-app
    id="alex-website"
    :dark="theme.dark"
    :light="!theme.dark"
    standalone
  >
    <alex-progress-bar v-if="loading"></alex-progress-bar>
    <alex-drawer></alex-drawer>
    <alex-header></alex-header>
    <main>
      <router-view></router-view>
    </main>
    <v-footer :absolute="footer.fixed">
      <span>Alex Ng © {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Drawer from './components/navigation/Drawer/Drawer.vue'
  import Toolbar from './components/navigation/Toolbar/Toolbar.vue'
  import Loading from './components/progress/Loading.vue'
  import componentData from './data/componentData'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['loading', 'theme', 'footer'])
    },
    components: {
      [componentData.drawer]: Drawer,
      [componentData.toolbar]: Toolbar,
      [componentData.progressBar]: Loading
    },
    methods: {
      ...mapActions(['retrieveSettings'])
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
