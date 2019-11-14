import axios from "axios"

export default {
    state: {
      installedModules: null
    },
    mutations: {
      setInstalledModules(state, payload) {
        state.installedModules = payload
      }
    },
    actions:{
      getInstalledModules({commit}, payload) {
        commit('setLoading', true)
        axios
                .get('http://localhost:8080/modules/')
                .then(response => {
                    response = response.data;
                    commit('setInstalledModules', response)
                      commit('setLoading', false)
                })
                .catch(error => {
                  console.log(error)
                  commit('setLoading', false)
                });
      }
    },
    getters: {
      installedModules: state => state.installedModules
    }
  }
  