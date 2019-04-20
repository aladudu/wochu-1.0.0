import Vue from 'vue'
import Vuex from 'vuex'
import home from "@/stores/home"
import classifyTwo from "@/stores/classifyTwo"
import city from "@/stores/city";
import search from "@/stores/search";
import goods from "@/stores/goods";
import shopcar from './shopcar'

import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //input中的值
    inputVal: "1111",
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
      state.list.splice(params, 1)
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
  modules: {
    home,
    classifyTwo,
    city,
    search,
    goods,
    shopcar
  }
})
