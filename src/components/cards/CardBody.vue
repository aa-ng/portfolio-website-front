<template>
  <v-card-title>
    <div class="text-xs-center text-md-left card-content">
      <alex-card-content :content="body"></alex-card-content>
    </div>
  </v-card-title>
</template>

<script>
  import CardContent from './CardContent.vue'
  import Chips from '../lists/Chips.vue'

  export default {
    props: {
      body: {
        type: Object,
        required: true
      }
    },
    components: {
      'alex-card-content': CardContent,
      'alex-chips': Chips
    }
  }
</script>

<style scoped>
  /* Extra small devices */
  div.card-content { margin: auto; width: 100%; }
  /* Medium devices */
  @media only screen and (min-width: 992px) {
    div.card-content { margin: 5px; }
  }
</style>
