import Vue from 'vue';
import VueRouter from 'vue-router';

import Analysis from 'views/teachingAnalysis/index.vue';
import ClassOne from 'views/teachingAnalysis/class-one.vue';
import ClassTwo from 'views/teachingAnalysis/class-two.vue';
import Register from 'views/register.vue';
import ShoppingCart from 'views/shopping-cart.vue';



Vue.use(VueRouter);

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
const routes = [
  {
    path: '/teaching-analysis',
    component: Analysis,
    children: [{
      path: 'class-one',
      component: ClassOne
    }, {
      path: 'class-two',
      component: ClassTwo
    }]
  },
  { path: '/register', component: Register },
  { path: '/shopping-cart', component: ShoppingCart }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router;

