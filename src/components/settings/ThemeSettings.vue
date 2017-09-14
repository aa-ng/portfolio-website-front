<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 md6 mt-1>
          <span>Theme</span>
          <v-switch primary :label="themeLabel" v-model="theme.dark" color="accent"></v-switch>
        </v-flex>
        <v-flex xs12 md6>
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
        <v-flex xs12 md6>
          <span>Footer</span>
          <v-switch label="Fixed" v-model="footer.fixed" primary></v-switch>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat>Cancel</v-btn>
      <v-btn flat primary>Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'primaryDrawer',
        'drawers',
        'footer',
        'theme'
      ]),
      themeLabel () {
        return this.theme.dark === true ? 'Dark' : 'Light'
      }
    }
  }
</script>
