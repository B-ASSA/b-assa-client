import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Company from '@/components/pages/Company'
import Business from '@/components/pages/Business'
import Contact from '@/components/pages/Contact'
import Sitemap from '@/components/pages/Sitemap'
import Privacy from '@/components/pages/Privacy'
import Attention from '@/components/pages/Attention'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/company',
    name: 'Company',
    component: Company,
  },
  {
    path: '/business',
    name: 'Business',
    component: Business,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/sitemap',
    name: 'Sitemap',
    component: Sitemap,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
  },
  {
    path: '/attention',
    name: 'Attention',
    component: Attention,
  },
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    } else {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

export default new Router({
  mode: 'history',
  routes,
  scrollBehavior,
})
