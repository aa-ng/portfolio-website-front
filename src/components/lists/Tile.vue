<template>
  <v-list-tile avatar>
    <v-list-tile-action>
      <v-checkbox v-model="tile.model" class="primary--text"></v-checkbox>
    </v-list-tile-action>
    <v-list-tile-content @click="tile.action(tile)">
      <!-- <v-list-tile-title>{{ tile.note }}</v-list-tile-title> -->
      <p>{{ tile.note }}</p>
      <!--<v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>-->
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    props: {
      tile: {
        required: true
      }
    },
    created () {
      console.log(this.tile)
    }
  }
</script>

<style>
  p {
    margin-bottom: 0px;
  }
</style>
