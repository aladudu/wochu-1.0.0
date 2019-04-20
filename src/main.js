import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/store.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BScroll from './common/BScroll/index.vue'
import Loading from './common/loading/index.vue'
import VueLazyload from 'vue-lazyload'
import mintUI from "mint-ui"
import 'mint-ui/lib/style.css'

// import VueTouch from 'vue-touch'
Vue.use(mintUI)
Vue.use(VueAwesomeSwiper)
// Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false
Vue.component("BScroll",BScroll);
Vue.component("Loading",Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("./static/aa.gif"),
  loading: require("./static/aa.gif"),
  attempt: 3
})