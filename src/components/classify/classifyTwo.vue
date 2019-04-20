<template>
  <div id="ClassifyTwo">
    <div class="left">
      <ul class="left-list">
        <router-link v-for="item in arr" tag="li" :to="item.to">{{item.text}}</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "classifyTwo",
  data() {
    return {
      arr: [
        {
          text: "推荐",
          to: "/classify/one"
        },
        {
          text: "我厨优选",
          to: "/classify/two"
        },
        {
          text: "餐馆名菜",
          to: "/classify/three"
        },
        {
          text: "全部净菜",
          to: "/classify/four"
        },
        {
          text: "儿童专区",
          to: "/classify/five"
        },
        {
          text: "蔬菜",
          to: "/classify/six"
        },
        {
          text: "水果",
          to: "/classify/seven"
        },
        {
          text: "肉禽蛋",
          to: "/classify/eight"
        },
        {
          text: "水产海鲜",
          to: "/classify/nine"
        },
        {
          text: "乳饮西点",
          to: "/classify/ten"
        },
        {
          text: "点心速食",
          to: "/classify/eleven"
        },
        {
          text: "粮油副食",
          to: "/classify/twelve"
        }
      ]
    };
  }
};
</script>


<style>
#ClassifyTwo {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0.6rem;
}
.left {
  width: 25%;
  border-right: 1px solid rgb(187, 184, 184);
  position: fixed;
  overflow: auto;
  height: 100%;
}
.left-list {
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
}
.left-list li {
  text-align: center;
  width: 100%;
  height: 0.6rem;
  color: rgb(97, 95, 95);
  font-size: 0.28rem;
  margin-top: 0.5rem;
  line-height: 0.6rem;
}
.left-list > .router-link-active {
  color: #6eb042;
  font-size: 0.3rem;
  border-left: 0.06rem solid #6eb042;
}
</style>