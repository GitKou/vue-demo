<template>
    <div class="g-headerwrap">
        <div class="g-header">
            <div class="g-row clearfix">
                <div class="g-logo">
                    <a class="logo-img" href="./index">邮件服务化平台</a>
                </div>
                <div class="g-nav">
                    <ul class="g-tab">
                    	<li><router-link to="/security">安全规范</router-link></li>
                    	<li><router-link to="/register">注册</router-link></li>
                    </ul>
                    <login v-if="!userData" @login="login"></login>
                    <logout v-if="userData" @logout="logout" :userData="userData"></logout>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Login from './Login';
import Logout from './Logout';
import userService from 'src/services/userService'

export default {
	// 绝对私有的组件可以直接包含在父组件目录下
    components: {
        Login,
        Logout
    },
    data() {
        return {
            userData: null
        }
    },
    methods: {
    	login(userSessData) {
    		this.userData = userSessData
    	},
    	logout() {
    		this.userData = null;
    	}
    },
    // 组件创建之初就发送用户是否已登录的请求
    // 组件生命周期请参考 http://cn.vuejs.org/guide/instance.html
    created () {
      console.info('[Navbar:XHR] 检测用户是否已经登录')
      userService.checkLogin()
        .then((userSessData) => {
          if (!userSessData) {
            return console.info('[Navbar] 检测完毕，当前用户尚未登录')
          }

          // 【手动】同步顶级变量与服务
          console.info('[Navbar] 检测完毕，当前用户已经登录，立即设置 session 到 $root.userData')
          this.userData = userSessData
        })
    },
}
</script>

<style>
router-link{
	font-size: 16px;
}
/*header nav bar*/

.g-headerwrap {
    height: 80px;
    position: relative;
    z-index: 1000;
}

.g-header {
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 80px;
    font-size: 18px;
    color: #fff;
    background-color: transparent\9\0;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#c8000000, endColorstr=#c8000000);
}

:root .g-header {
    background-color: rgba(0, 0, 0, 0.8);
    filter: none;
}

.g-header a {
    color: #fff;
}

.g-row {
    width: 1200px;
    margin: 0 auto;
    margin-left: -webkit-calc((100vw - 1200px) / 2);
    margin-left: calc((100vw - 1200px) / 2);
}

.g-logo,
.g-nav {
    display: block;
    height: 80px;
    line-height: 80px;
    font-size: 0;
}

.g-logo {
    float: left;
    line-height: 0;
}

.g-nav {
    overflow: hidden;
    font-size: 0;
    float: right;
}

.logo-img {
    display: inline-block;
    height: 80px;
    width: 273px;
    text-indent: -9999px;
    background: url('/assets/logo.png') center no-repeat;
}

.g-nav ul,
.g-nav li,
.g-tab a {
    display: inline-block;
    box-sizing: border-box;
    height: 80px;
}

.g-nav li {
    margin-left: 35px;
    box-sizing: border-box;
    font-size: 18px;
    vertical-align: top;
}

.g-nav li:first-child {
    margin-left: 0;
}

.g-login {
    float: right;
    margin-left: 135px;
}

.g-login li {
    margin-left: 20px;
}

.g-login .J-reg {
    max-width: 265px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
}

.g-tab a{
    height: 80px;
    color: rgba(255, 255, 255, 0.5);
    border-bottom: 4px solid transparent;
}

.g-tab .active,
.g-tab a:hover {
    color: #fff;
    border-bottom: 4px solid #fff;
}

</style>
