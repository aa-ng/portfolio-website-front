<template>
  <v-toolbar dark class="primary elevation-6" fixed style="z-index: 900;">
    <v-toolbar-side-icon
      @click.stop="primaryDrawer.model = !primaryDrawer.model"
      v-if="primaryDrawer.type !== 'permanent'"
    ></v-toolbar-side-icon>
    <v-toolbar-title>Alex Ng</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  export default {
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
    }
  }
</script>
