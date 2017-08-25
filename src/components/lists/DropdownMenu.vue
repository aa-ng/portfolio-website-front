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
  export default {
    computed: {
      actionTextColor () {
        return this.$store.getters.theme.actionColor + '--text'
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
