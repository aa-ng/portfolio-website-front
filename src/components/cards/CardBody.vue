<template>
  <v-card-title :style="[bodyPadding]">
    <div class="text-xs-center text-md-left card-content" style="margin: 0;">
      <alex-card-content :content="body">
        <component
          v-for="(component, index) in body.components"
          :is="component.is"
          :key="index"
          :data="component.data"
          :style="componentBottomMargin(index)"
        ></component>
      </alex-card-content>
    </div>
  </v-card-title>
</template>

<script>
  import CardContent from './CardContent.vue'
  import Notification from '../messages/Alert.vue'
  import Article from '../text/Article.vue'
  import List from '../lists/List.vue'
  import Chips from '../lists/Chips.vue'
  import Form from '../input/Form.vue'
  import RotateProgress from '../progress/Rotate.vue'
  import Map from '../location/Map.vue'
  import componentConfig from '../../data/componentData'

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
    methods: {
      /*
      add margin to the bottom of the component
      unless the component is the last one
       */
      componentBottomMargin (index) {
        return {
          'margin-bottom': (index === this.body.components.length - 1 ? '0px' : '10px')
        }
      }
    },
    components: {
      [componentConfig.cardContent]: CardContent,
      [componentConfig.list]: List,
      [componentConfig.chips]: Chips,
      [componentConfig.form]: Form,
      [componentConfig.progressRotate]: RotateProgress,
      [componentConfig.notification]: Notification,
      [componentConfig.article]: Article,
      [componentConfig.map]: Map
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
