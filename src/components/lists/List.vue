<template>
  <v-list two-line subheader>
    <v-subheader>{{ list.title }}</v-subheader>
    <alex-list-tile v-for="tile in list.tiles" :tile="tile" :key="tile.note"></alex-list-tile>
  </v-list>
</template>

<script>
  import Tile from './Tile.vue'
  export default {
    props: {
      list: {
        type: [Array, Object]
      }
    },
    components: {
      'alex-list-tile': Tile
    }
  }
</script>
