import fridgeFunctions from '@/api/shoppingList/shoppingListFunctions'

export default {
    state: {
        fridgeItems: [
            {
                id: null,
                name: 'Sødmælk',
                amount: 2,
                expires: '31/2-2019',
                comment: 'Lorem ipsum dolor sit amet.',
                category: 'Mejeri'
            },
            {
                id: null,
                name: 'Oksefars',
                amount: 2,
                expires: '31/2-2019',
                comment: '',
                category: 'Kød'
            },
            {
                id: null,
                name: 'Æg ukogte',
                amount: 2,
                expires: '31/2-2019',
                comment: 'Lorem ipsum dolor sit amet.',
                category: 'Æg'
            },
            {
                id: null,
                name: 'Hamburgerryg',
                amount: 2,
                expires: '31/2-2019',
                comment: '',
                category: 'Pålæg'
            },

        ]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        fridgeItems: state => state.fridgeItems
    }
} 