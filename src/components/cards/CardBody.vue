<template>
  <v-card-title :style="[bodyPadding]">
    <div class="text-xs-center text-md-left card-content" style="margin: 0;">
      <alex-card-content :content="body">
        <slot></slot>
      </alex-card-content>
    </div>
  </v-card-title>
</template>

<script>
  import CardContent from './CardContent.vue'
  import componentData from '../../data/componentData'

  export default {
    props: {
      body: {
        type: Object
      }
    },
    computed: {
      bodyPadding () {
        return {
          padding: this.body.padding
        }
      }
    },
    components: {
      [componentData.cardContent]: CardContent
    }
  }
</script>

<style scoped>
  /* Extra small devices */
  div.card-content { margin: auto; width: 100%; }
  /* Medium devices */
  @media only screen and (min-width: 992px) {
    div.card-content { margin: 5px; }
  }
</style>
