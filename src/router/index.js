import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SaboresView from '../views/SaboresView.vue'
import PedidosView from '../views/PedidosView.vue'
import AcercaDeView from '../views/AcercaDeView.vue'
import AdministradorView from '../views/AdministradorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sabores',
    name: 'sabores',
    component: SaboresView
  }
  ,
  {
    path: '/pedidos',
    name: 'pedidos',
    component: PedidosView
  },
  {
    path: '/acercade',
    name: 'acercade',
    component: AcercaDeView
  },
  {
    path: '/administrador',
    name: 'administrador',
    component: AdministradorView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
