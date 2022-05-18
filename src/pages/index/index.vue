<template>
  <div class="home-container">
    <!-- top -->
    <div class="home-top">
      <div class="home-tab">
        <div
          :class="{ 'home-tab_item': true, active: active === tab.value }"
          @click="handleTab(tab.value)"
          v-for="tab in tabList"
          :key="tab.value"
        >
          {{ tab.label }}
          <div class="slide-block" v-if="active == tab.value"></div>
        </div>
      </div>
      <van-icon name="search" size="30" class="custom-search" v-dev-tips />
    </div>
    <!-- 推荐  -->
    <transition name="van-fade">
      <div class="container">
        <Recommended v-if="active == 0"></Recommended>
      </div>
    </transition>
  </div>
  <van-sticky>
    <TabBar></TabBar>
  </van-sticky>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Recommended from "./components/recommended.vue";
import TabBar from "@/components/Tabbar/index.vue";
type tabBarCtx = InstanceType<typeof TabBar>;
let active = ref(0);

let tabBar = ref<null | tabBarCtx>(null);
onMounted(() => {
  console.log(tabBar.value);
});
const tabList = [
  {
    value: 0,
    label: "推荐",
  },
  {
    value: 1,
    label: "关注",
  },
  {
    value: 2,
    label: "探索",
  },
];
function handleTab(index: number) {
  active.value = index;
}
</script>

<style scoped lang="scss">
.home-container {
  height: calc(100vh - 56px);
  background: linear-gradient(
    180deg,
    #ffefef 0%,
    #fafcff 38%,
    #ffffff 66%,
    #ffffff 100%
  );
  .container {
    height: 90%;
    overflow: auto;
  }
  .home-top {
    padding: 10px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .home-tab {
      flex: 10%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .home-tab_item {
        color: rgba(0, 0, 0, 0.6);
        font-size: 15px;
        // padding: 0 10px;
        line-height: 30px;
        // animation: auto-font 1s;

        .slide-block {
          width: 16px;
          height: 4px;
          background: #191919;
          border-radius: 2px;
          margin: 0 auto 0 auto;
          animation: slide-block 0.5s;
        }
      }
      .active {
        color: #000;
        font-size: 20px;
        font-weight: bold;
        // border:;
      }
    }
    .custom-search {
      flex: 1;
      text-align: right;
    }
  }
}

@keyframes slide-block {
  0% {
    width: 0;
  }
  100% {
    width: 16px;
  }
}
@keyframes auto-font {
  0% {
    font-size: 15px;
  }
  100% {
    font-size: 20px;
  }
}
</style>
