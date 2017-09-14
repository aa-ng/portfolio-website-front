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
      <alex-progress-rotate v-if="content.progress" :progress="content.progress"></alex-progress-rotate>
      <alex-list v-if="content.list" :list="content.list"></alex-list>
      <slot></slot>
      <!-- Details buttons -->
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
  import componentData from '../../data/componentData'

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
      [componentData.list]: List,
      [componentData.chips]: Chips,
      [componentData.form]: Form,
      [componentData.progressRotate]: RotateProgress
    }
  }
</script>
