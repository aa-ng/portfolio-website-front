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
  import BasicCards from '../cards/Cards.vue'
  export default {
    data () {
      return {
        cards: [
          {
            media: {
              title: "Welcome I'm Alex",
              src: '/static/images/banner.jpg',
              flex: 'xs12',
              height: '200px'
            },
            body: {
              flex: 'xs12',
              title: "Welcome I'm Alex",
              summary: 'Welcome to my portfolio website!',
              chips: [
                {label: 'Web developer', icon: 'web', color: 'indigo'},
                {label: 'Software developer', icon: 'code', color: 'light-blue'},
                {label: 'Digital media enthusiast', icon: 'work', color: 'pink'}
              ]
            }
          },
          {
            actions: [{label: 'Details', link: '/projects'}],
            body: {
              flex: 'xs12',
              title: 'Projects',
              summary: 'Check out some of my selected projects here on this site or on Github.'
            },
            details: {
              showDetails: false,
              buttons: [
                {label: 'Random maze gen', link: '/projects#mazeproject'},
                {label: 'Ignite', link: '/projects#ignite'},
                {label: 'Portfolio website', link: '/projects#webportfolio'}
              ]
            },
            media: {
              title: 'Projects',
              height: '200px',
              src: '/static/images/projects/ignite/preview.png',
              flex: 'xs12'
            }
          },
          {
            body: {
              flex: 'xs12 md8 lg9',
              title: 'About me',
              summary: 'Entering their 3rd year of Computer Science at Ryerson university Alex is strengthening their development portfolio, with new technologies and frameworks like VueJS, NodeJS and Firebase. Alex is also interested in the future of machine learning and data sciences.'
            },
            media: {
              title: 'About me',
              contain: true,
              src: '/static/images/profile_pic_round.png',
              flex: 'xs12 md4 lg3'
            },
            details: {
              title: 'Summary of skills',
              showDetails: false,
              chips: [
                {label: 'NodeJS', icon: 'device_hub', color: 'green'},
                {label: 'VueJS', icon: 'pageview', color: 'teal'},
                {label: 'Responsive design', icon: 'dashboard', color: 'blue'},
                {label: 'AJAX', icon: 'send', color: 'purple'},
                {label: 'Git', icon: 'history', color: 'orange'},
                {label: 'Java', icon: 'computer', color: 'red'}
              ],
              buttons: [{label: 'Details', link: '/about'}]
            },
            actions: [{label: 'Resume', href: '/static/documents/resume.pdf', icon: 'assignment'}]
          },
          {
            body: {
              title: 'Contact me',
              summary: 'Fields below are currently in maintenance, send me an email at: Alex.ng.personal@gmail.com',
              form: {
                inputs: [
                  {label: 'Name', required: true, model: ''},
                  {label: 'Email', required: true, model: ''},
                  {label: 'Message', required: true, model: '', multiline: true}
                ],
                action: {
                  label: 'Out of order',
                  icon: 'close'
                }
              }
            },
            actions: [
              {label: 'Github', href: 'https://github.com/CynicalBird', icon: 'link'},
              {label: 'LinkedIn', href: 'https://www.linkedin.com/in/alex-ng-130039134/?ppe=1', icon: 'link'}
            ],
            details: {
              showDetails: false,
              buttons: [
                {label: 'Email', href: 'mailto:alex.ng.personal@gmail.com', icon: 'email'}
              ]
            }
          }
        ]
      }
    },
    components: {
      'alex-presentation-cards': BasicCards
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container { padding: 16px 8px; }
</style>
