const chat = () => import('@/views/index/chat/chat.vue')

export default [
  {
    path: '/chat',
    name: 'chat',
    component: chat,
    meta: { 
      title: '消息'
    }
  }
]