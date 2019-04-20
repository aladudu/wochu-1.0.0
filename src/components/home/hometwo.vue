<template>
  <div class="hometwo">
<swiper :options="swiperOption" ref="mySwiper">
 <!-- slides -->
 <swiper-slide><img src="../../assets/img/swiper1.jpg"></swiper-slide>
 <swiper-slide><img src="../../assets/img/swiper2.jpg"></swiper-slide>
 <swiper-slide><img src="../../assets/img/swiper3.jpg"></swiper-slide>
 <swiper-slide><img src="../../assets/img/swiper4.gif"></swiper-slide>
 <swiper-slide><img src="../../assets/img/swiper5.gif"></swiper-slide>
 <!-- Optional controls -->
 <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
  </div>
</template>

<script>
import"../../utils/css/swiper.min.css"
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'hometwo',
 data() {
   return {
     swiperOption: {
       // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
       notNextTick: true,
       // swiper configs 所有的配置同swiper官方api配置
       autoplay:true,
       loop:true,
       // direction : 'vertical',
      //  effect:"coverflow",
       grabCursor : true,
       setWrapperSize :true,
       // autoHeight: true,
       paginationType:"bullets",
       pagination : '.swiper-pagination',
       paginationClickable :true,
       prevButton:'.swiper-button-prev',
       nextButton:'.swiper-button-next',
       scrollbar:'.swiper-scrollbar',
       mousewheelControl : true,
       observeParents:true,
       // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
       debugger: true,
       //swiper callbacks
       // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
       onTransitionStart(swiper){
         console.log(swiper)
       },
     }
   }
 },
 components: {
 swiper,
 swiperSlide
},
 // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
 computed: {
   swiper() {
     return this.$refs.mySwiper.swiper
   }
 },
 mounted() {
   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
   // console.log('this is current swiper instance object', this.swiper)
  //    this.swiper.slideTo(3, 1000, false)
 }
}
</script>

<style lang="scss" scoped>
.hometwo {
  width: 100%;
  height: 4.25rem;
}
.swiper-slide img {
    width: 100%;
    height: 4.25rem;

  }
</style>