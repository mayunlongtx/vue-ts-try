<template>
  <div class="interest-container">
    <div class="jump" v-dev-tips>跳过</div>
    <div class="title">选择感兴趣的内容</div>
    <div class="tips">会获得更精准的内容推荐哦</div>
    <div class="tabs">
      <div
        class="tab"
        v-for="item in list.interestList"
        :key="item.id"
        @click="handleClickInterest(item.id)"
      >
        <img :src="item.img" alt="" />
        <div>{{ item.name }}</div>
        <van-icon
          name="checked"
          :style="{ color: item.checked ? '#2D82FF' : '#D8D8D8' }"
          class="check-interest"
        />
      </div>
    </div>
    <!-- 按钮组 -->
    <div class="btns">
      <van-button type="primary" block round v-dev-tips
        >选些感兴趣的内容吧</van-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import One from "@/assets/interest/1.png";
import Two from "@/assets/interest/2.png";
import Three from "@/assets/interest/3.png";
import Four from "@/assets/interest/4.png";
import { reactive } from "vue";

const list = reactive({
  interestList: <any>[],
});
for (let index = 0; index < 4; index++) {
  let img = One;
  switch (index) {
    case 0:
      img = One;
      break;
    case 1:
      img = Two;
      break;
    case 2:
      img = Three;
      break;
    case 3:
      img = Four;
      break;
    default:
      break;
  }
  list.interestList.push({
    id: index,
    name: `新人${index + 1}号`,
    checked: false,
    img: One,
  });
}
function handleClickInterest(id: number | string) {
  list.interestList.forEach((item: any) => {
    if (item.id === id) {
      item.checked = !item.checked;
    }
  });
}
</script>

<style lang="scss" scoped>
$padding-left: 16px;
.interest-container {
  background: #fff;
  height: 100vh;
  .jump {
    padding: 10px $padding-left;
    text-align: right;
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    line-height: 21px;
    letter-spacing: 1px;
  }
  .title {
    margin-top: 14px;
    text-align: center;
    font-size: 22px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    color: #000000;
    line-height: 31px;
    letter-spacing: 1px;
  }
  .tips {
    margin-top: 5px;
    text-align: center;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    line-height: 19px;
    letter-spacing: 1px;
  }
  .tabs {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 22px 40px;
    max-height: calc(100vh - 200px);
    overflow: auto;
    .tab {
      width: calc(100% / 3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        bottom: 35px;
        right: 10px;
        height: 24px;
        width: 24px;
        background: #fff;
        border-radius: 50%;
      }
      .check-interest {
        font-size: 20px;
        position: absolute;
        bottom: 36px;
        right: 13px;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        z-index: 2;
      }
      img {
        width: 77px;
        height: 77px;
        border-radius: 50%;
      }
      div {
        margin: 5px 0;
        text-align: center;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: rgba(0, 0, 0, 0.5);
        line-height: 20px;
        letter-spacing: 1px;
      }
    }
  }
  .btns {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 68px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .van-button {
      width: 90%;
    }
  }
}
</style>
