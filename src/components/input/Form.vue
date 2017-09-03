<template>
  <form>
    <v-flex xs12 class="text-xs-center text-md-left card-text">
      <v-text-field
        v-for="input in form.inputs"
        :key="input.label"
        :label="input.label"
        v-model="input.model"
        :multi-line="input.multiline"
        :rules="[rules.required]"
        :max="input.max"
        counter
      ></v-text-field>
      <v-btn type="submit" primary @click.prevent="form.action.click">{{ form.action.label }} <v-icon right dark>{{ form.action.icon }}</v-icon></v-btn>
    </v-flex>
  </form>
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
