<template>
  <div id="app">
    <div id="nav">
      <TarberCon v-if="this.$route.meta.tabBarFlag"/>
    </div>
    <router-view/>
  </div>
</template>


<script>
import TarberCon  from"./common/tabber/index.vue"
export default {
  components:{
    TarberCon
  }
}
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
}
#app{
  position: relative;
  background: white;
}
</style>
