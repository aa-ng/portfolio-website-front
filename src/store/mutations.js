import * as types from './types'

export default {
  [types.MUTATE_LOADING]: (state, payload) => {
    state[types.LOADING] = payload
  },
  [types.MUTATE_CARDS]: (state, payload) => {
    state[types.CARDS] = payload
  },
  [types.MUTATE_ERROR]: (state, payload) => {
    state[types.ERROR] = payload
  }
}
