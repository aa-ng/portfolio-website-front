<template>
  <v-toolbar :class="toolbar.color" dark>
    <v-toolbar-title>{{ toolbar.title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn dark icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    props: {
      toolbar: {
        type: Object
      }
    }
  }
</script>

