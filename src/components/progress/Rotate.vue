<template>
  <v-container>
    <v-progress-circular
      :size="progress.size"
      :rotate="-90"
      :width="progress.width"
      :value="progress.value"
      class="info--text"
    >
      {{ progress.value }} %
    </v-progress-circular>
  </v-container>
</template>

<script>
  export default {
    props: {
      progress: {
        type: Object
      }
    }
  }
</script>
