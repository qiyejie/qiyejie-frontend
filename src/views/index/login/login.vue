<template>
  <div class="login">
    <div>
      <image
        class="login-logo"
        src="../../static/logo/logo.png"
        mode="aspectFit"
      ></image>
    </div>
    <div class="login-form">
      <div class="cu-form-group">
        <div class="title">邮箱</div>
        <input placeholder="请输入注册邮箱账号" name="input" v-model="email" />
      </div>
      <div class="cu-form-group">
        <div class="title">密码</div>
        <input
          placeholder="请输入密码"
          name="input"
          password
          v-model="password"
        />
      </div>
      <button class="bg-gradual-blue login-button" @click="login">登录</button>
      <div class="login-button">
        <span class="left">忘记密码</span>
        |
        <span class="right" @click="toRegister">注册账号</span>
      </div>
    </div>
  </div>
</template>

<script>
import { userLogin } from '@/api'

export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password
      }
      userLogin(data).then(res =>
      console.log(res)
      )
    },
    toRegister() {
      uni.navigateTo({
        url: '/pages/register/register'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 30px;
  text-align: center;
  &-logo {
    margin-top: 20px;
    width: 40%;
  }
  &-button {
    margin-top: 30px;
    .left {
      margin-right: 10px;
    }
    .right {
      margin-left: 10px;
    }
  }
}
</style>