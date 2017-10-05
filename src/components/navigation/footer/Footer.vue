<template>
  <v-footer :absolute="footer.fixed">
    <v-container style="width: 100%;">
      <v-layout row wrap>
        <v-flex xs12 v-for="component in footer.components" :key="component.is">
          <component
            :is="component.is"
            :data="component.data"
          ></component>
        </v-flex>
      </v-layout>
      <p class="copy">Alex Ng © {{ new Date().getFullYear() }}</p>
    </v-container>
  </v-footer>
</template>

<script>
  import Buttons from '../../input/Buttons.vue'
  import componentData from '../../../data/componentData'
  import { mapGetters } from 'vuex'
  import { FOOTER } from '../../../store/types'

  export default {
    computed: {
      ...mapGetters({ footer: [FOOTER] })
    },
    components: {
      [componentData.buttons]: Buttons
    }
  }
</script>

<style scoped>
  footer.footer {
    height: auto;
  }
  div.layout {
    margin: 0;
    padding: 0;
    text-align: center;
    display: block;
  }
  p.copy {
    display: block;
    text-align: right;
  }
  div.container { max-width: none; }
</style>
