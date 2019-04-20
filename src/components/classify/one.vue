<template>
  <div id="classifyThree">
    <div id="classifyTwoRightOne">
      <div class="left-p"></div>
      <p>我厨精选</p>
      <div class="right-p"></div>
    </div>

    <div id="ClassifyTwoRightTwo">
      <router-link v-for="(item,index) in list[10]" tag="div" to="/classifya">
        <img :src="item.imgUrl">
        <p>{{item.goodsName}}</p>
      </router-link>
    </div>

    <div id="classifyTwoRightOne">
      <div class="left-p"></div>
      <p>我厨精选</p>
      <div class="right-p"></div>
    </div>

     <div id="ClassifyTwoRightTwo">
      <router-link v-for="(item,index) in list[12]" tag="div" to="/classifya">
        <img :src="item.imgUrl">
        <p>{{item.goodsName}}</p>
      </router-link>
    </div>

    <div id="classifyTwoRightOne">
      <div class="left-p"></div>
      <p>我厨精选</p>
      <div class="right-p"></div>
    </div>

     <div id="ClassifyTwoRightTwo">
      <router-link v-for="(item,index) in list[14]" tag="div" to="/classifya">
        <img :src="item.imgUrl">
        <p>{{item.goodsName}}</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "classify",
  created() {
    this.getActionsList();
  },
  computed: {
    ...Vuex.mapState({
      list: state => state.home.list
    })
  },
  methods: {
    ...Vuex.mapActions({
      getActionsList: "home/getActionsList"
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
#classifyThree {
  width: 75%;
  position: absolute;
  right: 0;
  margin-top: 0.2rem;
  padding-bottom: 1rem;
}
#classifyTwoRightOne {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
}
#classifyTwoRightOne div {
  width: 0.875rem;
  height: 1rem;
  border-bottom: 1px solid rgb(214, 212, 212);
  /* margin-top:.39rem; */
}
#classifyTwoRightOne p {
  color: rgb(97, 95, 95);
  font-size: 0.3rem;
  margin-top: 0.75rem;
}
.left-p {
  margin-right: 0.1875rem;
}
.right-p {
  margin-left: 0.1875rem;
}

#ClassifyTwoRightTwo {
  width: 100%;
  border-bottom: 0.28rem solid rgb(235, 234, 234);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 0.25rem;
  padding-bottom: 0.625rem;
  box-sizing: border-box;
}

#ClassifyTwoRightTwo div {
  width: 33%;
  display: flex;
  flex-direction: column;
  margin-top: 0.625rem;
  img{
    width:.6rem;
    height:.6rem;
  }
}
#ClassifyTwoRightTwo div p {
  color: rgb(97, 95, 95);
  font-size: 0.24rem;
  margin-top: 0.2rem;
  margin-left: 0.25rem;
  width: 1.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#ClassifyTwoRightTwo div img {
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.4rem;
}
</style>
