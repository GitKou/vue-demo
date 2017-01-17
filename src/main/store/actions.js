import * as types from 'store/mutation-types';


export const addToCart = ({ commit }, product) => {
  // 存活大于0，加入购物车
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}
