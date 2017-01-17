import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from 'store/actions';
import * as getters from 'store/getters';
import cart from 'store/modules/cart';
import products from 'store/modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products
  }
});
