<template>
  <v-container>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md10>
        <v-layout column>
          <v-container grid-list-md>
            <v-layout row wrap class="mt-5">
              <alex-card>
                <h1>Hello world</h1>
              </alex-card>
            </v-layout>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Card from '../../cards/Card.vue'
  import componentData from '../../../data/componentData'

  export default {
    components: {
      [componentData.card]: Card
    },
    data () {
      return {
        map: {}
      }
    },
    created () {
    }
  }
</script>

<style scoped>
  /* Always set the map height explicitly to define the size of the div
   * element that contains the map. */
  #map {
    height: 200px;
    background-color: black;
  }
  .map-container {
    width: 100%;
    height: 100%;
  }
  /* Optional: Makes the sample page fill the window. */
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
