import * as firebase from "firebase/app";
import 'firebase/auth';
import baseFunctions from '@/api/baseFunctions'

 
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
      commit('setSignUp', true)
        firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          // TODO - Better formatting
          user => {
            const newUser = {
              name: payload.name,
              address: payload.address,
              email: payload.email,
              uid: user.user.uid
            }
            baseFunctions.userCreate(newUser)
              .then(() => {
                commit('setSignUp', false)
                commit('setUser', newUser)
              })
              .catch(error => {
                commit('setErrorMessage', error.message)
                commit('setSignUp', false)
              })
          }
        )
        .catch(
          error => {
            commit('setErrorMessage', error.message)
          }
        )
    },
    signIn({commit}, payload){
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then()
        .catch(
          error => {
            commit('setErrorMessage', error.message)
            console.log(error)
          }
        )
    },
    autoSignIn({commit}, payload) {
      baseFunctions.userInfo(payload)
        .then(response => {
          const newUser = {
            name: response.data.name,
            email: response.data.email,
            address: response.data.address,
            uid: response.data.id,
            profileImage: response.data.profile_img
          }
          commit('setUser', newUser)
        })
        // TODO - Handle error
        .catch(error => {
          commit('setErrorMessage', error.message)
          console.log(error)
        })
    },
    logout({commit}){
      //commit('setUser', null)
      firebase.auth().signOut()
        .then(() => {
          location.reload();

      })
    }
  },
  getters: {
    user: state => state.user
  }
}
