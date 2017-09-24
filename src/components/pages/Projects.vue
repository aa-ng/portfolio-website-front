<template>
  <v-container>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md10>
        <v-layout column>
          <v-container grid-list-md>
            <alex-cards :cards="cards"></alex-cards>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Cards from '../cards/Cards.vue'
  import componentData from '../../data/componentData'
  import { mapGetters } from 'vuex'
  import * as types from '../../store/types'

  export default {
    computed: {
      ...mapGetters({cards: types.CARDS})
    },
    components: {
      [componentData.cards]: Cards
    }
  }
</script>

<style scoped>
  .container { padding: 16px 8px; }
</style>
