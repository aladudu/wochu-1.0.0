import Vue from 'vue'
import Router from 'vue-router'
import home from "./home";
import classify from "./classify";
import mine from "./mine";
import shopcar from "./shopcar";
import city from "./city";
import search from "./search";
import classifya from "./classifya";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    home,
    classify,
    mine,
    shopcar,
    city,
    search,
    classifya,
    {
      path:"**",
      redirect:"/home"
    }
  ]
})
