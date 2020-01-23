import Vue from 'vue';
import Router from 'vue-router';

import Errors from '@/views/theme/Errors.vue'

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
