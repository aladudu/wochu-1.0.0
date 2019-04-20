import {
    getsearch
} from "@/api/api.js"
export default {
    state: {
        list: []
    },
    actions: {
        async getActionsList({ commit }) {
            let data = await getsearch()
             console.log( data.data)
            commit('getMutationsList',data.data)
        }
    },
    mutations: {
        getMutationsList(state, params) {
            state.list = params
            console.log(state.list)

        }
    },
    namespaced: true
}