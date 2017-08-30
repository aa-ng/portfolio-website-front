<template>
  <v-progress-linear :indeterminate="true" style="position: fixed; margin: 0; z-index: 50;"></v-progress-linear>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['loading'])
    }
  }
</script>

<style scoped>
</style>
