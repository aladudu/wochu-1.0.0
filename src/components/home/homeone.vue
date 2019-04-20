<template>
  <div class="homecon">
    <img src="../../assets/img/1_04.jpg">
    <router-link tag="div" to="/city">
      <p class='adress'>
        请填写地址
        <span class="iconfont">&#xe6bd;</span>
      </p>
    </router-link>
    <router-link class="img2" tag="div" to="/search">
      <img src="../../assets/img/1_03.jpg">
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.homecon {
  width: 100%;
  height: 0.9rem;
  background: #fff;
  position: fixed;
  // line-height: .9rem;
  padding: 0.24rem;
  z-index: 3;
  top: 0;
  left: 0;
  display: flex;
  align-content: center;
  img:nth-of-type(1) {
    width: 0.8rem;
    height: 0.42rem;
  }
  div {
    margin-left: 0.625rem;
    p {
      font-size: 0.3rem;
      color: #1f6117;
      span {
        font-size: 0.2rem;
        color: #1f6117;
      }
    }
  }
  .img2 {
    width: 0.35rem;
    height: 0.35rem;
    margin-left: 3.4375rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
 
}
</style>