import Vue from 'vue'
import Router from 'vue-router'

// 将每个单独的router文件分离，可以方便多人协作开发
import chat from './modules/chat'
import collaboration from './modules/collaboration'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    ...chat,
    ...collaboration,
  ]
})