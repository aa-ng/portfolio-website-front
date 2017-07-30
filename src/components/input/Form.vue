<template>
  <v-flex xs12 class="text-xs-center text-md-left card-text">
    <v-text-field
      v-for="input in form"
      :label="input.label"
      v-model="input.model"
      :multi-line="input.multiline"
      :rules="[rules.required]"
    ></v-text-field>
    <v-btn primary>Send <v-icon right dark>send</v-icon></v-btn>
  </v-flex>
</template>

<script>
  export default {
    props: {
      form: {
        type: [Object, Array]
      }
    },
    data () {
      return {
        email: '',
        rules: {
          required: (value) => !!value || 'Required.'
        }
      }
    }
  }
</script>
