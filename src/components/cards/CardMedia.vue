<template>
  <v-card-media
    :src="source"
    :class="classes"
    :contain="contained"
    height="100%"
    v-if="media"
  >
    <v-container fill-height fluid>
      <v-layout fill-height pa-1>

        <v-flex v-if="source" xs12 align-end flexbox>
          <span class="headline ml-2 white--text">{{ media.title }}</span>
        </v-flex>

        <v-container
          v-if="icon"
          class="media-icon"
          xs12
          align-center
          text-xs-center
        >
          <v-icon dark :class="iconSize">
            {{ media.icon.name }}
          </v-icon>
          <p class="headline ml-2 white--text">{{ media.title }}</p>
        </v-container>
      </v-layout>
    </v-container>
  </v-card-media>
</template>

<script>
  export default {
    props: {
      media: {
        type: Object
      }
    },
    computed: {
      classes () {
        return this.media ? this.media.color || 'primary' : 'accent'
      },
      source () {
        return this.media ? this.media.src : ''
      },
      contained () {
        return this.media ? this.media.contain : ''
      },
      icon () {
        return this.media ? this.media.icon : ''
      },
      iconSize () {
        return this.media ? 'icon--' + this.media.icon.size || 'icon--x-large' : ''
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
