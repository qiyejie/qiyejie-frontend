<template>
<div class="edit">
  <div class="edit-title">
    <van-field
      v-model="titile"
      rows="1"
      autosize
      label="标题"
      type="textarea"
      placeholder="请输入标题"
    />
  </div>
  <div class="edit-content">
    <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="添加描述"
        show-word-limit
    />
  </div>
  <div class="edit-button">
    <van-button type="primary" block @click="create">新建</van-button>
  </div>

</div>

</template>

<script>
  import { Field } from 'vant';
  import { Button } from 'vant';
  import { createToDo } from '@/api';

  export default {
    data() {
      return {
        title: '',
        content:''
      };
    },
    components:{
      'van-field':Field,
      'van-button':Button
    },
    method:{
      create() {
      const data = {
        title: this.title,
        content: this.content
      }
      createToDo(data).then(res =>
      console.log(res)
      )
    }

  }
</script>

<style lang="scss" scoped>
.edit{
    
}
</style>