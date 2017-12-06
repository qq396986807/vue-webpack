import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Contont from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/content/:id',
      component: Contont
    }
  ]
})
