<template>
  <div class="classifya">
    <img src="../../assets/img/ccccccc.jpg" class="img">
    <router-link tag="span" to="/home" class="iconfont">&#xe642;</router-link>
    <img src="../../assets/img/ac-share.png">
    <img src="../../assets/img/ac-cart.png">
    <img src="../../assets/img/go_top.png">
    <img src="../../assets/img/ssss.jpg">
    <div class="goodsbox">
      <ul>
        <li v-for="item in list">
          <img v-for="items in item.iconList" :src="items.url">
          <p>{{item.name}}</p>
          <p>{{item.parentId | toSign("￥") }}</p>
          <p>加入购物车</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";

// import {getgoods} from "@/api/api.js"
export default {
  //调用mapActions中的方法：
  created() {
    this.getActionsList();
  },

  computed: {
    ...Vuex.mapState({
      list: state => state.goods.list
    })
  },
  //接收mutations方法中传递过来的值
  methods: {
    ...Vuex.mapActions({
      getActionsList: "goods/getActionsList"
    })
  },
  filters: {
    toSign(val, sign) {
      return sign + val;
    }
  }
};
</script>



<style lang="scss" scoped>
.classifya {
  width: 100%;
  position: relative;
  .img {
    width: 100%;
    height: 12rem;
  }
  img:nth-of-type(2) {
    width: 0.8rem;
    height: 0.8rem;
    position: fixed;
    top: 1.5rem;
    left: 0.3125rem;
  }
  img:nth-of-type(3) {
    width: 0.8rem;
    height: 0.8rem;
    position: fixed;
    top: 1.5rem;
    right: 1.3rem;
  }
  img:nth-of-type(4) {
    width: 0.8rem;
    height: 0.8rem;
    position: fixed;
    top: 1.5rem;
    right: 0.3125rem;
  }
  img:nth-of-type(5) {
    width: 0.8rem;
    height: 0.8rem;
    position: fixed;
    bottom: 0.4rem;
    right: 0.3125rem;
  }
  img:nth-of-type(6) {
    height: 8rem;
    width: 100%;
  }
}
.goodsbox {
  width: 100%;
  background: rgb(214, 213, 213);
  ul {
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 0.375rem;
    flex-wrap: wrap;
    li {
      width: 43%;
      background: white;
      margin-left: 0.3125rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0.3rem;
      img {
        width: 3rem;
        height: 3rem;
      }
      p:nth-of-type(1) {
        font-size: 0.28rem;
        color: black;
        margin-top: 0.125rem;
      }
      p:nth-of-type(2) {
        font-size: 0.28rem;
        color: #aa0c0c;
        margin-top: 0.1875rem;
      }
      p:nth-of-type(3) {
        font-size: 0.24rem;
        color: black;
        margin-top: 0.1875rem;
        width: 2rem;
        height: 0.6rem;
        border-radius: 0.625rem;
        background: yellow;
        line-height: 0.6rem;
        text-align: center;
        margin-bottom: 0.1875rem;
      }
    }
  }
}
.iconfont{
  font-size:.6rem;
  position: fixed;
  top:0.1875rem;
  color:black;
}
</style>