import {
    getgoods
} from "@/api/api.js"
export default {
    state: {
        list: []
    },
    actions: {
        async getActionsList({ commit }) {
            let data = await getgoods()
             console.log( data.data.categories)
            commit('getMutationsList', data.data.categories)
        }
    },
    mutations: {
        getMutationsList(state, params) {
            state.list = params
            // console.log(state.list)

        }
    },
    namespaced: true
}