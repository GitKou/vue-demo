<template>
    <div class="m-register g-row">
        <p class="title">注册详细信息填写</p>
        <p class="subtitle">(所有信息均为必填)</p>
        <form action="" class="m-form" id="regForm" method="post">
            <div class="form-item">
                <div class="u-input">
                    <label for="cpName">企业名称</label>
                    <div class="input-box z-error">
                        <input id="cpName" type="text" placeholder="工商局注册名称">
                        <span class="error"></span>
                    </div>
                </div>
                <div class="u-input">
                    <label for="cpNickname">企业昵称</label>
                    <div class="input-box">
                        <input id="cpNickname" type="text">
                        <span class="error"></span>
                        <p class="tips">提示：简短清晰的品牌露出，如顺丰速运</p>
                    </div>
                </div>
                <div class="u-input">
                    <label for="cpHomepage">官方主页</label>
                    <div class="input-box">
                        <input id="cpHomepage" type="text" placeholder="http://">
                        <span class="error"></span>
                        <p class="tips">提示：请输入完整的网址，如http(s)://www.163.com</p>
                    </div>
                </div>
                <div class="u-input">
                    <label for="cpLogo">企业logo</label>
                    <div class="input-box u-upload">
                        <input readonly type="text" placeholder="http://" filename>
                        <input id="cpLogo" type="file">
                        <span class="upload">上传文件</span>
                        <span class="error"></span>
                        <p class="tips">提示：仅支持jpg、jpeg格式；尺寸204*204像素，背景为白色</p>
                    </div>
                </div>
                <div class="u-input">
                    <label for="cpAddress">企业地址</label>
                    <div class="input-box">
                        <input id="cpAddress" type="text">
                        <span class="error"></span>
                    </div>
                </div>
                <div class="u-input">
                    <label for="cpTel">企业电话</label>
                    <div class="input-box">
                        <input id="cpTel" type="text">
                        <span class="error"></span>
                    </div>
                </div>
                <div class="u-input">
                    <label for="cpLicence">营业执照</label>
                    <div class="input-box u-upload">
                        <input readonly type="text" filename>
                        <input id="cpLicence" type="file">
                        <span class="upload">上传文件</span>
                        <span class="error"></span>
                        <p class="tips">提示：仅支持jpg、jpeg、png、pdf格式</p>
                    </div>
                </div>
                <div class="u-input sp-input">
                    <label for="cpCodeCert">组织机构代码证</label>
                    <div class="input-box u-upload">
                        <input readonly type="text" filename>
                        <input id="cpCodeCert" type="file">
                        <span class="upload">上传文件</span>
                        <span class="error"></span>
                        <p class="tips">提示：仅支持jpg、jpeg、png、pdf格式</p>
                    </div>
                </div>
                <div class="u-input ">
                    <label for="taxRegCert">税务登记证</label>
                    <div class="input-box u-upload">
                        <input readonly type="text" filename>
                        <input id="taxRegCert" type="file">
                        <span class="upload">上传文件</span>
                        <span class="error"></span>
                        <p class="tips">提示：仅支持jpg、jpeg、png、pdf格式</p>
                    </div>
                </div>
            </div>
            <div class="form-item">
                <div class="u-input ">
                    <label for="proposerName">申请人姓名</label>
                    <div class="input-box">
                        <input id="proposerName" type="text">
                        <span class="error"></span>
                    </div>
                </div>
                <div class="u-input ">
                    <label for="proposerTel">申请人手机</label>
                    <div class="input-box">
                        <input id="proposerTel" type="text">
                        <span class="error"></span>
                    </div>
                </div>
            </div>
            <div class="form-submit ">
                <div class="u-checkbox ">
                    <input id="agree" type="checkbox" checked>
                    <label for="agree">我已阅读并同意“<span class=" ">直接登录</span>”，接受该协议</label>
                </div>
                <p class="network z-neterror ">网络连接失败，请检查网络连接后重试</p>
                <input type="submit" value="确认提交 " class="u-submit z-disabled ">
            </div>
        </form>
       <!--  <validator name="validation">
           <form novalidate>
             <div class="username-field">
               <label for="username">username:</label>
               <input id="username" type="text" v-validate:username="['required']">
             </div>
             <div class="comment-field">
               <label for="comment">comment:</label>
               <input id="comment" type="text" v-validate:comment="{ maxlength: 256 }">
             </div>
             <div class="errors">
               <p v-if="$validation.username.required">Required your name.</p>
               <p v-if="$validation.comment.maxlength">Your comment is too long.</p>
             </div>
             <input type="submit" value="send" v-if="$validation.valid">
           </form>
         </validator> -->
    </div>
