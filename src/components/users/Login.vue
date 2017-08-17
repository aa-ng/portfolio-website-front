<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm5 md4 lg3 class="center" hidden-md-and-up>
        <v-card-media
          src="/static/images/logos/logo.png"
          height="125px"
          contain
        ></v-card-media>
      </v-flex>
      <v-flex xs12 md8 lg9 @submit.prevent="signIn">
        <div>
          <div class="headline">Log in</div>
          <form>
            <v-text-field
              name="email"
              label="Email"
              id="email"
              v-model="userData.email"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              name="password"
              label="Password"
              id="password"
              v-model="userData.password"
              type="password"
              required
            ></v-text-field>
            <v-btn type="submit" class="primary">Submit</v-btn>
          </form>
        </div>
      </v-flex>
      <v-flex xs12 sm5 md4 lg3 class="center" hidden-sm-and-down>
        <v-card-media
          src="/static/images/logos/logo.png"
          height="125px"
          contain
        ></v-card-media>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      userData: {
        type: Object,
        required: true
      }
    },
    methods: {
      signIn () {
        this.$store.dispatch('signUserIn', {email: this.userData.email, password: this.userData.password})
      }
    }
  }
</script>

<style scoped>
  .center {
    margin: auto;
  }
</style>

