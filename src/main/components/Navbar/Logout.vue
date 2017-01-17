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

export default {
    props: ['userData'],
    methods: {
        handleLogout() {
        }
    }
}
</script>
