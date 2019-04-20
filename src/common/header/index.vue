<template>
  <div class="header">
    <div class="left">
      <span class="iconfont" @tap="handleChange">&#xe642;</span>
    </div>
    <router-link class="center" tag="div" to="/city">
      <span class="iconfont">&#xe634;</span>
      <div class="adress">{{adress}}</div>
      <span class="iconfont" id = "font">&#xe6bd;</span>
    </router-link>
    <div class="right">{{write}}</div>
  </div>
</template>


<script>
// import "../../../public/icon/iconfont.css"
export default {
  data() {
    return {
      adress: "请填写地址",
      write: "编辑"
    };
  },
  methods: {
    handleChange(){
      this.$router.back();
    }
  }, 
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  background: #ffffff;
  font-size: 0.3rem;
  color: #333;
  width: 100%;
  height: 0.9rem;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  .center {
    width: 4rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .right {
    font-size: 0.26rem;
  }
  span {
    font-size: 0.36rem;
    color: #333;
  }
  #font{
    font-size: 0.24rem;
    color: #333;
  }
}
</style>

