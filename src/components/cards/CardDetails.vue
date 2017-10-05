<template>
  <v-flex xs12>
    <v-divider v-if="details.showDetails"></v-divider>
    <!-- Card details/expandable -->
    <v-slide-y-transition>
      <v-card-text v-show="details.showDetails" class="text-xs-bottom">
        <alex-card-content :content="details">
          <component
            v-for="(component, index) in details.components"
            :is="component.is"
            :key="index"
            :data="component.data"
          ></component>
        </alex-card-content>
      </v-card-text>
    </v-slide-y-transition>
  </v-flex>
</template>

<script>
  import CardContent from './CardContent.vue'
  import Buttons from '../input/Buttons.vue'
  import Article from '../text/Article.vue'
  import List from '../lists/List.vue'
  import Chips from '../lists/Chips.vue'
  import Form from '../input/Form.vue'
  import RotateProgress from '../progress/Rotate.vue'
  import Map from '../location/Map.vue'
  import componentConfig from '../../data/componentData'

  export default {
    props: {
      details: {
        type: Object
      }
    },
    components: {
      [componentConfig.cardContent]: CardContent,
      [componentConfig.buttons]: Buttons,
      [componentConfig.list]: List,
      [componentConfig.chips]: Chips,
      [componentConfig.form]: Form,
      [componentConfig.progressRotate]: RotateProgress,
      [componentConfig.article]: Article,
      [componentConfig.map]: Map
    }
  }
</script>
