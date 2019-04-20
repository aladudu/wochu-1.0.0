<template>
  <div>
    <div class="model">
      <p>搜索历史</p>
      <span v-for="(item,index) in this.$store.state.list">{{item}}</span>
    </div>
    <p class="p" @click="handleDel">清空搜索记录</p>
  </div>
</template>

<script>
export default {
  methods: {
    handleDel(index) {
      this.$store.dispatch("handleActionDel", index);
    }
  }
};
</script>