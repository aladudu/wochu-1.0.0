<template>
  <div id="goods">
    <div id="goodlist" v-for="(item,index) in goods">
      <img :src="item.icon" alt>
      <div class="goodcon">
        <div class="goodsName">{{item.goodsName}}</div>
        <div class="goodsprice">
          <div class="yuanPrice">￥{{item.marketPrice}}</div>
          <div class="xianPrice">￥{{item.price}}</div>
        </div>
        <div class="add iconfont" @click="add">&#xe726;</div>
      </div>
    </div>
  </div>
</template>


<script>
import Vuex from "vuex";
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  created() {
    this.$store.dispatch("shopcar/actionsShowGoods");
  },
  computed: {
    ...Vuex.mapState({
      goods: state => state.shopcar.goods
    })
  },
  methods: {
    add() {
      Toast({
        message: "添加成功",
        iconClass: "iconfont icon-guanzhu1",
        duration: 1500
      });
    }
  }
};
</script>


<style lang="scss" scoped>
#goodlist {
  width: 2.2554rem;
  margin-left: 0.15rem;
  margin-bottom: 0.2rem;
  background: #ffffff;
  float: left;
  overflow: auto;
  img {
    width: 100%;
    height: 2.26rem;
  }
  .goodcon {
    width: 100%;
    height: 1.66rem;
    padding: 0.1rem;
    .goodsName {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.28rem;
    }
    .yuanPrice {
      text-decoration: line-through;
    }
    .xianPrice {
      color: #f86c15;
      font-size: 0.3rem;
    }
    .goodsprice {
      float: left;
      margin-top: 0.15rem;
    }
    .add {
      float: right;
      font-size: 0.48rem;
      color: rgb(77, 211, 77);
      margin-top: 0.4rem;
    }
  }
}
</style>
