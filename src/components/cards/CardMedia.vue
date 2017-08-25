<template>
  <div
    v-if="media"
    :class="mediaClasses + ' card__media'"
    :style="mediaStyle">
    <div
      class="card__media__background"
      :style="mediaBackgroundStyle"
    ></div>
    <div class="card__media__content">
      <v-container fill-height fluid>
        <v-layout fill-height pa-1>

          <v-flex v-if="source" xs12 align-end flexbox :style="mediaTitleStyle">
            <span :class="mediaTextClasses">{{ media.title }}</span>
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
            <p :class="mediaTextClasses">{{ media.title }}</p>
          </v-container>

        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      media: {
        type: Object
      }
    },
    data () {
      return {
        mediaStyle: {
          height: 100 + '%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        mediaTextClasses: 'headline ml-2 white--text'
      }
    },
    computed: {
      mediaClasses () {
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
      },
      backgroundSource () {
        return 'url("' + this.source + '")'
      },
      backgroundSize () {
        return this.contained ? 'contain' : 'cover'
      },
      mediaBackgroundStyle () {
        console.log(this.backgroundSource)
        return {
          'background-image': this.backgroundSource,
          'background-size': this.backgroundSize,
          'background-position': 'center center',
          'background-repeat': 'no-repeat no-repeat'
        }
      },
      mediaTitleStyle () {
        return {
          position: 'absolute',
          bottom: 10 + 'px',
          left: 0
        }
      }
    }
  }
</script>

<style>
  .layout .flex.md3 {
    width: 25%;
  }
  div.card__media {
    height: 100%;
    min-height: 200px;
  }
  div.media-icon { margin: auto; text-align: center; }
  sm6 {
    width: 33.333%;
  }
</style>
