<template>
  <div class="shopcar">
    
    <div class="topcontent">
      
    <Header/>

    <!--go to update-->
    
        <div id="toupdate">
          <p>
            <i class="iconfont icon-erji-dingshirenwu"></i>
          </p>
          <p>
            配送时间：
            <span>{{time}}</span>
          </p>
          <p class="update">
            {{update}}
            <span class="go">></span>
          </p>
        </div>
    </div>


        <Loading v-if="isLoading"/>
        <BScroll v-else>
        <!--this area can scroll-->

        
        <div class="shopContent">
          <!--go to change some goods-->
          <div id="tochange">
            <p class="change">
              <i>换购</i>
            </p>
            <p class="detail">
              <span>{{datail}}</span>
            </p>

            <p class="update">
              {{change}}
              <span class="go">></span>
            </p>
          </div>
          
         <Goods/>
          <!--show some good goods-->
          <div id="showgoods">
            <div class="goodstitle">
              <em></em>
              {{showgoods}}
              <i></i>
            </div>
          </div>
          <GoodsList/>
        </div>
        
        </BScroll>
      
    
    <!--commit goods sum price-->
    <div id="sum">
      <div class="content">
        <div>
          <i class="iconfont icon-duigou1"></i>
        </div>
        <div class="sum">
          合计：
          <span>￥{{sum}}</span>
          <i>{{flyfree}}</i>
        </div>
      </div>

      <div class="bottom">
        结算
        <span>{{count}}</span>
      </div>
    </div>
    <!--it is about friget-->
    <div class="btn-coudan">
      {{friget}}
      <p></p>
    </div>
  </div>
</template>

<script>
import Goods from "../../components/good";
import GoodsList from "../../components/showgoods";
import Header from "../../common/header/index";
export default {
  name: "shopcar",
  data() {
    return {
      time: "4/2周二 08:00-11.30",
      update: "去修改",
      datail: "满79元，可换购卡士鲜酪乳，还差19.20元",
      change: "立即换购",
      showgoods: "推荐商品",
      sum: "59.80",
      count: "(2)",
      flyfree: "(不含运费)",
      friget: '"全场满99包邮 点我凑单"',
      isLoading: true
    };
  },
  components: {
    Goods,
    GoodsList,
    Header
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
};
</script>


<style lang="scss" scoped>
$color: #f86c15;
#toupdate,
#tochange {
  height: 1.08rem;
  width: 100%;
  background: #fff;
  border-bottom: 5px solid #e5e5e5;

  display: flex;
  justify-content: space-around;
  align-items: center;
  .iconfont {
    font-size: 0.35rem;
    color: $color;
  }
  p {
    font-size: 0.3rem;
    span {
      color: $color;
      font-weight: 900;
    }
  }
  .update {
    color: #f86c15;
  }
}
#tochange {
  height: 1rem;
  border-bottom: 7px solid #e5e5e5;
  .change {
    width: 0.76rem;
    height: 0.46rem;
    border: 2px solid $color;
    border-radius: 0.08rem;
    i {
      font-size: 0.28rem;
      color: #f86c15;
    }
  }
  .detail {
    width: 4.3rem;
    span {
      font-size: 0.26rem;
      color: #333333;
      font-weight: 200;
    }
  }
}
.shopcar {
  .goodstitle {
    margin: 0.7rem auto 0.3rem;
    width: 4.72rem;
    height: 0.3rem;
    font-size: 0.32rem;
    color: #000000;
    text-align: center;
    line-height: 0.3rem;
    font-weight: bold;
    em {
      display: inline-block;
      width: 0.94rem;
      height: 0.11rem;
      background: url("../../assets/line.png") no-repeat center;
    }
    i {
      display: inline-block;
      width: 0.94rem;
      height: 0.11rem;
      background: url("../../assets/line.png") no-repeat center;
    }
  }
  .shopContent {
    overflow: auto;
    height:max-height;
    
    padding-bottom: 4rem;
    padding-top: 2rem;
  }
}
#toupdate {
  margin-top: 0.9rem;
  position: fixed;
  left: 0;
  top: 0;
}
#sum {
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 1rem;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .content {
    margin-left: 0.3rem;
    height: 100%;
    display: flex;
    .iconfont {
      color: #f86c15;
      font-size: 0.35rem;
    }
    .sum {
      // margin-top:1rem;
      margin-left: 0.2rem;
      font-size: 0.28rem;
      color: #000000;
      span {
        color: #f86c15;
        font-size: 0.4rem;
      }
      i {
        color: #666666;
      }
    }
  }
  .bottom {
    width: 2.3rem;
    height: 100%;
    background: #f86c15;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    font-size: 0.4rem;
  }
}
.btn-coudan {
  height: 0.5rem;
  position: fixed;
  bottom: 2.24rem;
  left: 0.8rem;
  background: #f1c0a3;
  padding: 0 0.1rem;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 0.3rem;
  line-height: 0.5rem;
  margin-left: 0.74rem;
  p {
    position: fixed;
    bottom: 2.13rem;
    width: 0;
    height: 0;
    left: 2.3rem;
    border-left: 0.12rem solid transparent;
    border-right: 0.12rem solid transparent;
    border-top: 0.12rem solid #f1c0a3;
  }
  
}
// .content {
//   padding-bottom: 1rem;
// }
.topcontent{
  position: fixed;
  top: 0;
  width: 100%;
    z-index: 99;
    height: 1.8592rem;
  }
</style>
