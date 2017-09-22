var state = {
  defaultMessage: 'Hello there!',
  snackbar: {
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
  setSnackBarMessage (state, payload) {
    if (typeof payload === 'string') {
      state.snackbar.message = payload
    }
  },
  setSnackBarModel (state, payload) {
    state.snackbar.model = payload
  }
}

var actions = {
  toggleSnackBar ({commit, getters}) {
    commit('setSnackBarModel', !getters.snackbar.model)
  },
  resetSnackBarMessage ({commit, state, getters}) {
    // reset the snackbar message after the snackbar timeout
    setInterval(() => {
      commit('setSnackBarModel', getters.defaultMessage)
    }, state.snackbar.timeout)
  },
  setSnackBarMessage ({commit}, payload) {
    commit('setSnackBarMessage', payload)
  }
}

var getters = {
  snackbar (state) {
    return state.snackbar
  },
  defaultMessage (state) {
    return state.defaultMessage
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
