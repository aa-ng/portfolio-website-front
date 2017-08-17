import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'

import Alert from './components/messages/alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('alex-alert', Alert)

const VueGoogleMaps = require('vue2-google-maps')

Vue.use(VueGoogleMaps, {
  installComponents: true,
  load: {
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
    libraries: 'places'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAJsZeG6rybGNoUHwsmGbt7JDtRdQ4qjHw',
      authDomain: 'alexngportfolio-fa355.firebaseapp.com',
      databaseURL: 'https://alexngportfolio-fa355.firebaseio.com',
      projectId: 'alexngportfolio-fa355',
      storageBucket: ''
    })
  }
})
