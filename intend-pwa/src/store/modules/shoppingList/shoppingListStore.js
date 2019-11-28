import shoppingListFunctions from '@/api/shoppingList/shoppingListFunctions'

export default {
    state: {
        lists: []
    },
    mutations: {
        //Set all fetched lists to the list array
        setLists(state, payload) {
            state.lists = payload
        },
        //Add list to lists array
        addList(state, payload){
            state.lists.push({
                name: payload.name,
                id: null,
                items: [],
                color: ''

            })
        },
        //add item to specific list
        addItem(state, payload) {
            state.lists[payload.index].items.push({
                name: '',
                id: null,
                checked: false,
            })
        },
        //update specific item on specific list
        updateItem(state, payload) {
            state.lists[payload.listIndex].items[payload.itemIndex].name = payload.itemName
        },
        //flip checked prop between checked or unchecked
        updateCheck(state, payload) {
        state.lists[payload.listIndex].items[payload.itemIndex].checked ^= true
        },
        //delete specific item on specific list 
        deleteItem(state, payload){
            state.lists[payload.ListIndex].items.splice(payload.ItemIndex, 1)
        },
        //deletes an entire specific list on lists array
        deleteList(state, payload) {
            state.lists.splice([payload.index], 1)
        },
        updateColor(state, payload){
            state.lists[payload.index].color = payload.color
        }
    },
    actions: {
        getAllLists({commit}){
            //GET ALL LISTS FROM API/DB AND STORE THEM IN VARIABLE
            commit('setLists', payload)
        },
        addList({commit}, payload) {
            //ADD LIST TO LOCAL LISTS
            //TODO - ADD TO DB AND RETRIEVE OBJECT FROM API ( COTAINS ID)
            commit('addList', payload)
        },
        addTmpListItem({commit}, payload) {
            //ADD TEMPORARY ITEM TO LOCAL LIST
            commit('addItem', {index: payload})
        },
        saveItem({commit, dispatch}, payload){
            //PUSH ITEM TO DB
            commit('updateItem', payload)
            dispatch('flipCheck', payload)
        },
        flipCheck({commit}, payload) {
            //PUSH CHECKED VALUE TO ITEM ON DB
            commit('updateCheck', payload)
        },
        deleteListItem({commit}, payload){
            //API CALL
            commit('deleteItem', payload)
        },
        deleteList({commit}, payload){
            //API CALL
            commit('deleteList', payload)
        },
        updateColor({commit}, payload){
            commit('updateColor', payload)
        }
    },
    getters: {
        ShoppingLists: state => state.lists
    }
} 