/* Contains all route card data */
import Data from '../data/routeData'
// global types
import * as types from './types'

export default {
  [types.UPDATE_LOADING]: ({commit}, payload) => {
    setTimeout(() => {
      commit(types.MUTATE_LOADING, payload)
    }, 1500)
  },
  [types.GET_ROUTE_DATA]: ({commit, state}, payload) => {
    const routeData = Data.find(route => route.path.toUpperCase() === payload.path.toUpperCase())
    if (routeData) {
      commit(types.MUTATE_CARDS, routeData.cards)
    }
  }
}
