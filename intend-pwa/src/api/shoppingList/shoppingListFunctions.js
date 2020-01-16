import axios from 'axios';

const route = 'http://localhost:8080/shopping-list/'
const shoppingListfuncs = {
    getLists(UID){
        return axios
            .get(route, {
                headers: {
                    uid: UID
                }
            })
    },
    createList(UID, payload){
        return axios
            .post(route, payload, {
                headers: {
                    uid: UID
                }
            })
    },
    deleteList(UID, payload){
        return axios
            .delete(route + payload.listId, {
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
            .delete(route + 'items/' + payload.itemId, {
                headers: {
                    uid: UID
                }
            })
    },
    flipCheck(UID, itemId){
        return axios
            .put(route + 'items/' + itemId, {}, {
                headers: {
                    uid: UID
                }
            })
    },
    updateColor(UID, payload){
        return axios
        .put(route + payload.listId, 
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