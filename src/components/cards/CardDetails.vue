<template>
  <v-flex xs12>
    <v-divider v-if="details.showDetails"></v-divider>
    <!-- Card details/expandable -->
    <v-slide-y-transition>
      <v-card-text v-show="details.showDetails" class="text-xs-bottom">
        <alex-card-content :content="details"></alex-card-content>
      </v-card-text>
    </v-slide-y-transition>
  </v-flex>
</template>

<script>
  import CardContent from './CardContent.vue'

  export default {
    props: {
      details: {
        type: Object
      }
    },
    components: {
      'alex-card-content': CardContent
    }
  }
</script>
