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
            name: 'ignite',
            media: {
              title: 'Ignite - online web game',
              src: '/static/images/projects/ignite/preview.png',
              flex: 'xs12',
              height: '200px'
            },
            body: {
              title: 'Ignite - online web game',
              summary: 'Operation ignition is a online web base real time multiplayer, RPG game. Ignite is played from a 2D top down camera, with dynamically generated terrain. (WIP) Our game encourages teamwork with 9 unique classes, guilds, and party system.',
              buttons: []
            },
            details: {
              showDetails: false,
              chips: [
                {label: 'NodeJS', icon: 'device_hub', color: 'green'},
                {label: 'AngularJS', icon: 'pageview', color: 'red'},
                {label: 'SocketJS', icon: 'rss_feed', color: 'blue'},
                {label: 'TravisCI', icon: 'rss_feed', color: 'amber'},
                {label: 'PhaserJS', icon: 'videogame_asset', color: 'purple'}
              ]
            },
            actions: [
              {label: 'Go to ignite', href: 'http://ignite.zapto.org'},
              {label: 'View on Github', href: 'http://ignite.zapto.org', icon: 'code'}
            ]
          },
          {
            name: 'mazeproject',
            media: {
              title: 'Random maze generation project',
              src: '/static/images/projects/maze-project/preview_full.png',
              flex: 'xs12',
              height: '200px'
            },
            body: {
              title: 'Random maze generation project',
              summary: 'My grade 12 Computer Science project featuring perfect maze random generation and a simple recursive backtracker solution. This project was written in Java using the growing tree algorithm. It also features many Object oriented programming techniques like inheritance and polymorphism.',
              buttons: []
            },
            details: {
              showDetails: false,
              buttons: [
                {label: 'More on perfect mazes', href: 'http://www.astrolog.org/labyrnth/algrithm.htm', icon: 'link'}
              ]
            },
            actions: [
              {label: 'View on github', href: 'https://github.com/CynicalBird/mazeproject', icon: 'code'},
              {label: 'Download Jar', href: 'https://github.com/CynicalBird/mazeproject/releases', icon: 'cloud_download'}
            ]
          },
          {
            name: 'noteapp',
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
              summary: 'A simple note taking app using VueJS - WIP'
            },
            details: {
              showDetails: true,
              chips: [
                {label: 'NodeJS', icon: 'device_hub', color: 'green'},
                {label: 'VueJS', icon: 'pageview', color: 'teal'}
              ]
            },
            actions: [
              {label: 'Go to note taking app', link: '/projects/webdev/notes'}
            ]
          }
        ]
      }
    },
    components: {
      'alex-presentation-cards': Cards
    }
  }
</script>
