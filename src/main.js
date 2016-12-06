import Vue from 'vue'
// import Validator from 'vue-validator'
import VueRouter from 'vue-router'
import App from './App'

import Security from './views/security'
import Register from './views/register'

Vue.use(VueRouter)
// Vue.use(Validator)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
const routes = [
    { path: '/security', component: Security },
    { path: '/register', component: Register }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router: router
}).$mount('#app')

console.log(app.$validation)