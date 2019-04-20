<template>
  <div class="city">
    <div class="logo">
      <img src="../../assets/img/loginTop.gif">
      <router-link to="/home" tag="a">
        <img src="../../assets/img/close.png">
      </router-link>
    </div>

    <ul class="ul1">
      <li @click="handletoggle1" ref="cc">短信登录</li>
      <li @click="handletoggle2" ref="dd">密码登录</li>
    </ul>

    <div class="none">
      <div class="messagelogin" ref="aa">
        <ul class="ul2">
          <li>输入手机号</li>
          <li>
            输入验证码
            <span>获取验证码</span>
          </li>
          <li>登录</li>
          <li>
            查看
            <a href="http://wmall.wochu.cn/h5/setUp/serviceProtocol.html">《我厨服务协议及隐私政策》</a>
            <span>免费注册</span>
          </li>
        </ul>
      </div>

      <div class="passwordlogin" ref="bb">
        <ul class="ul2">
          <li>输入手机号</li>
          <li>
            输入密码
            <span>获取验证码</span>
          </li>
          <li>登录</li>
          <li>
            <span>忘记密码</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MessageLogin from "../../components/login/messagelogin";
import PasswordLogin from "../../components/login/passwordlogin";

export default {
  components: {
    MessageLogin,
    PasswordLogin
  },
  methods: {
    handletoggle1() {
      this.$refs.aa.style.display = "block";
      this.$refs.bb.style.display = "none";
      this.$refs.cc.style.color = "#6eb242";
      this.$refs.dd.style.color = "#999";
      this.$refs.cc.style.borderBottom = "2px solid #6eb242";
      this.$refs.dd.style.borderBottom = "0";
    },
    handletoggle2() {
      this.$refs.bb.style.display = "block";
      this.$refs.aa.style.display = "none";
      this.$refs.dd.style.color = "#6eb242";
      this.$refs.cc.style.color = "#999";
      this.$refs.dd.style.borderBottom = "2px solid #6eb242";
      this.$refs.cc.style.borderBottom = "0";
    }
  }
};
</script>


<style lang="scss" scoped>
.city {
  width: 100%;
  height: 100%;
  .logo {
    width: 100%;
    height: 8rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    a {
      img {
        position: absolute;
        top: 0.3125rem;
        right: 0.3125rem;
        width: 0.4rem;
        height: 0.4rem;
      }
    }
  }
  .ul1 {
    list-style: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.2rem;
    justify-content: space-around;
    li {
      font-size: 0.34rem;
      color: #999;
      height: 0.6rem;
      width: 1.6rem;
      text-align: center;
      line-height: 0.6rem;
    }
    li:nth-of-type(1) {
      color: #6eb242;
      border-bottom : 2px solid #6eb242;
    }
  }
}
.messagelogin {
  width: 100%;
  height: 4.75rem;
}
.passwordlogin {
  width: 100%;
  height: 4.75rem;
}
.ul2 {
  width: 80%;
  margin: 0 auto;
  padding-top: 0.3125rem;
  li {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.3rem;
    color: rgb(53, 52, 52);
  }
  li:nth-of-type(1) {
    font-size: 0.34rem;
    font-weight: 900;
    border-bottom: 1px solid #999;
  }
  li:nth-of-type(2) {
    font-size: 0.34rem;
    font-weight: 900;
    margin-top: 0.125rem;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 0.3rem;
      font-weight: 200;
      color: #999;
      width: 1.8rem;
      height: 0.6rem;
      line-height: 0.6rem;
      background: rgb(204, 201, 201);
      display: block;
      text-align: center;
      border-radius: 0.125rem;
      margin-top: 0.1875rem;
    }
  }
  li:nth-of-type(3) {
    font-size: 0.3rem;
    margin-top: 0.125rem;
    color: #fff;
    background: #c3dcb3;
    text-align: center;
    border-radius: 0.125rem;
  }
}
.none {
  width: 100%;
  height: 5rem;
  overflow: hidden;
}
</style>