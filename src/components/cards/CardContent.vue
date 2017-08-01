<template>
  <v-container>
    <span v-if="typeof content === 'string'">{{ content }}</span>
    <!-- Details objects -->
    <div :class="content.textalign | 'text-xs-center text-md-left'" v-else>
      <!-- Details title -->
      <span v-if="content.title" class="grey--text">{{ content.title }}</span><br v-if="content.title">
      <span v-if="content.summary">{{ content.summary }}</span><br v-if="content.summary">

      <!-- Details chips -->
      <alex-chips v-if="content.chips" :chips="content.chips"></alex-chips>
      <alex-form v-if="content.form" :form="content.form"></alex-form>
      <alex-rotate-progress v-if="content.progress" :progress="content.progress"></alex-rotate-progress>
      <alex-list v-if="content.list" :list="content.list"></alex-list>
      <slot></slot>
      <!-- Details buttons -->
      <v-btn
        outline
        info
        dark
        v-if="content.buttons"
        v-for="button in content.buttons"
        :to="button.link"
        :href="button.href"
      >{{ button.label }}</v-btn>
    </div>
  </v-container>
</template>

<script>
  import List from '../lists/List.vue'
  import Chips from '../lists/Chips.vue'
  import Form from '../input/Form.vue'
  import RotateProgress from '../progress/Rotate.vue'

  export default {
    props: {
      content: {
        type: Object,
        required: true
      }
    },
    components: {
      'alex-list': List,
      'alex-chips': Chips,
      'alex-form': Form,
      'alex-rotate-progress': RotateProgress
    }
  }
</script>
