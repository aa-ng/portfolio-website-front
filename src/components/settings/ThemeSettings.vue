<template>
  <v-card style="max-width: 900px; margin: 20px auto;">
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 mt-1>
          <span>Theme</span>
          <v-switch primary :label="themeLabel" v-model="theme.dark" color="accent"></v-switch>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <span>Drawer</span>
          <v-radio
            primary
            :label="drawer"
            v-model="primaryDrawer.type"
            :value="drawer.toLowerCase()"
            v-for="drawer in drawers"
            :key="drawer"
            color="accent"
          ></v-radio>
          <v-switch label="Clipped" v-model="primaryDrawer.clipped" primary color="accent"></v-switch>
          <v-switch label="Floating" v-model="primaryDrawer.floating" primary color="accent"></v-switch>
          <v-switch label="Mini" v-model="primaryDrawer.mini" primary color="accent"></v-switch>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <span>Footer</span>
          <v-switch label="Fixed" v-model="footer.fixed" primary></v-switch>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat @click="resetUserSettings">Reset</v-btn>
      <v-btn flat primary @click="saveUserSettings">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import Card from '../cards/Card.vue'
  import componentData from '../../data/componentData'
  import { mapGetters, mapActions } from 'vuex'
  import * as types from '../../store/types'

  export default {
    computed: {
      ...mapGetters({
        primaryDrawer: types.PRIMARY_DRAWER,
        drawers: types.DRAWERS,
        footer: types.FOOTER,
        theme: types.THEME
      }),
      themeLabel () {
        return this.theme.dark === true ? 'Dark' : 'Light'
      }
    },
    components: {
      [componentData.card]: Card
    },
    methods: {
      ...mapActions({
        saveSettings: [types.SAVE_SETTINGS],
        resetSettings: [types.RESET_SETTINGS],
        toggleSnackBar: [types.TOGGLE_SNACKBAR],
        setSnackbarMessage: [types.UPDATE_SNACKBAR_MESSAGE]
      }),
      saveUserSettings () {
        this.saveSettings()
        this.setSnackbarMessage('Saved settings!')
        this.toggleSnackBar()
      },
      resetUserSettings () {
        this.resetSettings()
        this.setSnackbarMessage('Settings are reset.')
        this.toggleSnackBar()
      }
    }
  }
</script>

<style scoped>
  div.layout.row.wrap {
    padding: 20px;
  }
</style>
