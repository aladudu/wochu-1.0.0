import {
    getShowGoods,
    shopcarGoods
} from '../../api/api'
export default {
    namespaced: true,
    state: {
        goods: [],
        shopcarGoods: []
    },
    mutations: {
        mutationsShowGoods(state, params) {
            state.goods = params;
            /*  console.log(state.goods) */
        },

        mutationsShopcarGoods(state, params) {
            state.shopcarGoods = params;
            console.log(params)
        }


    },
    actions: {
        async actionsShowGoods({
            commit
        }) {
            let data = await getShowGoods()
            commit('mutationsShowGoods', data.data.items)
            // console.log(data.data.items)

        },
        async actionShopcarGoods({
            commit
        }) {
            let data = await shopcarGoods()
            commit('mutationsShopcarGoods', data.data.items)
           

        }
    }
}