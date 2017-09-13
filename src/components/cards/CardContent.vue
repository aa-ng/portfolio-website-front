<template>
  <v-container :style="[containerPadding]">
    <span v-if="typeof content === 'string'">{{ content }}</span>
    <!-- Details objects -->
    <div :class="content.textalign || 'text-xs-center text-md-left'" v-else>
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
        :key="button.label"
        :to="button.link"
        :href="button.href"
      >
        {{ button.label }}
        <v-icon right class="info--text">{{ button.icon || 'link' }}</v-icon>
      </v-btn>
      <gmap-map
        map-type-id="terrain"
        style="width: auto; height: 200px;"
        v-if="content.map"
        :options="{disableDefaultUI: true, zoomControl: false, draggable: false}"
        :center="content.map.position"
        :draggable="false"
        :zoom="content.map.zoom"
      >
        <gmap-marker :position="content.map.position"></gmap-marker>
      </gmap-map>
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
    computed: {
      containerPadding () {
        return {
          padding: this.content.padding
        }
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
