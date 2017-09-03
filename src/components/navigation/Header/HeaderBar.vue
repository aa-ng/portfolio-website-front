<template>
  <v-toolbar dark class="primary elevation-6" fixed prominent>
    <v-toolbar-side-icon
      @click.stop="primaryDrawer.model = !primaryDrawer.model"
      v-if="primaryDrawer.type !== 'permanent'"
    ></v-toolbar-side-icon>
    <v-toolbar-title>Alex Ng</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['primaryDrawer'])
    }
  }
</script>
