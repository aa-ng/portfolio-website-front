import * as types from '../types'

var state = {
  [types.DEFAULT_MESSAGE]: 'Hello there!',
  [types.SNACKBAR]: {
    model: false,
    x: null,
    y: 'bottom',
    timeout: 6000,
    mode: '',
    message: 'Hello there!',
    vertical: 'vertical',
    multiline: 'multi-line'
  }
}

var mutations = {
  [types.MUTATE_SNACKBAR_MESSAGE] (state, payload) {
    if (typeof payload === 'string') {
      state[types.SNACKBAR].message = payload
    }
  },
  [types.MUTATE_SNACKBAR_MODEL] (state, payload) {
    state[types.SNACKBAR].model = payload
  }
}

var actions = {
  [types.TOGGLE_SNACKBAR] ({commit, getters}) {
    commit(types.MUTATE_SNACKBAR_MODEL, !getters[types.SNACKBAR].model)
  },
  [types.RESET_SNACKBAR_MESSAGE] ({commit, state, getters}) {
    // reset the snackbar message after the snackbar timeout
    setInterval(() => {
      commit(types.MUTATE_SNACKBAR_MESSAGE, getters.defaultMessage)
    }, state[types.SNACKBAR].timeout)
  },
  [types.UPDATE_SNACKBAR_MESSAGE] ({commit}, payload) {
    commit(types.MUTATE_SNACKBAR_MESSAGE, payload)
  }
}

var getters = {
  [types.SNACKBAR] (state) {
    return state[types.SNACKBAR]
  },
  [types.DEFAULT_MESSAGE] (state) {
    return state[types.DEFAULT_MESSAGE]
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
