import '@babel/polyfill'
import 'mutationobserver-shim'
/* eslint-disable */
import Vue from 'vue';
import './plugins/bootstrap-vue'
import ShardsVue from 'shards-vue';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

import '@/assets/scss/theme.scss'

import FeatherWrapper from 'vue-feather-icons-wrapper'
Vue.use(FeatherWrapper)

// Core
import App from './App.vue';
import router from './router';

import Config from '@/dashboard.config.js'
Vue.use({
  install(Vue, options) {
    Vue.mixin({
      data () {
        return {
          Config: Config
        }
      }
    })
  }
})

ShardsVue.install(Vue);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
