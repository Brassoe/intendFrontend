import axios from 'axios';
const shoppingListfuncs = {
    getLists(UID){
        return axios
            .get('http://localhost:8080', {
                headers: {
                    uid: UID
                }
            })
    },
    createList(UID, payload){
        return axios
            .post('http://localhost:8080', payload, {
                headers: {
                    uid: UID
                }
            })
    },
    deleteList(UID, listId){
        return axios
            .delete('http://localhost:8080', {
                headers: {
                    uid: UID
                }
            })
    },
    addItem(UID, payload){
        return axios
            .post('http://localhost:8080', payload, {
                headers: {
                    uid: UID
                }
            })
    },
    deleteItem(UID, itemId, listId){
        return axios
            .delete()
    },
    updateCheck(UID, itemId, listId){
        return axios
            .put()
    },
    



}
export default shoppingListfuncs