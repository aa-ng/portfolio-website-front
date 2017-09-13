/* Contains all route card data */
import Data from '../data/routeData'

export const setLoading = ({commit}, payload) => {
  setTimeout(() => {
    commit('setLoading', payload)
  }, 1500)
}

export const getRouteData = ({commit, state}, payload) => {
  const routeData = Data.find(route => route.path.toUpperCase() === payload.path.toUpperCase())
  if (routeData) {
    commit('setCards', routeData.cards)
  }
}
