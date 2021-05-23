<template>
  <div class="login">
    <van-image
      class="login-logo"
      src="http://icon.tanyang.asia/logo.png"
      fit="cover"
    ></van-image>
    <van-form @submit="login">
      <van-field
        v-model="email"
        name="邮箱"
        label="邮箱"
        placeholder="请输入注册邮箱账号"
        :rules="[{ required: true, message: '请输入注册邮箱账号!' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请填写密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block class="login-button" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="login-bottom">
      <span class="login-left">忘记密码 | </span>
      <span class="login-right" @click="toRegister">注册账号</span>
    </div>
  </div>
</template>

<script>
import { Button, Image as VanImage, Form, Field } from "vant";
import { userLogin } from "@/api";

export default {
  data: () => ({
    email: "",
    password: "",
  }),
  components: {
    "van-button": Button,
    VanImage,
    "van-form": Form,
    "van-field": Field,
  },
  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password,
      };
      userLogin(data).then((res) => {
        if (!res.code) {
          this.$toast.success(res.data.message);
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    },
    toRegister() {
      this.$router.push("register");
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding: 30px;
  text-align: center;
  &-logo {
    margin: 20px 0;
    width: 40%;
  }
  &-button {
    margin-top: 30px;
    color: #ffffff;
    background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
  }
  &-left {
    color: #b8b8b8;
  }
  &-right {
    color: #b8b8b8;
  }
}
</style>
