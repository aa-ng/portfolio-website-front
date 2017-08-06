<template>
  <v-card class="mb-1" :id="card.name">
    <alex-card-toolbar v-if="card.toolbar" :toolbar="card.toolbar"></alex-card-toolbar>
    <v-container>
      <v-layout row wrap>
        <!-- Card image -->
        <alex-card-media v-if="card" :media="card.media"></alex-card-media>
        <!-- Card body -->
        <v-flex class="card-body">
          <alex-card-body :body="card.body"></alex-card-body>
          <v-divider v-if="card && card.actions"></v-divider>
          <!-- Card actions -->
          <alex-card-actions v-if="card && card.actions" :actions="card.actions" :details="card.details"></alex-card-actions>
        </v-flex>
        <alex-card-details v-if="card && card.details" :details="card.details"></alex-card-details>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import CardToolbar from './CardToolbar.vue'
  import CardBody from './CardBody.vue'
  import CardMedia from './CardMedia.vue'
  import CardDetails from './CardDetails.vue'
  import CardActions from './CardActions.vue'

  export default {
    props: {
      card: {
        type: Object
      }
    },
    components: {
      'alex-card-toolbar': CardToolbar,
      'alex-card-body': CardBody,
      'alex-card-media': CardMedia,
      'alex-card-actions': CardActions,
      'alex-card-details': CardDetails
    }
  }
</script>

<style scoped>
  div.container, div.row, div.flex
  {
    padding: 0px;
    margin: 0px;
  }
  div.card__actions { margin-top: auto; }
</style>
