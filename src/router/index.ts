import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Index.vue')
  },
  // {
  //   path: '/about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About/Index.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
