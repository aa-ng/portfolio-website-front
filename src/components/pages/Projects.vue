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
            media: {
              title: 'Ignite - online web game',
              src: '/static/images/projects/ignite/preview.png',
              flex: 'xs12',
              height: '200px'
            },
            body: {
              title: 'Ignite - online web game',
              summary: 'A web game built using phaserjs',
              buttons: []
            },
            actions: [{label: 'Go to ignite', href: 'http://ignite.zapto.org'}]
          },
          {
            media: {
              title: 'Random maze generation project',
              src: '/static/images/projects/maze-project/preview_full.png',
              flex: 'xs12',
              height: '200px'
            },
            body: {
              title: 'Random maze generation project',
              summary: 'A random maze generator and solver using the growing tree algorithm written in Java',
              buttons: []
            },
            actions: [{label: 'View on github', href: 'https://github.com/CynicalBird/mazeproject'}, {label: 'Download Jar', href: 'https://github.com/CynicalBird/mazeproject/releases'}]
          },
          {
            media: {
              title: 'Note taking web app',
              color: 'accent',
              icon: {
                size: 'x-large',
                name: 'note'
              },
              flex: 'xs12',
              height: '200px'
            },
            body: {
              title: 'Note taking web app',
              summary: 'A simple note taking app using VueJS - WIP',
              buttons: []
            },
            actions: [{label: 'Go to note taking app', link: '/projects/webdev/notes'}]
          }
        ]
      }
    },
    components: {
      'alex-presentation-cards': Cards
    }
  }
</script>
