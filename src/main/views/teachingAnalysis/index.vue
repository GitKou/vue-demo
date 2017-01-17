<template>
  <div>
    <router-link to="/teaching-analysis/class-one">班级1</router-link>
    <router-link to="/teaching-analysis/class-two">班级2</router-link>

    <router-view></router-view>
     <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>
<script>
import ProductList from 'components/ProductList.vue';
import Cart from 'components/Cart.vue';

export default {
  components: { ProductList, Cart }
}
</script>>
