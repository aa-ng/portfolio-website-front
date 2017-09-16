<template>
  <!-- Details buttons -->
  <gmap-map
    map-type-id="terrain"
    style="width: auto; height: 200px;"
    v-if="data"
    :options="options"
    :center="data.position"
    :draggable="false"
    :zoom="data.zoom"
  >
    <gmap-marker :position="data.position"></gmap-marker>
  </gmap-map>
</template>

<script>
  export default {
    data () {
      return {
        options: {disableDefaultUI: true, zoomControl: false, draggable: false}
      }
    },
    props: {
      data: {
        type: [Object]
      }
    }
  }
</script>
