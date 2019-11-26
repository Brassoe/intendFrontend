export default {
  state: {
    loading: false,
    signUp: false
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setSignUp(state, payload) {
      state.signUp = payload
    }
  },
  getters: {
    loading: state => state.loading,
    signUp: state => state.signUp
  }
}
