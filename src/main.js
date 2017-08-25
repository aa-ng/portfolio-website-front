import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'

import Alert from './components/messages/alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('alex-alert', Alert)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
