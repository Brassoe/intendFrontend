import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import * as firebase from "firebase/app";
import 'firebase/auth';
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import PageLoader from './components/shared/PageLoader';
import apiFunctions from './api/functions'

Vue.config.productionTip = false

Vue.component('app-page-loader', PageLoader)



new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,

  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyBopSyO6cFLZZqqrRS75sdrqF_Ue8TFNKI",
      authDomain: "intendfrontend.firebaseapp.com",
      projectId: "intendfrontend",
      appId: "1:25281633197:web:07cedbc32f9febabbd1f24"
    })
    firebase.auth().onAuthStateChanged((user) => {
      const signingIn = this.$store.getters.signUp
      console.log(signingIn)
      if(user && !signingIn) {
        this.$store.dispatch('autoSignIn', user.uid)
        this.$store.dispatch('getInstalledModules', {uid: user.uid, router: this.$router})
      }
    })
    //Intercept router changes
    
    // router.beforeResolve((to, from, next) => {
    //   next()
    // }),
    // router.afterEach((to, from) => {
    // })
  }
}).$mount('#app')
