<template>
  <v-flex
    v-if="media"
    v-bind="{ [`${media.flex}`]: true }"
    :style="'height: '+media.height"
  >
    <v-card-media
      :src="media.src"
      :class="media.color || 'primary'"
      :contain="media.contain"
      height="100%"
    >
      <v-layout fill-height pa-1>
        <v-container xs12 align-end flexbox v-if="media.src">
          <v-flex>
          <span
            class="headline ml-2 white--text"
            v-text="media.title"
          ></span>
          </v-flex>
        </v-container>
        <v-container class="media-icon" xs12 align-center text-xs-center v-if="media.icon">
          <v-icon v-bind="{ [`${media.icon.size}`]: true }" dark>{{ media.icon.name }}</v-icon>
          <p
            class="headline ml-2 white--text"
            v-text="media.title"
          ></p>
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
  div.media-icon { margin: auto; text-align: center; }
</style>
