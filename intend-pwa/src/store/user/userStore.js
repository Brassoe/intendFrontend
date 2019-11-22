import * as firebase from "firebase/app";
import 'firebase/auth';
import apiFunctions from '@/api/functions'

 
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
          // TODO - Better formatting
          user => {
            const newUser = {
              name: payload.name,
              address: payload.address,
              email: payload.email,
              uid: user.user.uid
            }
            apiFunctions.userCreate(newUser)
              .then(response => {
                console.log(response)
              })
              .catch(error => {
                console.log(error)
              })
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
        .then()
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    autoSignIn({commit}, payload) {
      console.log("AUTO SIGN IN")
      apiFunctions.userInfo(payload)
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
