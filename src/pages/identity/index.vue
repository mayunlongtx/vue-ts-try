<template>
  <div class="identity-container">
    <div class="title">请选择您的身份</div>
    <div class="sub-title">便于我们为您提供最佳服务</div>
    <div class="module">
      <div class="module-item">
        <div class="radio"><van-icon name="circle" /></div>
        <div class="content">
          <div class="module-title">我是设计达人</div>
          <div class="module-sub-title">创意无限、敢于探索</div>
        </div>
      </div>
    </div>
    <div class="btns">
      <div class="btn-look">随便看看</div>
      <div class="btn-confirm">选好了</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.identity-container {
  height: 100%;
  width: 100%;
  background: #fff;
  .title {
    padding: 77px 0 4px 0;
    text-align: center;
    font-size: 22px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    color: #000000;
    line-height: 31px;
  }
  .sub-title {
    text-align: center;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: rgba(0, 0, 0, 0.6);
    line-height: 19px;
    letter-spacing: 1px;
    margin-bottom: 26px;
  }
  .module {
    height: 73vh;
    width: calc(100% - 32px);
    margin: 0 auto;
    overflow-y: auto;
    .module-item {
      padding: 18px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      //       height: 80px;
      background: linear-gradient(124deg, #fef9ff 0%, #eae7ff 100%);
      border-radius: 6px;
      .radio {
        font-size: 18px;
        margin-right: 20px;
      }
      .content {
        .module-title {
          font-size: 20px;
          font-family: BDZYJT--GB1-0, BDZYJT--GB1;
          font-weight: bold;
          color: rgba(0, 0, 0, 0.8);
          line-height: 23px;
        }
        .module-sub-title {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          color: rgba(0, 0, 0, 0.6);
          line-height: 19px;
          letter-spacing: 1px;
        }
      }
    }
  }
  .btns {
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 32px);
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    .btn-look {
      width: 160px;
      height: 44px;
      background: #ffffff;
      border-radius: 22px;
      border: 1px solid #349bff;
      font-size: 17px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: bold;
      color: #349bff;
      line-height: 44px;
    }
    .btn-confirm {
      width: 160px;
      height: 44px;
      background: #349bff;
      border-radius: 22px;
      font-size: 17px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: bold;
      color: #fff;
      line-height: 44px;
    }
  }
}
</style>
