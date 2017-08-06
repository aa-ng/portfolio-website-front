<template>
  <span>
    <v-btn
      flat
      class="info--text"
      v-for="action in actions"
      :href="action.href"
      :to="action.link"
    >
      {{ action.label }}
      <v-icon class="info--text" right>{{ action.icon || 'keyboard_arrow_right'}}</v-icon>
    </v-btn>
  </span>
</template>

<script>
  export default {
    props: {
      actions: {
        type: Array,
        required: true
      }
    }
  }
</script>
