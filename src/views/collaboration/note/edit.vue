<template>
  <div class="edit">
    <div class="edit-title">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="确定"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>

    <div class="edit-content">
      <van-field
        v-model="content"
        rows="2"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="写点什么..."
        show-word-limit
      />
    </div>

  </div>
</template>

<script>
  import { Field } from 'vant';
  import { NavBar } from 'vant';

  export default {
    data() {
      return {
        content:''
      };
    },
    components:{
      'van-field':Field,
      'van-nav-bar':NavBar
    },
    method:{
      onClickLeft() {
        Toast('返回');
      },
      onClickRight() {
        Toast('确定');
        const data = {
        content: this.content,

      },
    }
  }
</script>

<style>

</style>