<template>
  <div class="recommended-container">
    <div class="r-tab p-l-32">
      <div
        class="r-tab_item"
        v-for="tab in tabList"
        :key="tab.value"
        v-dev-tips
      >
        <img :src="tab.img" alt="" />
        <div>{{ tab.label }}</div>
      </div>
    </div>
    <div class="container">
      <div class="title p-l-32">推荐作品</div>
      <div class="tips p-l-32">根据您浏览的《点线面的几何构成》为您推荐</div>
      <div class="slider-container p-l-32">
        <div class="slider">
          <div class="slider-item" v-for="item in [1, 2, 3]">
            <img
              src="https://pic2.zhimg.com/v2-3be05963f5f3753a8cb75b6692154d4a_1440w.jpg?source=172ae18b"
              alt=""
            />
            <div class="text-title">年度杂记|2018设计作品选集</div>
          </div>
        </div>
      </div>
      <div class="knowledge p-l-32">
        <div class="info">
          <div class="knowledge-title">10000知识点</div>
          <div class="tips">每天一个知识点，每天 <br />进步一点点</div>
          <div class="btn" v-dev-tips>去学习</div>
        </div>
      </div>
      <div class="title p-l-32">推荐设计师</div>
      <div class="tips p-l-32">根据您最近关注的飞屋瑞、莫小贱为您推荐</div>
      <div class="slider-container people">
        <div class="slider">
          <div class="people-item" v-for="item in [1, 2, 3]">
            <div class="people-info">
              <img
                src="https://pic2.zhimg.com/v2-3be05963f5f3753a8cb75b6692154d4a_1440w.jpg?source=172ae18b"
                alt=""
              />
              <div class="name">陈天芋</div>
              <div class="tag">UI设计师 南京</div>
              <div class="recommended-num">12首推</div>
              <img :src="imgList['add']" alt="" class="btn" v-dev-tips />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImgFile } from "@/utils";
interface tabs {
  value: number;
  label: string;
  img: string;
}
const imgList: any = getImgFile(
  import.meta.globEager("@/assets/recommended/*.png")
);
const tabList: Array<tabs> = [
  {
    value: 0,
    img: imgList["ranking"],
    label: "排行",
  },
  {
    value: 1,
    img: imgList["list"],
    label: "榜单",
  },
  {
    value: 2,
    img: imgList["location"],
    label: "打卡",
  },
  {
    value: 3,
    img: imgList["activity"],
    label: "活动",
  },
  {
    value: 4,
    img: imgList["project"],
    label: "专题",
  },
];
</script>

<style scoped lang="scss">
$padding-left: 16px;
.p-l-32 {
  padding:0 $padding-left;
}
.recommended-container {
  height: calc(100vh - 210px);
  padding: 10px 0 10px 0;
  .container {
    height: 100%;
    overflow: auto;
  }
  .r-tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    z-index: 4;
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
        width: 26px;
        height: 30px;
      }
    }
  }
  .title {
    margin-top: 18px;
    font-size: 22px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);
    line-height: 31px;
  }
  .tips {
    font-size: 11px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: rgba(0, 0, 0, 0.6);
    line-height: 15px;
  }
  .slider-container {
    // width: 100%;
    height: 164px;
    margin: 10px 0;
    white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
    .slider {
      height: 100%;
      overflow-x: auto;
      .slider-item {
        display: inline-block;
        width: 221px;
        height: 100%;
        margin-right: 10px;
        img {
          width: 100%;
          height: 80%;
          border-radius: 5px;
        }
        .text-title {
          text-align: center;
          font-size: 15px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: bold;
          color: rgba(0, 0, 0, 0.9);
          line-height: 21px;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .people {
    height: 182px;
    white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
    .people-item {
      display: inline-block;
      width: 127px;
      height: 73%;
      background: #ffffff;
      box-shadow: 0px 2px 14px 0px rgba(0, 7, 50, 0.1);
      border-radius: 6px;
      margin: 10px 0 10px 32px;
      padding: 14px 0;
      .people-info {
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: center;
        img {
          width: 44px;
          height: 44px;
          display: block;
          border-radius: 50%;
          margin: 0 auto;
        }
        div {
          width: 100%;
          text-align: center;
          &.name {
            font-size: 16px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: bold;
            color: rgba(0, 0, 0, 0.8);
            line-height: 23px;
            margin: 3px 0;
          }
          &.tag {
            font-size: 12px;
          }
          &.recommended-num {
            font-size: 12px;
            width: 50px;
            height: 18px;
            margin: 3px auto;
            background: #f0f0f0;
            border-radius: 9px;
          }
        }
        .btn {
          height: 32px;
          width: 32px;
          border-radius: 50%;
        }
      }
    }
  }
  .knowledge {
    height: 200px;
    margin-top: 13px;
    background: url("https://img.shuicaimi.com/c2020/12/09/0l5qdagaza1.jpg")
      no-repeat;
    background-size: 100%, 100%;
    .knowledge-title {
      font-size: 20px;
      font-weight: bold;
      color: #000;
    }
    .tips {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: rgba(0, 0, 0, 0.6);
      line-height: 17px;
    }
    .btn {
      margin-top: 10px;
      text-align: center;
      line-height: 32px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: bold;
      color: #ffffff;
      width: 72px;
      height: 32px;
      background: linear-gradient(149deg, #0f5cff 0%, #009dff 100%);
      border-radius: 19px;
    }
  }
}
</style>
