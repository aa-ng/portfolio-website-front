<template>
  <span>
    <v-btn
      flat
      class=""
      :class="[actionTextColor, buttonClasses]"
      v-for="action in actions"
      :href="action.href"
      :to="action.link"
    >
      {{ action.label }}
      <v-icon class="info--text" right>{{ action.icon || 'keyboard_arrow_right'}}</v-icon>
    </v-btn>
    <alex-dropdown-menu :class="menuClasses" :actions="actions"></alex-dropdown-menu>
  </span>
</template>

<script>
  import DropdownMenu from '../lists/DropdownMenu.vue'

  export default {
    computed: {
      buttonClasses () {
        return this.actions.length > 1 ? 'hidden-xs-only' : ''
      },
      menuClasses () {
        return this.actions.length > 1 ? 'hidden-sm-and-up' : 'hidden-xs-only hidden-sm-and-up'
      },
      actionTextColor () {
        return this.$store.getters.theme.actionColor + '--text'
      }
    },
    props: {
      actions: {
        type: Array,
        required: true
      }
    },
    components: {
      'alex-dropdown-menu': DropdownMenu
    }
  }
</script>
