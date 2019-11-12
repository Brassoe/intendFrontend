import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AuthGuard from './auth-guard'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'sign up',
    component: () => import(/* webpackChunkName: "about" */ '../views/authentication/SignUp.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/authentication/SignIn.vue')
  },
  {
    path: '/modules',
    name: 'modules',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modules.vue'),
    beforeEnter: AuthGuard
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
