<template>
  <div class="recommended-container">
    <div class="r-tab">
      <div class="r-tab_item" v-for="tab in tabList" :key="tab.value">
        <img src="@/assets/recommended/ranking.png" alt="" />
        <div>排行</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImgFile } from "@/utils";
interface tabs {
  value: number;
  label: string;
}
getImgFile("recommended");
const tabList: Array<tabs> = [
  {
    value: 0,
    label: "排行",
  },
  {
    value: 1,
    label: "榜单",
  },
  {
    value: 2,
    label: "打卡",
  },
  {
    value: 3,
    label: "活动",
  },
  {
    value: 4,
    label: "专题",
  },
];
</script>

<style scoped lang="scss">
.recommended-container {
  height: 100%;
  padding: 10px 32px;
  .r-tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .r-tab_item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      div {
        width: 100%;
        color: rgba(0, 0, 0, 0.9);
        font-size: 13px;
        text-align: center;
        margin-top: 10px;
      }
      img {
        width: 30px;
        height: 26px;
      }
    }
  }
}
</style>
