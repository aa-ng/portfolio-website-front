<template>
  <!-- dismissible -->
  <v-alert
    v-bind="alertType"
    @input="onClose"
    :value="true"
  >
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
    computed: {
      alertType () {
        return this.data.type ? {[this.data.type]: true} : {info: true}
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
