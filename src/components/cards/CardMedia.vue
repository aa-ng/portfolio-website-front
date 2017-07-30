<template>
  <v-flex
    v-if="media"
    v-bind="{ [`${media.flex}`]: true }"
    :style="'height: '+media.height"
  >
    <v-card-media
      :src="media.src"
      class="primary"
      :contain="media.contain"
      height="100%"
    >
      <v-layout fill-height pa-1>
        <v-container xs12 align-end flexbox>
          <v-flex>
          <span
            class="headline ml-2 white--text"
            v-text="media.title"
          ></span>
          </v-flex>
        </v-container>
      </v-layout>
    </v-card-media>
  </v-flex>
</template>

<script>
  export default {
    props: {
      media: {
        type: Object
      }
    }
  }
</script>

<style>
  div.card__media {
    height: 100%;
    min-height: 200px;
  }
</style>
