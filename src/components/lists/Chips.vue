<template>
  <div class="text-xs-center text-md-left">
    <v-chip
      class="white--text elevation-5"
      v-for="chip in data"
      :class="chip.color"
      :key="chip.label"
    >
      <v-avatar
        class="darken-4"
        :class="chip.color"
      >
        <v-icon>{{ chip.icon }}</v-icon>
      </v-avatar>
      {{ chip.label }}
    </v-chip>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        required: true
      }
    }
  }
</script>
