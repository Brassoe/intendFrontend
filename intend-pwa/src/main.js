import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import * as firebase from "firebase/app";
import 'firebase/auth';
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,

  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyBopSyO6cFLZZqqrRS75sdrqF_Ue8TFNKI",
      authDomain: "intendfrontend.firebaseapp.com",
      databaseURL: "https://intendfrontend.firebaseio.com",
      projectId: "intendfrontend",
      storageBucket: "intendfrontend.appspot.com",
      messagingSenderId: "25281633197",
      appId: "1:25281633197:web:07cedbc32f9febabbd1f24"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
}).$mount('#app')
