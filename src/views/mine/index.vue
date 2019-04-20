<template>
  <div id="mine">
    <!--my area-->
    <div class="pic">
      <div class="mine-top">
        <img src="../../assets/nologin.png" alt>
        <img style="display:none" src="../../assets/login.png" alt>
        <p>{{nologin}}</p>
      </div>
      <div class="mine-bottom">
        <div class="left">
          <span>{{money}}</span>
          <span>账户余额</span>
          <p>
            <i class="iconfont">&#xe634;</i>
            充值立送现金哦~
          </p>
        </div>
        <div class="right">
          <span>{{tickets}}</span>
          <span>优惠券</span>
          <p>
            马上充值
            <i class="iconfont">></i>
          </p>
        </div>
      </div>
    </div>
    <!--this area for mine order-->
    <div class="mineOrder">
      <a href="http://wmall.wochu.cn/h5/user/myOrders.html?id=1">
        <i class="iconfont icon-gerenzhongxindingdandaifukuan"></i>
        <span>待付款</span>
      </a>
      <a href="http://wmall.wochu.cn/h5/user/myOrders.html?id=2">
        <i class="iconfont icon-tubiaolunkuo-"></i>
        <span>待收货</span>
      </a>
      <a href="http://wmall.wochu.cn/h5/user/myOrders.html?id=3">
        <i class="iconfont icon-daipingjiaicon"></i>
        <span>待评价</span>
      </a>
      <a href="http://wmall.wochu.cn/h5/historyget/facebackGuide.html">
        <i class="iconfont icon-shouhoufuwu"></i>
        <span>退货/售后</span>
      </a>
      <a href="http://wmall.wochu.cn/h5/user/myOrders.html?id=0">
        <i class="iconfont icon-wodedingdan"></i>
        <span class="order">我的订单</span>
      </a>
    </div>
    <!--this area for actives-->
    <div class="mineAcives">
      <div class="active">
        <div>
          <a href="http://wmall.wochu.cn/h5/tg/myGroup.html">
            <img src="../../assets/m1.png" alt>
            <span>我的团购</span>
          </a>
        </div>
        <div>
          <a href="http://wmall.wochu.cn/h5/address/myAddress.html">
            <img src="../../assets/m2.png" alt>
            <span>收货地址</span>
          </a>
        </div>
        <div>
          <a href="http://wmall.wochu.cn/h5/personal/myfavorite.html">
            <img src="../../assets/m3.png" alt>
            <span>我的收藏</span>
          </a>
        </div>
        <div>
          <a href="http://wmall.wochu.cn/h5/setUp/aboutUsSetup.html">
            <img src="../../assets/m4.png" alt>
            <span>关于我厨</span>
          </a>
        </div>
      </div>
        <div class="active">
        <div>
          <a href="http://wmall.wochu.cn/h5/personal/help.html">
            <img src="../../assets/m5.png" alt>
            <span>帮助中心</span>
          </a>
        </div>
        <div>
          <a href="http://wmall.wochu.cn/h5/personal/yjfk.html">
            <img src="../../assets/m6.png" alt>
            <span>意见反馈</span>
          </a>
        </div>
        <div>
          <a href="http://wmall.wochu.cn/h5/setUp/setUp.html">
            <img src="../../assets/m7.png" alt>
            <span>设置中心</span>
          </a>
        </div>
        <div>
          <a href="http://wmall.wochu.cn/h5/setUp/aboutUsSetup.html">
            <img src="../../assets/m8.png" alt>
            <span>客服电话</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nologin: "未登录",
      login: "11111111111",
      money: 0,
      tickets: 2
    };
  }
};
</script>


<style lang="scss" scoped>
#mine {
  .pic {
    width: 100%;
    height: 4.55rem;
    background: url("../../assets/mine.jpg");
    .mine-top {
      position: fixed;
      width: 100%;
      top: 0.78rem;
      height: 1.86rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-size: 0.26rem;
      p {
        margin-top: 0.4rem;
      }
    }
    .mine-bottom {
      width: 7.02rem;
      background: #ffffff;
      height: 2.56rem;
      position: fixed;
      top: 2.94rem;
      left: 3%;
      border-radius: 0.24rem;
      display: flex;
      align-items: center;
      font-size: 0.3rem;
      padding-top: 0.4rem;
      box-shadow: 1px -1px 20px rgba(34, 34, 34, 0.3);
      .left {
        -background: pink;
        width: 3.5rem;
        border-left: 0.02rem solid #726f6f;
        height: 0.9rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span:nth-child(1) {
          font-size: 0.36rem;
          color: #000;
        }
        p {
          width: 100%;
          position: relative;
          height: 0.86rem;
          line-height: 0.86rem;
          margin-top: 0.4rem;
          background: #428b0e;
          color: #fff;
          font-size: 0.28rem;
          border-bottom-left-radius: 0.24rem;
          text-align: center;
        }
      }
      .right {
        width: 3.5rem;
        height: 0.9rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span:nth-child(1) {
          font-size: 0.36rem;
          color: #000;
        }
        p {
          width: 100%;
          position: relative;
          height: 0.86rem;
          line-height: 0.86rem;
          margin-top: 0.4rem;
          background: #428b0e;
          color: #fff;
          font-size: 0.28rem;
          border-bottom-right-radius: 0.24rem;
          text-align: center;
        }
      }
      .iconfont {
        font-size: 0.35rem;
        margin: 0 0.15rem;
      }
    }
  }
  .mineOrder {
    width: 100%;
    height: 1.78rem;
    background: #fff;
    position: fixed;
    top: 5.8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #999696;
      height: 100%;
      i {
        color: #428b0e;
        font-size: 0.5rem;
        margin-bottom: 0.2rem;
      }
      .order {
        color: #000 !important;
      }
    }
  }
  .mineAcives {
    position: fixed;
    top: 7.6rem;
    background:#fff;
    width: 100%;
    margin-top: .2rem;
    .active{
      height: 1.68rem;
      display: flex;
      justify-content: space-around;
       align-items: center;
       border-bottom: .01rem solid #999696;
      div a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #999696;
        img{
          margin-bottom: .2rem;
          width:.6rem;
          height:.6rem;
        }
      }
    }
  }
}
</style>
