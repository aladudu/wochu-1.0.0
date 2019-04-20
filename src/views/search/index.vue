<template>
  <div class="searchbox">
    <div class="search">
      <router-link tag="span" to="/home" class="iconfont" >&#xe642;</router-link>
      <div>
        <span class="iconfont font">&#xe819;</span>
        <input type="text" :value="this.$store.state.inputVal" @input="handlechange($event)">
      </div>
      <p @click="handleAdd">搜索</p>
    </div>
    <div class="hotsearch">
      <p>热门搜索</p>
      <ul>
        <li v-for="item in list">{{item.name}}</li>
      </ul>
    </div>
    <Searchone/>
  </div>
</template>

<script>
import Vuex from "vuex";
import Searchone from "../../components/search/searchone";

export default {
  data() {
    return {
      inputval: ""
    };
  },
  components: {
    Searchone
  },
  //调用mapActions中的方法:
  created() {
    this.getActionsList();
  },

  computed: {
    ...Vuex.mapState({
      list: state => state.search.list
    })
  },
  //接收mutations方法中传递过来的值
  methods: {
    ...Vuex.mapActions({
      getActionsList: "search/getActionsList"
    }),
    handlechange(e) {
      let val = e.target.value;
      this.$store.dispatch("handleActionChange", val);
    },
    handleAdd() {
      this.$store.dispatch("handleActionAdd");
    }
  }
};
</script>

<style lang="scss">
.searchbox {
  width: 100%;
}
.search {
  width: 90%;
  margin: 0 auto;
  height: 0.9rem;
  border-bottom: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .iconfont {
    font-size: 0.5rem;
    color: #999;
    margin-left: 0.1875rem;
  }
  div {
    flex: 1;
    height: 0.6rem;
    background: rgb(233, 227, 227);
    border-radius: 0.1875rem;
    margin-left: 0.3125rem;
    input {
      height: 70%;
      width: 80%;
      background: rgb(233, 227, 227);
      border:0;
      margin-top:-0.3125rem;
      font-size:.24rem;
      line-height: 78%;
      outline: none;
    }
  }
  p {
    color: rgb(43, 42, 42);
    margin-left: 0.3125rem;
    font-size: 0.3rem;
  }
}
.hotsearch {
  width: 90%;
  margin: 0 auto;
  p {
    margin-top: 0.3125rem;
    font-size: 0.3rem;
  }
  ul {
    width: 100%;
    height: 2rem;
    background: rgb(230, 225, 225);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li {
      width: 15%;
      height: 0.6rem;
      background: white;
      margin-left: 0.1875rem;
      line-height: 0.6rem;
      text-align: center;
    }
  }
}
.model {
  width: 90%;
  margin: 0 auto;
  p {
    margin-top: 0.3125rem;
    font-size: 0.3rem;
  }
  span {
    display: block;
    width: 100%;
    height: 0.5rem;
    // border-bottom:1px solid #999;
    margin-top: 0.125rem;
    font-size: 0.24rem;
    text-indent: 0.125rem;
    line-height: 0.5rem;
  }
}
.p {
  font-size: 0.24rem;
  text-align: center;
  margin-top: 0.125rem;
  color: #999;
}
</style>