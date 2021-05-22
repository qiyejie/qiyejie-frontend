<template>
  <div class="me">
    <van-list @click="toLogin" is-link>去登录</van-list>
  </div>
</template>

<script>
import { Cell } from 'vant';

export default {
  data() {
    return {};
  },
  components: {
    "van-cell": Cell,
  },
  methods: {
    toLogin() {
      this.$route.push('/index/login/login')
    },
  },
};
</script>

<style lang="scss" scoped>
.me {
  position: absolute;
  width: 100%;
  top: var(--status-bar-height);
}
</style>
