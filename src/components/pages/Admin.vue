<template>
  <v-container>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md10>
        <v-layout column>
          <v-container grid-list-lg fluid>
            <!-- Top spacer for header / toolbar -->
            <v-layout class="mt-5"></v-layout>
            <v-layout row v-if="error">
              <v-flex xs12>
                <alex-alert @dismissed="onDismissed" :message="error.message"></alex-alert>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card class="white--text">
                  <v-toolbar class="primary" dark>
                    <v-toolbar-title>Admin</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn dark icon>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-tabs dark fixed icons centered>
                    <v-tabs-bar slot="activators" class="primary">
                      <v-tabs-slider class="secondary"></v-tabs-slider>
                      <v-tabs-item href="#tab-1">
                        <v-icon>account_circle</v-icon>
                        Log in
                      </v-tabs-item>
                      <v-tabs-item href="#tab-2">
                        <v-icon>person_add</v-icon>
                        Sign up
                      </v-tabs-item>
                    </v-tabs-bar>
                    <v-tabs-content
                      :id="'tab-1'"
                    >
                      <alex-login :userData="userData"></alex-login>
                    </v-tabs-content>
                    <v-tabs-content
                      :id="'tab-2'"
                    >
                      <alex-sign-up :userData="userData"></alex-sign-up>
                    </v-tabs-content>
                  </v-tabs>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Signup from '../users/Signup.vue'
  import Login from '../users/Login.vue'

  export default {
    data () {
      return {
        userData: {
          email: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (val) {
        if (val !== null && val !== undefined) {
          this.$router.push('/')
        }
      }
    },
    components: {
      'alex-sign-up': Signup,
      'alex-login': Login
    }
  }
</script>
