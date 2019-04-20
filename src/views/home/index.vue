<template>
  <div class="home">
    <Loading v-if="isLoading"/>
    <BScroll v-else>
      <div class = "content">
      <HomeOne/>
      <HomeTwo/>
      <HomeThree/>
      <HomeFour/>
      </div>
    </BScroll>
  </div>
</template>

<script>
import HomeOne from "../../components/home/homeone.vue";
import HomeTwo from "../../components/home/hometwo.vue";
import HomeThree from "../../components/home/homethree.vue";
import HomeFour from "../../components/home/homefour.vue";

export default {
  name: "home",
  components: {
    HomeOne,
    HomeTwo,
    HomeThree,
    HomeFour
  },
  data(){
    return{
       isLoading:true
    }
  },
  mounted() {
    setTimeout(()=>{
      this.isLoading=false;
    },1500)
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 1rem;
}
// .content{
//   padding-bottom: 1rem;
// }
</style>
