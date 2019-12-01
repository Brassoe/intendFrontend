export default {
    state: {
        friendsList: [
            {
            profileImage: 'https://picsum.photos/200',
            userName: 'OleBole',
            firstName: 'Ole',
            lastName: 'Støy'
            },
            {
            profileImage: 'https://picsum.photos/200',
            userName: 'Cille',
            firstName: 'Cecilie',
            lastName: 'Nielsen'
            },
            {
            profileImage: 'https://picsum.photos/200',
            userName: 'Ditsk',
            firstName: 'Ditte',
            lastName: 'Eriksen'
            },
            {
            profileImage: 'https://picsum.photos/200',
            userName: 'ChrisBoy',
            firstName: 'Christian',
            lastName: 'Brassøe'
            }
        ],
        groups: []
    },
    mutations: {
        //Removes friend from local array
        removeFriend(state, payload) {
            state.friendsList.splice(payload.index, 1)
        }
    },
    actions: {
        addFriend({commit}, payload) {

        },
        //Commits removeFriend and removes friend from local array - Thereafter removes friend from DB
        removeFriend({commit}, payload) {
            commit('removeFriend', payload)
            //TODO - Remove friend from DB
        }
    },
    getters: {
        friendsList: state => state.friendsList
    }
}
  