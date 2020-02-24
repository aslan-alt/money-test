import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/money'
  },
  {
    path: '/money',
    component: () => import('../views/Money.vue')
  },
  {
    path: '/label',
    component: () => import('../views/Label.vue')
  },
  {
    path: '/statistics',
    component: () => import('../views/Statistics.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
