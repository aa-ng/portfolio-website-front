<template>
  <v-menu offset-y>
    <v-btn dark slot="activator" flat class="info--text">
      Actions
      <v-icon class="info--text" right>keyboard_arrow_down</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile v-for="action in actions" :key="action.label">
        <v-list-tile-title>
          <router-link v-if="action.link" :to="action.link" :class="actionTextColor">
            {{ action.label }}
          </router-link>
          <a v-if="action.href" :href="action.href" :class="actionTextColor">
            {{ action.label }}
          </a>
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../../store/types'

  export default {
    computed: {
      ...mapGetters({theme: [types.THEME]}),
      actionTextColor () {
        return this.theme.actionColor + '--text'
      }
    },
    props: {
      actions: {
        type: Array,
        required: true
      }
    }
  }
</script>
