import * as firebase from "firebase/app";
import 'firebase/auth';
 
export default {
  state: {
      user: {}
  },
  mutations: {
    setUser(state, payload) {
      state
    }
  },
  actions: {
    signUp({commit}, payload){
      console.log("hello")
        firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  }
}
