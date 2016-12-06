<template>
    <ul class="g-login">
        <li>
            <input required type="text" class="form-control" placeholder="请输入您的用户名" v-model="username" />
        </li>
        <li><button href="#" @click="handleLogin" :disabled="!username" :class="{dislog: !username}">登录</button>
        </li>
    </ul>
</template>
<script>
import userService from 'src/services/userService'

export default {
    data() {
            return {
                username: '' // v-model 必须设置默认值
            }
    },
    methods: {
        handleLogin() {
            userService
                .login({
                    username: this.username
                })
                .then((userSessData) => {
                    console.info('[LoginForm] 登录成功，立即设置 session 到 $root.userData')
                    this.$emit('login', userSessData);
                })
        }
    }
}
</script>
<style>
.g-login button{
	color: #fff;
	background: transparent;
	font-size: 18px;
	cursor: pointer;
}

.g-login .dislog{
	color: rgba(255, 255, 255, 0.5);
}
</style>