import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/modules/Modules.vue'),
    beforeEnter: AuthGuard
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/Dashboard.vue'),
    beforeEnter: AuthGuard
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Profile.vue'),
    beforeEnter: AuthGuard
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Account.vue'),
    beforeEnter: AuthGuard
  },
  {
    path: '/share',
    name: 'share',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Share.vue'),
    beforeEnter: AuthGuard
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
