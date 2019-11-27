import baseFunctions from '@/api/baseFunctions'
import formatting from '@/api/helpers/formatting'


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
        console.log(payload)
        state.installedModules.push(payload)
      }
    },
    actions:{
      getInstalledModules({commit}, payload) {
        commit('setLoading', true)
        const router = payload.router
        baseFunctions.modulesInfo(payload.uid)
        .then(response => {
          const moduleRoutes = response.data
          moduleRoutes.forEach(item => {
            const formattedName = formatting.formatName(item.name)
            router.addRoutes(
              [{
              path: '/' + item.name,
              name: formattedName,
              component: () => import('@/views/modules/' + formattedName)
              }]
            )
          });
          commit('setInstalledModules', response.data)
          commit('setLoading', false)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
      },
      getCatalog({commit}){
        const uid = this.getters.user.uid
        commit('setLoading', true)
        baseFunctions.catalogInfo(uid)
        .then(response => {
          commit('setModulesCatalog', response.data)
          commit('setLoading', false)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
      },
      installModule({commit, dispatch}, payload) {
        const uid = this.getters.user.uid
        const router = payload.router
        baseFunctions.catalogInstall(uid, payload.name)
        .then(response => {
          const formattedName = formatting.formatName(response.data.name)
          router.addRoutes(
            [{
              path: '/' + response.data.name,
              name: formattedName,
              component: () => import('@/views/modules/' + formattedName)
            }]);
            //Update current installedModules array
            commit('updateInstalledModules', response.data)
            //Update new catalog array

            dispatch('getCatalog')
        })
        .catch(error => {
          console.log(error)
        })
      },
      deleteModule({}, payload){
        const uid = this.getters.user.uid
        baseFunctions.modulesDelete(uid, payload)
        .then(() => {
          location.reload();
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
  