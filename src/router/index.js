import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/pages/index'),
        name: 'Index',
        meta: { title: '证件打印', icon: '' },
      }
    ]
  },
  ]
})
