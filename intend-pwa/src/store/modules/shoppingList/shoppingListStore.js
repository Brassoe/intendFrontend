import apiFunctions from '@/api/functions'

export default {
    state: {
        lists: [
            {
                name: 'List 1',
                items: [
                    'dog',
                    'cat',
                    'something',
                    'done'
                ]
            },
            {
                name: 'List 2',
                items: [
                    'cat',
                    'done',
                    'dog',
                    'fsfs',
                    'something'
                ]
            }
        ]
    },
    mutations: {
        //Set all fetched lists to the list array
        setLists(state, payload) {
        },
        //Add list to lists array
        addList(state, payload){
            state.lists.push({
                name: payload.name,
                items: []
            })
        },
        //add item to specific list
        addItem(state, payload) {
            state.lists[payload.index].items.push(payload.name)
        },
        //delete specific item on specific list 
        deleteItem(state, payload){
            state.lists[payload.ListIndex].items.splice(payload.ItemIndex, 1)
            console.log(state.lists[payload.ListIndex].items)
        },
        //deletes an entire specific list on lists array
        deleteList(state, payload) {
            state.lists.splice([payload.index], 1)
        }
    },
    actions: {
        addList({commit}, payload) {
            commit('addList', payload)
            console.log(payload.name)
        },
        addListItem({commit}, payload) {
            const name = ''
            //API CALL
            commit('addItem', {index: payload, name: name})
        },
        saveItem(){
            
        },
        deleteListItem({commit}, payload){
            //API CALL
            commit('deleteItem', payload)
        },
        deleteList({commit}, payload){
            //API CALL
            commit('deleteList', payload)
        }
    },
    getters: {
        ShoppingLists: state => state.lists
    }
} 