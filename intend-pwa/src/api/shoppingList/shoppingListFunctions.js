import axios from 'axios';
const shoppingListfuncs = {
    getLists(UID){
        return axios
            .get('http://localhost:8080/shopping-list', {
                headers: {
                    uid: UID
                }
            })
    },
    createList(UID, payload){
        return axios
            .post('http://localhost:8080/shopping-list', payload, {
                headers: {
                    uid: UID
                }
            })
    },
    deleteList(UID, payload){
        return axios
            .delete('http://localhost:8080/shopping-list/' + payload.listId, {
                headers: {
                    uid: UID
                }
            })
    },
    addItem(UID, payload){
        return axios
            .post('http://localhost:8080/shopping-list/items', 
            {
                name: payload.itemName,
                checked: false,
                shopping_list_id: payload.listId
            }, 
            {
                headers: {
                    uid: UID
                }
            })
    },
    deleteItem(UID, payload){
        return axios
            .delete('http://localhost:8080/shopping-list/items/' + payload.itemId, {
                headers: {
                    uid: UID
                }
            })
    },
    flipCheck(UID, itemId){
        return axios
            .put('http://localhost:8080/shopping-list/items/' + itemId, {}, {
                headers: {
                    uid: UID
                }
            })
    },
    updateColor(UID, payload){
        return axios
        .put('http://localhost:8080/shopping-list/' + payload.listId, 
        {
            color: payload.color
        },
        {
            headers: {
                uid: UID
            }
        })
    }
    



}
export default shoppingListfuncs