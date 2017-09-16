<template>
  <!-- dismissible -->
  <v-alert info @input="onClose" :value="true">
    {{ data.message }}
  </v-alert>
</template>

<script>
  export default {
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    },
    props: ['data']
  }
</script>

<style>
  div.alert {
    text-align: left;
  }
</style>
