const me = () => import('@/views/me/me.vue')

export default [
  {
    path: '/me',
    name: 'me',
    component: me,
    meta: { 
      title: '我的'
    }
  }
]