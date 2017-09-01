<template>
  <v-layout row wrap>
    <v-flex v-for="(card, i) in cards" v-bind="{ [`sm${card.flex} xs12`]: true }">
      <v-flex
        :key="card.title"
      >
        <alex-presentation-card :card="card"></alex-presentation-card>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
  import PresentationCard from './Card.vue'
  import * as ScrollReveal from 'scrollreveal'
  export default {
    props: {
      cards: {
        type: Array,
        required: true
      }
    },
    components: {
      'alex-presentation-card': PresentationCard
    },
    mounted () {
      var sr = ScrollReveal({ reset: true })
      sr.reveal('.card', {
        duration: 200,
        delay: 250,
        scale: 0.9,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        mobile: true,
        useDelay: 'once',
        opacity: 0
      })
    }
  }
</script>

<style scoped>
  div.flex.xs12 {
    display: inline-block;
    margin: 0 0 1em;
  }
</style>
