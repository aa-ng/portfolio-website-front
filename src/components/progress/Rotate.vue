<template>
  <v-container>
    <v-progress-circular
      :size="data.size"
      :rotate="-90"
      :width="data.width"
      :value="data.value"
      class="info--text"
    >
      {{ data.value }} %
    </v-progress-circular>
  </v-container>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object
      }
    }
  }
</script>
