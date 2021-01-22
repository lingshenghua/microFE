import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  name: '/base-index',
  path: '/base-index',
  component: () => import('../pages/Base/index.jsx')
}, {
  name: '/base-create',
  path: '/base-create',
  component: () => import('../pages/Base/create.vue')
}]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router