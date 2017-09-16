<template>
  <span>
    <!-- Article title -->
    <span v-if="data.title" class="grey--text">{{ data.title }}</span><br v-if="data.title">
    <span v-if="data.paragraph">{{ data.paragraph }}</span><br v-if="data.paragraph">
  </span>
</template>

<script>
  export default {
    props: {
      data: {
        type: [Object]
      }
    }
  }
</script>
