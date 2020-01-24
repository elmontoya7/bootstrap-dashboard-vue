import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '@/views/Dashboard.vue'
import Errors from '@/views/theme/Errors.vue'
import Login from '@/views/auth/Login.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: {name: 'Login'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/errors',
      name: 'Errors',
      component: Errors
    },
    {
      path: '*',
      redirect: '/errors',
    }
  ],
});
