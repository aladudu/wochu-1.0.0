<template>
  <div id="footer">
    <ul>
      <router-link tag="li" v-for="(item,index) in tabbar" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      tabbar: [
        {
          title: "首页",
          path: "/home",
          icon: "&#xe605;"
        },
        {
          title: "分类",
          path: "/classify",
          icon: "&#xe60b;"
        },
        {
          title: "购物车",
          path: "/shopcar",
          icon: "&#xe6bc;"
        },
        {
          title: "我的",
          path: "/mine",
          icon: "&#xe61c;"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
$color:#5d8640;

#footer{
    width: 100%;
    height: 1rem;
    position: fixed;
    background: #fff;
    left: 0;
    bottom: 0;
    border-top:1px solid #ccc;
    padding-top:.0625rem;
    z-index: 5;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #666;
            font-size: .26rem;
        }
    }
}

#footer>ul>.router-link-active{
    color: $color;
}
#footer>ul>li>span{
    display: block;
    text-align: center;
    padding-top: .05rem;
}
#footer>ul>li>i{
    font-size: .5rem;
    text-align: center;
}



</style>