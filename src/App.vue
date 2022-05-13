<script setup lang="ts">
import Tabbar from "@/components/Tabbar/index.vue";
import { onMounted, ref } from "vue";
type tabbarCtx = InstanceType<typeof Tabbar>;

let tabbar = ref<null | tabbarCtx>(null);
onMounted(() => {
  console.log(tabbar.value);
});
</script>

<template>
  <router-view />

  <!-- <van-sticky>
    <Tabbar></Tabbar>
  </van-sticky> -->
</template>

<style></style>
