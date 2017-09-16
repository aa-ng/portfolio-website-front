<template>
  <v-list two-line subheader>
    <v-subheader>{{ data.title }}</v-subheader>
    <alex-list-tile v-for="tile in data.tiles" :tile="tile" :key="tile.note"></alex-list-tile>
  </v-list>
</template>

<script>
  import Tile from './Tile.vue'
  import componentData from '../../data/componentData'
  export default {
    props: {
      data: {
        type: [Array, Object]
      }
    },
    components: {
      [componentData.listTile]: Tile
    }
  }
</script>
