<template>
  <v-container>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md10>
        <v-layout column>
          <v-container grid-list-md>
            <alex-appearence-settings
              :primaryDrawer="primaryDrawer"
              :drawers="drawers"
              :footer="footer"
              :theme="theme"
              v-if="!primaryDrawer.mini"
            ></alex-appearence-settings>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ThemeSettings from '../settings/ThemeSettings.vue'
  import componentData from '../../data/componentData'
  export default {
    components: {
      [componentData.appearenceSettings]: ThemeSettings
    }
  }
</script>

<style scoped>
  div.container { padding: 16px 8px; }
</style>
