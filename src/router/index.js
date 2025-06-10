import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
export const Layout = () => import('@/layout/index.vue')
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  // {
  //   path: '/test',
  //   component: () => import('@/views/test/index.vue')
  // },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/readme',
    component: Layout,
    children: [
      {
        path: '/readme',
        component: () => import('@/views/readme/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URI),
  // history: createWebHashHistory(import.meta.env.VITE_APP_BASE_URI),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('path:' + to.path)
  console.log('参数:' + window.location.search)
  next()
})
export default router
