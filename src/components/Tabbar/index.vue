<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">发现</van-tabbar-item>
    <van-tabbar-item icon="search">成长</van-tabbar-item>
    <van-tabbar-item icon="friends-o">灵感</van-tabbar-item>
    <van-tabbar-item icon="setting-o">消息</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
export interface tabbarCtx {
  active: number;
}
import { ref } from "vue";
let active = ref(0);
defineExpose({
  active,
});
</script>

<style scoped lang="scss"></style>
