<template>
  <v-container>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md10>
        <v-layout column>
          <v-container grid-list-md>
            <alex-presentation-cards :cards="cards"></alex-presentation-cards>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Cards from '../cards/Cards.vue'
  export default {
    data () {
      return {
        cards: [
          {
            body: {
              title: 'Note taking web app',
              summary: 'A simple note taking app using VueJS - WIP',
              buttons: [{label: 'Go to note taking app', link: '/projects/webdev/notes'}]
            }
          }
        ]
      }
    },
    components: {
      'alex-presentation-cards': Cards
    }
  }
</script>
