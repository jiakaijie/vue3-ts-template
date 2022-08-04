import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
