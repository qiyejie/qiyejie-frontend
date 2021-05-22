<template>
  <div class="todo">
      <button @click="create">新建</button>
  </div>
</template>

<script>
export default {
    method:{
        create(){
            this.$route.push('/collabration/todo/edit')
        }
    }

}
</script>

<style lang="scss" scoped>
.todo{
    display: flex;
    align-items: center;
    justify-items: center;
}
</style>