</template>
<script type="text/javascript">

</script>>
<style>
    /* m-register */

    .m-register {
        padding: 71px 0 0 0;
    }

    .m-register .title {
        font-size: 28px;
        line-height: 1;
        margin: 0 0 30px 0;
    }

    .m-register .subtitle {
        font-size: 18px;
        line-height: 1;
        margin: 0 0 30px 0;
    }


    /*m-form > form-item */

    .form-item {
        font-size: 0;
        text-align: left;
    }

    /*m-form > form-item > u-input */

    .u-input {
        width: 50%;
        display: inline-block;
        font-size: 0;
        box-sizing: border-box;
        margin: 0 0 50px 0;
        position: relative;
    }

    .u-input label,
    .u-input input {
        font-size: 18px;
    }

    .u-input label {
        color: #ccc;
        color: rgba(204, 204, 204, 0.8);
        line-height: 1;
        margin-right: 19px;
        width: 5em;
        text-align: right;
        display: inline-block;
    }


    /*m-form > form-item > u-input > input-box*/

    .input-box {
        display: inline-block;
        position: relative;
        padding: 0 30px 0 0;
    }

    ::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #ccc;
        color: rgba(204, 204, 204, 0.8);
    }

    :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #ccc;
        color: rgba(204, 204, 204, 0.8);
        opacity: 1;
    }

    ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #ccc;
        color: rgba(204, 204, 204, 0.8);
        opacity: 1;
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #ccc;
        color: rgba(204, 204, 204, 0.8);
    }

    .u-input input {
        width: 422px;
        height: 48px;
        font-size: 18px;
        padding: 15px 0 15px 17px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    .sp-input {
        font-size: 18px;
    }

    .sp-input label {
        width: 5em;
        padding-left: 1em;
        vertical-align: middle;
        display: inline-block;
        box-sizing: border-box;
    }

    .input-box .error {
        position: absolute;
        background: url('/assets/error.png');
        width: 20px;
        height: 20px;
        top: 50%;
        right: 0;
        margin: -10px 0 0 10px;
        display: none;
    }

    .z-error .error{
        display: block;
    } 
    .input-box .tips {
        font-size: 16px;
        line-height: 1;
        margin: 5px 0 0 0;
        color: #ccc;
        position: absolute;
    }

    .u-upload input[type="file"] {
        opacity: 0;
        filter: alpha(opacity=0);
        position: absolute;
        top: 0;
        left: 0;
        padding: 0;
        cursor: pointer;
    }

    .u-upload .upload {
        display: inline-block;
        width: 110px;
        height: 26px;
        box-sizing: border-box;
        position: absolute;
        right: 30px;
        top: 0;
        margin: 13px 0 0 0;
        font-size: 18px;
        color: #2a83f2;
        border-left: 1px solid #e5e5e5;
        padding: 0 0 0 19px;
        pointer-events: none;
    }


    /* m-form > form-submit */


    /* m-form > form-submit > .u-checkbox */

    .u-checkbox input {
        display: none;
    }

    .u-checkbox label {
        background: url('/assets/unchecked.png') no-repeat;
        padding-left: 33px;
        color: #333;
    }

    .u-checkbox input[type="checkbox"]:checked + label {
        background: url('/assets/checked.png') no-repeat;
    }

    .u-checkbox .notice {
        color: #2a83f2;
    }

    .form-submit .network {
        color: #ea1b1b;
        margin: 34px 0 0 0;
        font-size: 16px;
        line-height: 1;
        visibility: hidden;
    }

    .form-submit .z-neterror {
        visibility: visible;
    }

    .u-submit {
        color: #2a83f2;
        background-color: #fff;
        width: 200px;
        height: 64px;
        box-sizing: border-box;
        border: 1px solid #2a83f2;
        border-radius: 32px;
        font-size: 26px;
        margin: 9px 0 0 0;
        cursor: pointer;
        text-align: center;
        behavior: url(/PIE.htc);
    }

    .m-form .z-disabled {
        opacity: 0.3;
        cursor: default;
    }

</style>