import shoppingListFunctions from '@/api/shoppingList/shoppingListFunctions'

export default {
    state: {
        lists: []
    },
    mutations: {
        setLists(state, payload) {
            state.lists = payload
        },
        addList(state, payload){
            state.lists.push({
                name: payload.name,
                id: payload.id,
                items: [],
                color: payload.color

            })
        },
        addItem(state, payload) {
            state.lists[payload.index].items.push({
                name: '',
                id: payload.id,
                checked: false
            })
        },
        updateItem(state, payload) {
            state.lists[payload.index.listIndex].items.splice(payload.index.itemIndex, 1, payload.itemData)
        },
        updateCheck(state, payload) {
            state.lists[payload.listIndex].items[payload.itemIndex].checked ^= true
        },
        deleteItem(state, payload){
            state.lists[payload.listIndex].items.splice(payload.itemIndex, 1)
        },
        deleteList(state, payload) {
            state.lists.splice([payload.index], 1)
        },
        updateColor(state, payload){
            state.lists[payload.index].color = payload.color
        }
    },
    actions: {
        getAllLists({commit}){
            commit('setLoading', true)
            const uid = this.getters.user.uid
            shoppingListFunctions.getLists(uid)
            .then(response => {
                commit('setLists', response.data)
                commit('setLoading', false)
            })
            .catch(error => {
                console.log(error)
                commit('setLoading', false)
            })
        },
        addList({commit}, payload) {
            const uid = this.getters.user.uid
            shoppingListFunctions.createList(uid, payload)
            .then(response => {
                commit('addList', response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        addTmpListItem({commit}, payload) {
            commit('addItem', {index: payload})
        },
        saveItem({commit}, payload){
            const uid = this.getters.user.uid
            shoppingListFunctions.addItem(uid, payload)
            .then(response => {
                const data = {
                    itemData: response.data,
                    index: payload
                }
                commit('updateItem', data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        flipCheck({commit}, payload) {
            const uid = this.getters.user.uid
            shoppingListFunctions.flipCheck(uid, payload.itemId)
            .then(() => {
                commit('updateCheck', payload)
            })
            .catch(error => {
                console.log(error)
            })
        },
        deleteListItem({commit}, payload){
            const uid = this.getters.user.uid
            shoppingListFunctions.deleteItem(uid, payload)
            .then(() => {
                commit('deleteItem', payload)
            })
            .catch(error => {
                console.log(error)
            })
        },
        deleteList({commit}, payload){
            const uid = this.getters.user.uid
            shoppingListFunctions.deleteList(uid, payload)
            .then(() => {
                commit('deleteList', payload)
            })
            .catch(error => {
                console.log(error)
            })
        },
        updateColor({commit}, payload){
            const uid = this.getters.user.uid
            shoppingListFunctions.updateColor(uid, payload)
            .then(() => {
                commit('updateColor', payload)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    getters: {
        ShoppingLists: state => state.lists
    }
} 