<template>
  <v-alert error dismissible @input="onClose" :value="true">
    {{ message }}
  </v-alert>
</template>

<script>
  export default {
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    },
    props: ['message']
  }
</script>
