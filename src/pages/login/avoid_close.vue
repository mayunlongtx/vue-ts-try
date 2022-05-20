<template>
  <div class="login-container">
    <div class="avoid-close" @click="handlePath">
      密码登录<van-icon name="arrow" class="arrow" />
    </div>
    <div class="title">欢迎来到柚知设计</div>
    <div class="form-container">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <input name="username" class="hide-input" />
          <input type="password" class="hide-input" />
          <van-field
            v-model="username"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请输入手机号' }]"
          />
        </van-cell-group>
        <div class="btns">
          <div class="btn" native-type="submit">获取验证码</div>
        </div>
        <!-- 注册 -->
        <div class="registered">
          注册即表示接受<span>《版本声明》</span><span>《隐私保护》</span>
        </div>
      </van-form>
    </div>
    <van-divider
      :style="{ color: 'rgba(0, 0, 0, 0.1)', padding: '90px 30px 17px 30px' }"
    >
      <span style="color: #b5b8bc">第三方登录</span>
    </van-divider>
    <div class="icons">
      <div v-dev-tips><van-icon name="qq" /></div>
      <div v-dev-tips><van-icon name="wechat" /></div>
      <div v-dev-tips><van-icon name="weibo" /></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const username = ref("");
const password = ref("");
function handlePath() {
  router.replace("/login");
}
const onSubmit = (values: any) => {
  console.log("submit", values);
};
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  background: #fff;
  .avoid-close {
    padding: 10px 23px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: rgba(0, 0, 0, 0.65);
    line-height: 20px;
    text-align: right;
    .arrow {
      margin-left: 10px;
    }
  }
  .title {
    padding: 70px 30px;
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bold;
    color: #000000;
    line-height: 34px;
  }
  .form-container {
    .van-cell-group,
    .van-cell,
    .van-field__control {
      position: relative;
      overflow: auto;
      background: rgba($color: #000000, $alpha: 0) !important;
    }
    input:-internal-autofill-selected {
      background: rgba($color: #000000, $alpha: 0) !important;
    }
    .van-cell {
      padding: 10px 30px;
    }
    .van-cell-group--inset {
      margin: 0;
    }
    .hide-input {
      position: absolute;
      top: -999px;
    }
    // 忘记密码

    .forgot-password {
      text-align: right;
      padding: 5px 30px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #b5b8bc;
      line-height: 19px;
    }
    // 提交按钮
    .btns {
      position: relative;
      &::before {
        position: absolute;
        bottom: -10px;
        left: 10%;
        content: "";
        width: 84%;
        height: 20px;
        background: linear-gradient(
          90deg,
          #6bf8ff 0%,
          #68fff9 23%,
          #54c8f7 55%,
          #007bff 100%
        );
        border-radius: 23px;
        opacity: 0.8;
        filter: blur(36px);
      }
      .btn {
        width: 84%;
        height: 45px;
        background: linear-gradient(
          90deg,
          #6bf8ff 0%,
          #75fffa 23%,
          #41c8ff 62%,
          #0065ff 100%
        );
        border-radius: 23px;
        text-align: center;
        line-height: 45px;
        color: #fff;
        font-size: 17px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: bold;
        color: #ffffff;
        letter-spacing: 2px;
        text-shadow: -28px 7px 50px #0669ff;
        margin: 114px auto 0 auto;
      }
    }
    // 注册
    .registered {
      width: 78%;
      margin: 35px auto;
      text-align: center;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #77797c;
      line-height: 20px;
      span {
        color: #0d68e3;
      }
    }
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 64px;
    div {
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 50%;
      background: rgba(146, 153, 158, 0.1);
      color: rgba(0, 14, 27, 0.4);
    }
  }
}

input::input-placeholder {
  color: red !important;
}
</style>
<style lang="scss">
.form-container {
  .van-cell::after {
    border: 0 !important;
  }
  .van-field__value {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
