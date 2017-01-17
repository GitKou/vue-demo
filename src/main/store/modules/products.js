import shop from 'api/shop'
import * as types from 'store/mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts: function ({ commit }) {
    shop.getProducts().then(response => {
      console.log(response);
      if (response.code == 200) {
        commit(types.RECEIVE_PRODUCTS, { products: response.data.result })
      }
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS](state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART](state, { id }) {
    state.all.find(p => p.id === id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
