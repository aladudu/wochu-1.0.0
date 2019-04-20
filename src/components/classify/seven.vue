<template>
  <div id="classifyThree">
    <router-view></router-view>
 <div id="ClassifyTwoRightTwo">
      <router-link v-for="(item,index) in list[20]" tag="div" to="/classifya">
        <img :src="item.imgUrl">
        <p>{{item.goodsName}}</p>
      </router-link>
    </div>
     <div id="ClassifyTwoRightTwo">
      <router-link v-for="(item,index) in list[22]" tag="div" to="/classifya">
        <img :src="item.imgUrl">
        <p>{{item.goodsName}}</p>
      </router-link>
    </div>
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
   position: fixed;
  top:1rem;
  right: 0;
}
#ClassifyTwoRightTwo {
  width: 100%;
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
