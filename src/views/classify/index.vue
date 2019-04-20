<template>
  <div id="classify">
    <ClassifyOne/>
    <ClassifyTwo/>
    <!-- <classifyThree/> -->
  </div>
</template>

<script>
import ClassifyOne from "@/components/classify/classifyOne.vue"
import ClassifyTwo from "@/components/classify/classifyTwo.vue"
// import classifyThree from "@/components/classify/classifyThree.vue"

export default {
  name:'classify',

  components:{
    ClassifyOne,
    ClassifyTwo,
    // classifyThree
  }
}
</script>



<style lang="scss" scoped>
</style>