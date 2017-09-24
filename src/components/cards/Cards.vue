<template>
  <v-layout row wrap>
    <v-flex
      v-for="(card, i) in cards"
      v-bind="{ [`sm${card.flex} xs12`]: true }"
      :key="card.title"
    >
      <alex-card :card="card"></alex-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import Card from './Card.vue'
  import * as ScrollReveal from 'scrollreveal'
  import componentData from '../../data/componentData'

  export default {
    props: {
      cards: {
        type: [Array, Object],
        required: true
      }
    },
    components: {
      [componentData.card]: Card
    },
    computed: {
      cardContainerFlex () {
        return this.card.flex ? {[`sm${this.card.flex} xs12`]: true} : {'xs12': true}
      }
    },
    mounted () {
      var sr = ScrollReveal({ reset: false })
      sr.reveal('.card', {
        duration: 200,
        delay: 100,
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
