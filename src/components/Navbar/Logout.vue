<template>
    <ul class="g-login">
        <li>
            Hi~{{ userData.username }}
        </li>
        <li @click="handleLogout"><a href="#" >注销登录</a>
        </li>
        </form>
    </ul>
</template>
<script>
import userService from 'src/services/userService'

export default {
    props: ['userData'],
    methods: {
        handleLogout() {
            userService
                .logout()
                .then(() => {
                    console.info('[LogoutDropdown:XHR] 注销登录，立即清空 $root.userData 的 session')
                     this.$emit('logout');
                })
        }
    }
}
</script>
