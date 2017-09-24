<template>
  <span>
    <v-btn
      flat
      class=""
      :class="[actionTextColor, buttonClasses]"
      v-for="action in actions"
      :key="action.label"
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
  import componentData from '../../data/componentData'
  import { mapGetters } from 'vuex'
  import * as types from '../../store/types'

  export default {
    computed: {
      buttonClasses () {
        return this.actions.length > 1 ? 'hidden-xs-only' : ''
      },
      menuClasses () {
        return this.actions.length > 1 ? 'hidden-sm-and-up' : 'hidden-xs-only hidden-sm-and-up'
      },
      ...mapGetters([types.THEME]),
      actionTextColor () {
        return this[types.THEME].actionColor + '--text'
      }
    },
    props: {
      actions: {
        type: Array,
        required: true
      }
    },
    components: {
      [componentData.dropdownMenu]: DropdownMenu
    }
  }
</script>
