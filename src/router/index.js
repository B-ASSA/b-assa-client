import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/company',
      name: 'Company',
      component: Home,
    },
    {
      path: '/business',
      name: 'Business',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Home,
    },
  ],
})
