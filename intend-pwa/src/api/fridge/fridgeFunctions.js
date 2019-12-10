import axios from 'axios';
const fridgefuncs = {
    getFridge(UID) {
        return axios
            .get('http://localhost:8080/fridge', {
                headers: {
                    uid: UID
                }
            })
    },
    createParent(UID, payload) {
        return axios
            .post('http://localhost:8080/fridge', payload, {
                headers: {
                    uid: UID
                }
            })
    },
    createChild(UID, payload){
        return axios
            .post('http://localhost:8080/fridge', 
                {
                    fridge_item_parent_id: payload.parentId
                },
                {
                    headers: {
                        uid: UID
                    }
                })
    },
    getCategories(UID){
        return axios
            .get('http://localhost:8080/fridge/categories', {
                headers: {
                    uid: UID
                }
            })
    },
    deleteChild(UID, childId) {
        console.log(childId)
        return axios
            .delete('http://localhost:8080/fridge/' + childId, {
                headers: {
                    uid: UID
                }
            })
    }

}
export default fridgefuncs