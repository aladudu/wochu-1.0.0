export default {
    state: {
        //创建一个数组，因为list页面需要做渲染：
        list: []
    },
    mutations: {
        handleMutationChange(state, params) {
            state.inputVal = params;
            // console.log(state.inputVal)
        },
        handleMutationAdd(state) {
            state.list.push(state.inputVal);
            state.inputVal = "";
        },
        handleMutationDel(state, params) {
            state.list = []
        }
    },
    actions: {

        handleActionChange({ commit }, params) {
            commit('handleMutationChange', params)
        },
        handleActionAdd({ commit }) {
            commit('handleMutationAdd')
        },
        handleActionDel({ commit }, params) {
            commit('handleMutationDel', params)
        }
    },
    namespaced: true
}