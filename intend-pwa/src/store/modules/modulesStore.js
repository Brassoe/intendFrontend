import axios from "axios"

export default {
    state: {
      modulesCatalogue: [],
      installedModules: []
    },
    mutations: {
      setModulesCatalogue(state, payload) {
        state.modulesCatalogue = payload
      }
    },
    actions:{
      getInstalledModules({commit}, payload) {
        commit('setLoading', true)
        axios
                .get('http://localhost:8080/modules/')
                .then(response => {
                    response = response.data;
                    commit('setModulesCatalogue', response)
                    commit('setLoading', false)
                })
                .catch(error => {
                  console.log(error)
                  commit('setLoading', false)
                });
      }
    },
    getters: {
      moduleCatalogue: state => state.modulesCatalogue,
      installedModules: state => state.installedModules
    }
  }
  