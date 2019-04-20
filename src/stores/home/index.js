import {
    getHome
} from "@/api/api.js"
export default {
    state: {
        list: []
    },
    actions: {
        async getActionsList({ commit }) {
            let data = await getHome()
            //  console.log( data.data.acts)
            let arr = data.data.acts;
            var home_list = []
            commit('getMutationsList',home_list)
            for (var attr in arr) {
                //  console.log(arr[attr].items)
                let arr1 = arr[attr].items;
              //  console.log(arr1[attr])
                     home_list.push(arr[attr].items)
                   
            }
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