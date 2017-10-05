<template>
  <div>
    <alex-button
      v-for="(button, index) in data"
      :key="index"
      :data="button"
    ></alex-button>
  </div>
</template>

<script>
  import Button from './Button.vue'
  import componentData from '../../data/componentData'

  export default {
    props: {
      data: {
        type: [Array, Object],
        required: true
      }
    },
    components: {
      [componentData.button]: Button
    }
  }
</script>
