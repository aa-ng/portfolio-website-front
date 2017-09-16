<template>
  <v-container :style="[containerPadding]">
    <span v-if="typeof content === 'string'">{{ content }}</span>
    <!-- Details objects -->
    <div :class="content.textalign || 'text-xs-center text-md-left'" v-else>
      <slot></slot>
    </div>
  </v-container>
</template>

<script>
  export default {
    props: {
      content: {
        type: Object,
        required: true
      }
    },
    computed: {
      containerPadding () {
        return {
          padding: this.content.padding
        }
      }
    }
  }
</script>
