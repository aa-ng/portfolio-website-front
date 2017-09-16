<template>
  <div>
    <v-btn
      outline
      info
      dark
      v-if="data"
      v-for="button in data"
      :key="button.label"
      :to="button.link"
      :href="button.href"
    >
    {{ button.label }}
    <v-icon right class="info--text">{{ button.icon || 'link' }}</v-icon>
  </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: [Object, Array]
      }
    }
  }
</script>
