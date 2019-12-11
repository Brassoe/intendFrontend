import fridgeFunctions from '@/api/fridge/fridgeFunctions.js'

export default {
    state: {
        fridgeItems: [],
        categories: [],
        searchCategoryTags: []
    },
    mutations: {
        setFridge(state, payload) {
            state.fridgeItems = payload
        },
        setCategories(state, payload) {
            state.categories = payload
        },
        createParent(state, parent) {
            state.fridgeItems.push(parent)
        },
        addChild(state, payload) {
            state.fridgeItems[payload.listIndex].children.push(payload.childData)
        },
        updateItemExpDate(state, payload) {
            state.fridgeItems[payload.listIndex].children.splice([payload.childIndex], 1, payload.data)
        },
        fridgeAddComment(state, payload) {
            state.fridgeItems[payload.parentIndex].comment = payload.comment
        },
        updateCategorySearchTag(state, payload) {
            if(state.searchCategoryTags.includes(payload)) {
                state.searchCategoryTags.splice(state.searchCategoryTags.indexOf(payload), 1)
            }
            else {
                state.searchCategoryTags.push(payload)
            }
            return state.searchCategoryTags
        },  
        deleteChild(state, payload){
            if(payload.childIndex == state.fridgeItems[payload.listIndex].children.length -1 && payload.childIndex == 0){
                state.fridgeItems.splice([payload.listIndex], 1)
            }
            else {
                state.fridgeItems[payload.listIndex].children.splice([payload.childIndex], 1)
            }
        }
    },
    actions: {
        getFridge({commit}) {
            const uid = this.getters.user.uid
            fridgeFunctions.getFridge(uid)
            .then(response => {
                commit('setFridge', response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        getCategories({commit}) {
            const uid = this.getters.user.uid
            fridgeFunctions.getCategories(uid)
            .then(response => {
                commit('setCategories', response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        createParent({commit}, payload) {
            const uid = this.getters.user.uid
            fridgeFunctions.createParent(uid, payload)
            .then(response => {
                const parent = {
                    name: payload.name,
                    id: response.data.fridge_item_parent_id,
                    children: [
                        {   
                            id: response.data.id,
                            expirationDate: response.data.expiration_date 
                        }
                    ],
                    amount: 2,
                    comment: null,
                    category: payload.category_id,
                    category_name: payload.category_name
                }
                commit('createParent', parent)
            })
            .catch(error => {
                console.log(error)
            })
        },
        addChild({commit}, payload){
            const uid = this.getters.user.uid
            fridgeFunctions.createChild(uid, payload)
            .then(response => {
                const childData = {
                    id: response.data.id,
                    expirationDate: null
                }
                commit('addChild', {listIndex: payload.listIndex, childData: childData})
            })
            .catch(error => {
                console.log(error)
            })
        },
        updateItemExpDate({commit}, payload) {
            const uid = this.getters.user.uid
            fridgeFunctions.updateExpirationDate(uid, payload)
            .then(response => {
                commit('updateItemExpDate', {listIndex: payload.listIndex, childIndex: payload.childIndex, data: response.data})
            })
            .catch(error => {
                console.log(error)
            })
        },
        deleteChild({commit}, payload){
            const uid = this.getters.user.uid
            fridgeFunctions.deleteChild(uid, payload.childId)
            .then(() => {
                commit('deleteChild', payload)
            })
            .catch(error => {
                console.log(error)
            })
        },
        fridgeAddComment({commit}, payload) {
            commit('fridgeAddComment', payload)
        },
        updateCategorySearchTag({commit}, payload) {
            commit('updateCategorySearchTag', payload)
        }
    },
    getters: {
        fridgeItems: state => state.fridgeItems,
        categories: state => state.categories,
        searchCategoryTags: state => state.searchCategoryTags
    }
} 