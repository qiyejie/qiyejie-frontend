const collaboration = () => import('@/views/collaboration/collaboration.vue')
const todo = () => import('@/views/collaboration/todo/edit.vue')

export default [
  {
    path: '/collaboration',
    name: 'collaboration',
    component: collaboration,
    meta: { 
      title: '协作'
    }
  },
  {
    path: '/collabration/todo/edit',
    name: 'todo',
    component: todo,
    meta: { 
      title: '代办'
    }
  }
]