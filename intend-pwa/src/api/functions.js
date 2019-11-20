import axios from 'axios';
const funcs = {
    userInfo(UID){
        return axios
            .get('http://localhost:8080/user', {
                headers: {
                    uid: UID
                }
            })
    },
    userCreate(payload){
        return axios
            .post('http://localhost:8080/user/create', payload)
    },
    userDelete(UID){},
    userUpdate(UID, payload){},
    catalogInfo(UID){
        return axios
            .get('http://localhost:8080/catalog', {
                headers: {
                    uid: UID
                }
            })
    },
    catalogInstall(UID, moduleName){
        return axios
            .get('http://localhost:8080/catalog/install/' + moduleName, {
                headers: {
                    uid: UID
                }
            })
    },
    modulesInfo(UID){
        return axios
            .get('http://localhost:8080/modules', {
                headers: {
                    uid: UID
                }
            })
    },
    modulesDelete(){},
    modulesSlug(){},
}
export default funcs