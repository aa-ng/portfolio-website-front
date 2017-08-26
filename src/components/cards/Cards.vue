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
  export default {
    props: {
      cards: {
        type: Array,
        required: true
      }
    },
    components: {
      'alex-presentation-card': PresentationCard
    }
  }
</script>

<style scoped>
  div.flex.xs12 {
    display: inline-block;
    margin: 0 0 1em;
  }
</style>
