<template>
  <v-snackbar
    primary
    :timeout="timeout"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :multi-line="multiLineMode"
    :vertical="verticalMode"
    v-model="model"
  >
    {{  message }}
    <v-btn
      flat
      class="black--text"
      @click="closeSnackbar"
    >Close</v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    props: {
      data: {
        required: true
      }
    },
    methods: {
      closeSnackbar () {
        this.data.model = false
      }
    },
    computed: {
      multiLineMode () {
        return this.data.mode === 'multiline'
      },
      verticalMode () {
        return this.data.mode === 'vertical'
      },
      timeout () {
        return this.data.timeout
      },
      model () {
        return this.data.model
      },
      message () {
        return this.data.message
      },
      left () {
        return this.data.x === 'left'
      },
      right () {
        return this.data.x === 'right'
      },
      top () {
        return this.data.y === 'top'
      },
      bottom () {
        return this.data.y === 'bottom'
      }
    }
  }
</script>

<style scoped>
  div.snack {
    margin: auto;
  }
</style>
