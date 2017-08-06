<template>
  <v-navigation-drawer
    v-model="primaryDrawer.model"
    :permanent="primaryDrawer.type === 'permanent'"
    :persistent="primaryDrawer.type === 'persistent'"
    :temporary="primaryDrawer.type === 'temporary'"
    :clipped="primaryDrawer.clipped"
    :floating="primaryDrawer.floating"
    :mini-variant="primaryDrawer.mini"
    enable-resize-watcher
    overflow
  >
    <v-toolbar class="transparent" flat>
      <v-list class="pa-0">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="/static/favicon.png" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Alex Ng</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action v-tooltip:bottom="{ html: 'shrink' }">
            <v-btn icon @click.native.stop="primaryDrawer.mini = !primaryDrawer.mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list two-line>
      <alex-drawer-link v-for="drawerLink in drawerLinks" :drawerLink="drawerLink"></alex-drawer-link>
      <v-list-tile v-if="primaryDrawer.mini">
        <v-list-tile-action @click="primaryDrawer.mini = !primaryDrawer.mini" v-tooltip:top="{ html: 'expand' }">
          <v-icon>chevron_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import DrawerLink from './DrawerLink.vue'

  export default {
    data () {
      return {
        drawerLinks: [
          { icon: 'home', link: '/', label: 'Home Page' },
          { icon: 'laptop', link: '/projects', label: 'My projects' },
          { icon: 'assignment', href: '/static/documents/resume.pdf', label: 'Resume' },
          { icon: 'face', link: '/about', label: 'About alex' },
          { icon: 'settings', link: '/settings', label: 'Settings' }
        ],
        miniLink: { icon: 'chevron_right', click: 'primaryDrawer = !primaryDrawer', label: '' }
      }
    },
    props: {
      primaryDrawer: {
        type: Object,
        default: {
          model: true,
          type: 'persistent',
          clipped: false,
          floating: false,
          mini: false
        }
      }
    },
    components: {
      'alex-drawer-link': DrawerLink
    }
  }
</script>

<style scoped>

</style>
