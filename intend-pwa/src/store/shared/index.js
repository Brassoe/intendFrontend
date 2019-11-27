export default {
  state: {
    loading: false,
    signUp: false,
    errorMessage: null
  },
  actions: {
    clearError({commit}) {
      commit('clearError')
    }
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setSignUp(state, payload) {
      state.signUp = payload
    },
    setErrorMessage(state, payload) {
      state.errorMessage = null
      state.errorMessage = payload
      console.log(state.errorMessage)
    },
    clearError(state) {
      state.errorMessage = null
    }
  },
  getters: {
    loading: state => state.loading,
    signUp: state => state.signUp,
    errorMessage: state => state.errorMessage
  }
}
