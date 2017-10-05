<template>
  <v-btn
    flat
    info
    dark
    v-if="data"
    :key="data.label"
    :to="data.link"
    :href="data.href"
  >
    <span class="secondary--text">{{ data.label }}</span>
    <v-icon
      right
      v-bind="iconSize"
      :class="[iconColor, iconSize]"
    >
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script>
  export default {
    props: {
      data: {
        type: [Object, Array]
      }
    },
    computed: {
      icon () {
        return this.data.icon ? this.data.icon.name : 'link'
      },
      iconSize () {
        return this.data.icon ? {[this.data.icon.size]: true} || {medium: true} : {medium: true}
      },
      iconColor () {
        return this.data.icon ? this.data.icon.color || {'secondary--text': true} : {'secondary--text': true}
      }
    }
  }
</script>
