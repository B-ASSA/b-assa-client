import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
    {
      path: '/company',
      name: 'Company',
      component: Top,
    },
    {
      path: '/business',
      name: 'Business',
      component: Top,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Top,
    },
  ],
})
