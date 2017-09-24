import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import * as types from './store/types'

Vue.use(Vuetify)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.dispatch(types.GET_ROUTE_DATA, to)
  store.commit(types.MUTATE_LOADING, true)
  next()
})

router.afterEach(() => {
  // use action to create fake delay to loading so loading bar doesn't disappear right away
  store.dispatch(types.UPDATE_LOADING, false)
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB_7DnG_iFkj589mb8eQWZ2Dh7lUBmEvcQ',
    disableDefaultUI: true
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
