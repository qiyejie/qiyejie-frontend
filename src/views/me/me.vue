<template>
  <div class="me">
    <div class="profile">
      <img class="profile-avatar" src="http://icon.tanyang.asia/t01.jpeg" />
      <div class="profile-right">
        <div class="nickname">张飒</div>
        <div class="id">ID:23432423</div>
        <div class="company">阿里巴巴集团</div>
      </div>
    </div>
    <div class="me-list">
      <van-cell title="收藏" icon="star-o" is-link/>
      <van-cell title="发现" icon="apps-o" is-link/>
      <van-cell title="设置" icon="setting-o" is-link/>
    </div>
  </div>
</template>

<script>
import { Cell  } from "vant";

export default {
  data() {
    return {};
  },
  components: {
    'van-cell':Cell
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.me {
  .profile {
    display: flex;
    height: 100px;
    background: #ffffff;
    margin-top: 15px;
    padding: 20px;
    border-radius: 10px;
    &-avatar {
      border-radius: 10px;
      width: 60px;
      height: 60px;
    }
    &-right {
      padding-left: 20px;
      .nickname{
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  &-list {
    margin-top:10px
  }
}
</style>
