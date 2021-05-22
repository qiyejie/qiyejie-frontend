<template>
  <div id="app">
    <work />
  </div>
</template>

<script>
import work from './views/work/work.vue'

export default {
  name: 'App',
  components: {
    work
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
