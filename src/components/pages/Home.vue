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
  import { mapGetters } from 'vuex'
  import BasicCards from '../cards/Cards.vue'

  export default {
    computed: {
      ...mapGetters(['cards'])
    },
    components: {
      'alex-presentation-cards': BasicCards
    },
    created () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container { padding: 16px 8px; }
</style>
