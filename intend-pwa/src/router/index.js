import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Home from '../views/Home.vue'
import AuthGuard from './auth-guard'


Vue.use(VueRouter)

  let routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/sign-up',
    name: 'sign up',
    component: () => import(/* webpackChunkName: "SignUp" */ '../views/authentication/SignUp.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "SignIn" */ '../views/authentication/SignIn.vue')
  },
  {
    path: '/modules',
    name: 'modules',
    component: () => import(/* webpackChunkName: "Modules" */ '../views/modules/Modules.vue'),
    beforeEnter: AuthGuard
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "Dashboard" */ '../views/dashboard/Dashboard.vue'),
    beforeEnter: AuthGuard
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../views/user/Profile.vue'),
    beforeEnter: AuthGuard
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "Account" */ '../views/user/Account.vue'),
    beforeEnter: AuthGuard
  },
  {
    path: '/share',
    name: 'share',
    component: () => import(/* webpackChunkName: "Share" */ '../views/user/Share.vue'),
    beforeEnter: AuthGuard
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
