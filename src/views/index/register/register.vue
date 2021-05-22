<template>
  <div class="register">
    <div class="register-title">
      欢迎注册企业捷
      <image
        class="register-logo"
        src="../../static/logo/logo.png"
        mode="aspectFit"
      ></image>
    </div>
    <div class="register-form">
      <div class="cu-form-group">
        <div class="title">设置邮箱</div>
        <input placeholder="请输入邮箱" name="input" v-model="email" />
      </div>
      <div class="cu-form-group">
        <div class="title">设置密码</div>
        <input
          placeholder="请输入密码"
          name="input"
          password
          v-model="password"
        />
      </div>
      <div class="cu-form-group">
        <div class="title">确认密码</div>
        <input
          placeholder="请再次输入密码"
          name="input"
          password
          v-model="password_second"
        />
      </div>
      <button class="bg-gradual-blue register-form" @click="submit">
        注册
      </button>
    </div>
  </div>
</template>

<script>
import { userRegister } from '@/api'

export default {
  data: () => ({
    email: '',
    password: '',
    password_second: ''
  }),
  components: {
    
  },
  methods: {
    validate() {
      if (!(this.password === this.password_second)) {
        Toast.fail('两次密码输入不一致')
        return false
      } else return true
    },
    submit() {
      if (!this.validate()) return
      const data = {
        email: this.email,
        password: this.password
      }
      userRegister(data).then(res =>
      console.log(res)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  padding: 30px;
  text-align: center;
  &-title {
    font-size: 26px;
    display: flex;
  }
  &-logo {
    width: 40px;
    height: 40px;
  }
  &-form {
    margin-top: 30px;
  }
}
</style>
