<template>
  <div class="register">
    <div class="register-title">
      欢迎注册企业捷
      <van-image
      class="register-logo"
      src="http://icon.tanyang.asia/logo.png"
      fit="cover"
    ></van-image>
    </div>
    <van-form @submit="submit">
      <van-field
        v-model="email"
        name="邮箱"
        label="邮箱"
        placeholder="请输入邮箱账号注册"
        :rules="[{ required: true, message: '请输入邮箱账号注册!' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请填写密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="confirm_password"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="请确认密码"
        :rules="[{ validator,required: true, message: '请确认密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block class="register-button" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Button, Image as VanImage, Form, Field } from "vant";
import { userRegister } from '@/api'

export default {
  data: () => ({
    email: '',
    password: '',
    confirm_password: ''
  }),
  components: {
    "van-button": Button,
    VanImage,
    'van-form':Form,
    "van-field": Field,
  },
  methods: {
    validator() {
      if (!(this.password === this.confirm_password)) {
        this.$toast.fail('两次密码输入不一致')
        return false
      } else return true
    },
    submit() {
      if (!this.validator()) return
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
    padding: 10px;
  }
  &-logo {
    width: 40px;
    height: 40px;
  }
  &-button {
    margin-top: 30px;
    color: #ffffff;
    background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
  }
}
</style>
