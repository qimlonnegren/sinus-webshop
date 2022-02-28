import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Attire from '../views/Attire.vue'
import Skateboards from '../views/Skateboards.vue'
import Accessories from '../views/Accessories.vue'
import Wishlist from '../components/Wishlist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products

  },
  {
    path: '/Wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path: '/Attire',
    name: 'Attire',
    component: Attire
  },
  {
    path: '/Skateboards',
    name: 'Skateboards',
    component: Skateboards
  },
  {
    path: '/Accessories',
    name: 'Accessories',
    component: Accessories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
