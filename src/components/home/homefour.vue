<template>
  <div class="homefour">
    <div class="fastnew">
      <div>
        <img
          src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f58332d2-ad98-4d10-aa96-28d1b8090d37.jpg"
        >
      </div>
      <ul v-for="(item,index) in list[0]" id="animate">
        <li>{{item.posDes}}</li>
        <li>{{item.title}}</li>
        <span class="iconfont">&#xf02aa;</span>
      </ul>
    </div>
    <div class="logo" v-for="(item,index) in list[1]">
      <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
    </div>
    <div class="timelimit">
      <div id="solid"></div>
      <div id="kong"></div>
      <h3>限时特惠</h3>
      <div id="kong"></div>
      <div id="solid"></div>
    </div>
    <div class="goods">
      <router-link class="goodss" v-for="(item,index) in list[2]" tag="div" to="/classifya">
        <img :src="item.imgUrl">
        <div id="top">
          <p class="p1">{{item.goodsName}}</p>
          <p class="p2">{{item.description}}</p>
          <div class="bottom">
            <p class="p3">{{item.price | toSign("￥") }}</p>
            <s>{{item.marketPrice | toSign("￥") }}</s>
            <span class="iconfont">&#xe726;</span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in list[3]">
          <router-link tag="div" to="/classifya">
            <img :src="item.imgUrl">
          </router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>

          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="bb" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="listlogo" v-for="(item,index) in list[4]">
      <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
    </div>
    <div class="listlogo" v-for="(item,index) in list[5]">
      <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
    </div>
    <div class="imglogo">
      <img src="https://img.wochu.cn/upload/046da038-d3a0-4251-8b93-dcabc544a2ac.jpg">
      <div>
        <img src="https://img.wochu.cn/upload/a9abf4fe-170c-4d5e-8e59-ec4a1219e349.jpg">
        <img src="https://img.wochu.cn/upload/a9abf4fe-170c-4d5e-8e59-ec4a1219e349.jpg">
      </div>
    </div>

    <div class="timelimit">
      <div id="solid"></div>
      <div id="kong"></div>
      <h3>限时特惠</h3>
      <div id="kong"></div>
      <div id="solid"></div>
    </div>

    <div class="goods">
      <router-link class="goodss" v-for="(item,index) in list[7]" tag="div" to="/classifya">
        <img :src="item.imgUrl">
        <div id="top">
          <p class="p1">{{item.goodsName}}</p>
          <p class="p2">{{item.description}}</p>
          <div class="bottom">
            <p class="p3">{{item.price | toSign("￥") }}</p>
            <s>{{item.marketPrice | toSign("￥") }}</s>
            <span class="iconfont">&#xe726;</span>
          </div>
        </div>
      </router-link>
    </div>

    <div class="list">
      <ul>
        <li v-for="(item,index) in list[8]">
          <router-link tag="div" to="/classifya">
            <img :src="item.imgUrl">
          </router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>

          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="bb" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="weeknew" v-for="(item,index) in list[9]">
      <img :src="item.imgUrl">
    </div>
    <div class="weeklist">
      <ul>
        <li v-for="(item,index) in list[10]">
          <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>
          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="cc" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="weeknew" v-for="(item,index) in list[11]">
      <img :src="item.imgUrl">
    </div>
    <div class="weeklist">
      <ul>
        <li v-for="(item,index) in list[12]">
          <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>
          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="cc" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="weeknew" v-for="(item,index) in list[13]">
      <img :src="item.imgUrl">
    </div>
    <div class="weeklist">
      <ul>
        <li v-for="(item,index) in list[14]">
          <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>
          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="cc" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="weeknew" v-for="(item,index) in list[15]">
      <img :src="item.imgUrl">
    </div>
    <div class="weeklist">
      <ul>
        <li v-for="(item,index) in list[16]">
          <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>
          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="cc" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="weeknew" v-for="(item,index) in list[17]">
      <img :src="item.imgUrl">
    </div>
    <div class="weeklist">
      <ul>
        <li v-for="(item,index) in list[18]">
          <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>
          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="cc" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="weeknew" v-for="(item,index) in list[19]">
      <img :src="item.imgUrl">
    </div>
    <div class="weeklist">
      <ul>
        <li v-for="(item,index) in list[20]">
          <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>
          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="cc" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="weeknew" v-for="(item,index) in list[21]">
      <img :src="item.imgUrl">
    </div>
    <div class="weeklist">
      <ul>
        <li v-for="(item,index) in list[22]">
          <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>
          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="cc" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="weeknew" v-for="(item,index) in list[23]">
      <img :src="item.imgUrl">
    </div>
    <div class="weeklist">
      <ul>
        <li v-for="(item,index) in list[24]">
          <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>
          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="cc" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="weeknew" v-for="(item,index) in list[25]">
      <img :src="item.imgUrl">
    </div>
    <div class="weeklist">
      <ul>
        <li v-for="(item,index) in list[26]">
          <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>
          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="cc" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="weeknew" v-for="(item,index) in list[27]">
      <img :src="item.imgUrl">
    </div>
    <div class="weeklist">
      <ul>
        <li v-for="(item,index) in list[28]">
          <router-link tag="div" to="/classifya"><img :src="item.imgUrl"></router-link>
          <p>{{item.goodsName}}</p>
          <s>{{item.marketPrice | toSign("￥") }}</s>
          <div>
            <p>{{item.price | toSign("￥") }}</p>
            <span class="iconfont aa" id="cc" @click="handleadd">&#xe726;</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import { Toast } from "mint-ui";

