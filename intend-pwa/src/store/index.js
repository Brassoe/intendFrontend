import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/userStore.js'
import shared from './shared/index.js'
import modulesStore from './modules/modulesStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: user,
    shared: shared,
    modulesStore: modulesStore
  }
})
