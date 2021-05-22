const collaboration = () => import('@/views/collaboration/collaboration.vue')

export default [
  {
    path: '/collaboration',
    name: 'collaboration',
    component: collaboration,
    meta: { 
      title: '协作'
    }
  }
]