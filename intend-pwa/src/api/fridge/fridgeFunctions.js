import axios from 'axios';
const route = 'http://localhost:8080/fridge/'
const fridgefuncs = {
    getFridge(UID) {
        return axios
            .get(route, {
                headers: {
                    uid: UID
                }
            })
    },
    createParent(UID, payload) {
        return axios
            .post(route, payload, {
                headers: {
                    uid: UID
                }
            })
    },
    createChild(UID, payload){
        return axios
            .post(route, 
                {
                    fridge_item_parent_id: payload.parentId
                },
                {
                    headers: {
                        uid: UID
                    }
                })
    },
    updateExpirationDate(UID, payload){
        return axios
            .put(route + payload.id, 
                {
                    expiration_date: payload.date
                },
                {
                    headers: {
                        uid: UID
                    }
                })
    },  
    updateComment(UID, payload) {
        return axios
            .put(route + payload.id, 
                {
                    comment: payload.comment
                },
                {
                    headers: {
                        uid: UID
                    }
                })
    },
    getCategories(UID){
        return axios
            .get(route + 'categories', {
                headers: {
                    uid: UID
                }
            })
    },
    deleteChild(UID, childId) {
        return axios
            .delete(route + childId, {
                headers: {
                    uid: UID
                }
            })
    }

}
export default fridgefuncs