// import {getHome} from "@/api/api.js"
export default {
  //调用mapActions中的方法：
  created() {
    this.getActionsList();
  },

  computed: {
    ...Vuex.mapState({
      list: state => state.home.list
    })
  },
  //接收mutations方法中传递过来的值
  methods: {
    ...Vuex.mapActions({
      getActionsList: "home/getActionsList"
    }),
    handleadd() {
      Toast({
        message: "添加成功",
        iconClass: "iconfont icon-guanzhu1",
        duration: 1500
      });
    }
  },
  filters: {
    toSign(val, sign) {
      return sign + val;
    }
  }
};
</script>

<style lang="scss" scoped>
.homefour {
  width: 100%;
}
.fastnew {
  width: 100%;
  display: flex;
  align-items: center;
  div {
    width: 1.54rem;
    height: 0.64rem;
    border-right: 1px solid #8d8b8b;
    margin-left: 0.3125rem;
    display: flex;
    align-items: center;
    img {
      width: 0.84rem;
    }
  }
  ul {
    margin-left: 0.525rem;
    height: 1.1rem;
    width: 88%;
    border-bottom: 1px solid #8d8b8b;
    position: relative;
    overflow: hidden;
    margin-left: 0;
    li {
      font-size: 0.26rem;
      height: 1.1rem;
      margin-top: 0.4rem;
      margin-left: 0.625rem;
      width: 100%;
    }
  }
  ul:nth-of-type(2) {
    display: none;
  }
  span {
    font-size: 0.4rem;
    margin-right: 0.3125rem;
    position: absolute;
    top: 0.4rem;
    right: 0.2125rem;
  }
}
.logo {
  width: 100%;
  height: 3.3rem;
  border-bottom: 2rem solid #e9e8e8;
  img {
    width: 100%;
    height: 3rem;
  }
}
.timelimit {
  width: 100%;
  height: 0.9rem;
  display: flex;
  border-bottom: 1px solid #c4c2c2;
  align-items: center;
  justify-content: center;
  #solid {
    width: 1.7rem;
    height: 0.4rem;
    border-bottom: 1px solid black;
    margin-top: -0.3rem;
  }
  #kong {
    width: 0.3rem;
    height: 100%;
  }
}
.goods {
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #c4c2c2;
  .goodss {
    width: 98%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    img {
      width: 2.6rem;
      height: 2.6rem;
    }
  }
}
#top {
  margin-left: 0.1875rem;
}
.p1 {
  font-size: 0.4rem;
  font-weight: 900;
  color: #666;
  margin-top: 0.3125rem;
}
.p2 {
  width: 4.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.24rem;
  color: #666;
  margin-top: 0.3125rem;
}
.bottom {
  display: flex;
  margin-top: 0.3125rem;
}
.aa {
  margin-left: 1.25rem;
  font-size: 0.65rem;
  font-weight: 200;
  color: rgb(108, 163, 108);
  margin-top: -0.1rem;
}
.p3 {
  color: #ff5918;
  font-size: 0.4rem;
}
s {
  color: #666;
  margin-left: 0.1875rem;
}
.list {
  width: 100%;
  height: 4rem;
  padding-left: 0.3125rem;
  padding-top: 0.3125rem;
  ul {
    list-style: none;
    display: flex;
    overflow: auto;
    flex-shrink: 1;
    flex-wrap: nowrap;
    li {
      margin-left: 0.4rem;
      img {
        width: 1.8rem;
        height: 1.8rem;
        margin-left: -0.3125rem;
      }
      p {
        font-size: 0.24rem;
        color: #666;
        margin-top: 0.1875rem;
        width: 1.2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      s {
        font-size: 0.2rem;
        color: rgb(158, 157, 157);
        margin-top: 0.1875rem;
      }
      div {
        display: flex;
        p {
          font-size: 0.28rem;
          color: rgb(24, 22, 22);
        }
      }
    }
  }
}
#bb {
  margin-left: -0.1375rem;
  font-size: 0.6rem;
}
#cc {
  margin-left: 0.1375rem;
  font-size: 0.6rem;
}
.listlogo {
  width: 100%;
  height: 3rem;
  border-bottom: 2px solid rgb(226, 220, 220);
  img {
    width: 100%;
    height: 100%;
  }
}
.imglogo {
  width: 100%;
  height: 5rem;
  background: #f4f4f4;
  padding: 0.1875rem;
  display: flex;
  img {
    height: 100%;
    width: 3.4rem;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 0.125rem;
    img {
      width: 3.4rem;
      height: 2.3rem;
    }
  }
}
.weeknew {
  width: 100%;
  height: 3rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.weeklist {
  width: 100%;
  height: 7rem;
  padding-left: 0.3125rem;
  padding-top: 0.3125rem;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      margin-left: 0.1875rem;
      width: 30%;
      img {
        width: 1.8rem;
        height: 1.8rem;
      }
      p {
        font-size: 0.24rem;
        color: #666;
        margin-top: 0.1875rem;
        width: 1.2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      s {
        font-size: 0.2rem;
        color: rgb(158, 157, 157);
        margin-top: 0.1875rem;
      }
      div {
        display: flex;
        p {
          font-size: 0.28rem;
          color: rgb(24, 22, 22);
        }
      }
    }
  }
}
// #animate{
//   li{
//     width:70%;
//   }
// }
</style>