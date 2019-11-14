import * as firebase from "firebase/app";
import 'firebase/auth';

 
export default {
  state: {
      user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUp({commit}, payload){
        firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.user.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signIn({commit}, payload){
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(
            user => {
              const newUser = {
                id: user.user.uid
              }
              commit('setUser', newUser)
            }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    autoSignIn({commit}, payload) {
      commit('setUser', {id: payload.uid})
    },
    logout({commit}){
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user: state => state.user
  }
}
