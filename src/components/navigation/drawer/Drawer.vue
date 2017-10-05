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
    <v-toolbar class="transparent" flat prominent>
      <v-list class="pa-0">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="/static/images/logos/logo.png" />
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
      <alex-drawer-link v-for="drawerLink in drawerLinks" :drawerLink="drawerLink" :key="drawerLink.label"></alex-drawer-link>
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
  import componentData from '../../../data/componentData'
  import { mapGetters } from 'vuex'
  import * as types from '../../../store/types'

  export default {
    computed: {
      ...mapGetters({
        primaryDrawer: types.PRIMARY_DRAWER,
        drawerLinks: types.DRAWER_LINKS
      })
    },
    components: {
      [componentData.drawerLink]: DrawerLink
    }
  }
</script>

<style scoped>

</style>
