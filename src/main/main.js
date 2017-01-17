import Vue from 'vue';
import App from './App';
import router from './routers';
import store from './store';
import { currency } from 'filters/currency';

Vue.filter('currency', currency);

const app = new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router: router
}).$mount('#app')

