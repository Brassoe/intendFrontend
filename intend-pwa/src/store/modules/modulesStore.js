import apiFunctions from '@/api/functions'


export default {
    state: {
      installedModules: [],
      modulesCatalogue: []
    },
    mutations: {
      setModulesCatalog(state, payload) {
        state.modulesCatalogue = payload
      },
      setInstalledModules(state, payload) {
        state.installedModules = payload
      },
      updateInstalledModules(state, payload) {
        state.installedModules.push("dsfsfsd")
      }
    },
    actions:{
      getInstalledModules({commit}, payload) {
        commit('setLoading', true)
        apiFunctions.modulesInfo(payload)
        .then(response => {
          console.log(response.data)
          commit('setInstalledModules', response.data)
          commit('setLoading', false)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
      },
      getCatalog({commit, state}){
        const uid = this.getters.user.uid
        commit('setLoading', true)
        apiFunctions.catalogInfo(uid)
        .then(response => {
          commit('setModulesCatalog', response.data)
          commit('setLoading', false)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
      },
      installModule({commit}, moduleName) {
        console.log(moduleName)
        const uid = this.getters.user.uid
        console.log(uid)
        apiFunctions.catalogInstall(uid, moduleName)
        .then(response => {
          //Update current installedModules array
          //commit('updateInstalledModules', )
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    getters: {
      moduleCatalogue: state => state.modulesCatalogue,
      installedModules: state => state.installedModules
    }
  }
  