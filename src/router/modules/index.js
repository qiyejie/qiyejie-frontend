const register = () => import('@/views/index/register/register.vue')
const login = () => import('@/views/index/login/login.vue')
const index = () => import('@/views/index/index.vue')

export default [
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: { 
      title: '注册'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { 
      title: '登录'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    meta: { 
      title: '消息'
    }
  }
]