<template>
  <v-flex xs12>
    <!-- Card buttons/actions -->
    <v-card-actions v-if="actions">
      <alex-details-button :actions="actions"></alex-details-button>
      <v-spacer></v-spacer>
      <!-- Dropdown details -->
      <v-btn
        icon
        @click="details.showDetails = !details.showDetails"
        v-tooltip:top="{ html: 'details' }"
      >
        <v-icon v-if="details">{{ details.showDetails ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-flex>
</template>

<script>
  import DetailsButton from '../input/Actions.vue'
  export default {
    props: {
      actions: {
        type: Array,
        required: true
      },
      details: {
        type: Object
      }
    },
    components: {
      'alex-details-button': DetailsButton
    }
  }
</script>
