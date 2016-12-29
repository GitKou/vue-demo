<template>
  <div class="security g-row clearfix">
    <div class="left">
      <dl class="catalog">
        <dt class="title"><a href="">邮件发送规范</a></dt>
        <dd class="active"><a href="">第一条</a></dd>
        <dd><a href="">第二条</a></dd>
        <dd><a href="">第三条</a></dd>
        <dd><a href="">第四条</a></dd>
        <dd><a href="">第五条</a></dd>
      </dl>
      <dl class="catalog">
        <dt class="title"><a href="">违规惩罚</a></dt>
        <dd><a href="">第一条</a></dd>
        <dd><a href="">第二条</a></dd>
        <dd><a href="">第三条</a></dd>
        <dd><a href="">第四条</a></dd>
      </dl>
      <ul class="catalog">
        <dt class="title"><a href="">术语解释</a></dt>
      </ul>
    </div>
    <div class="right">
      <div class="paragraph">
        <p class="title1">邮件发送规范</p>
        <p class="title2">第一条</p>
        <p class="title3">成员应当使用规范的邮件发送环境，并遵守如下规则：</p>
        <ol class="content">
          <li>企业通过SMTP协议将邮件投递到网易邮箱的MX服务器。</li>
          <li>企业发送邮件的服务器IP地址必须确保属于静态分配的IP地址，并且都已经采取IP反解措施，即企业的每个IP 地址在DNS中必须存在PTR反解记录。</li>
          <li>企业邮件的发件人地址的域名必须采取SPF解析，确保是一封合法邮件，而非第三方伪造邮件，保障企业利益 和网易邮箱用户的读信感受。</li>
          <li>邮件的SMTP投递行为必须符合RFC 2821协议标准，关注投递过程中网易邮箱服务器返回的SMTP错误代码 。对于5xx返回代码视为永久失败，不再尝试；对于4xx返回代码视为临时失败，建议2分钟后再次尝试投递。 </li>
          <li>【建议】企业发送的邮件采用DKIM和DMARC技术，进一步增加防伪造级别。 </li>
          <li>企业的IP地址、发件人邮箱Sender地址、域名Domain地址都必须不在知名RBL组织的黑名单列表上。 </li>
          <li>【建议】邮件的Sender地址和邮件信头From地址保持一致。</li>
        </ol>
      </div>
      <div class="paragraph">
        <p class="title1">邮件发送规范</p>
        <p class="title2">第二条</p>
        <p class="title3">成员应当使用标准的的电子邮件格式和邮件内容，并遵守如下规则：</p>
        <ol class="content">
          <li> 所有邮件遵循RFC 2822协议的格式。</li>
          <li>如果邮件正文包含HTML内容，必须遵循w3.org规范。</li>
          <li> 不得进行任何伪造，隐瞒，混淆邮件来源，邮件内容的行为。</li>
          <li> 邮件标题与邮件内容必须相匹配。</li>
          <li> 带有推广营销性质的邮件必须在邮件标题前加注(AD)字样。 </li>
          <li>信头From地址必须意义明确，容易辨识。确保发送地址可接收用户的回复和系统退信邮件。 </li>
          <li>如有引用外部多媒体内容，必须保证多媒体内容服务器的稳定性，保障邮件内容正常展示，不得影响用户的 邮件浏览体验</li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
	/*******for  security & techSp ********/

	/* header */
	.g-headerwrap + .g-row {
	    margin-top: 60px;
	}


	.g-headerwrap + .g-row{
	    overflow: hidden;
	}

	/*left*/
	.left, .right{
	    padding-bottom: 999px;
	    margin-bottom: -999px;
	}
	.left {
	    float: left;
	    width: 150px;
	    border-right: 1px solid #e5e5e5;
	}


	/*left catalog*/

	.catalog {
	    font-size: 18px;
	    line-height: 1em;
	    text-align: left;
	}

	.catalog + .catalog {
	    margin-top: 80px;
	}

	.catalog dt a{
	    color: #ddd;
	    text-align: left;
	}
	.catalog dt ~ dd {
	    margin-top: 40px;
	    margin-left: 39px;
	}

	.catalog dd a {
	    display: inline-block;
	    padding-left: 10px;
	    vertical-align: middle;
	    border-left: solid 4px transparent;
	    color: #ccc;
	    color: rgba(0, 0, 0, 0.5);
	}

	.catalog .active a,
	.catalog dd a:hover {
	    border-left: solid 4px #2a83f2;
	    color: #2a83f2;
	}



	/*right*/

	.right {
	    overflow: hidden;
	    padding-left: 70px;
	}

	.paragraph {
	    font-size: 18px;
	    text-align: left;
	    margin: 43px 0 37px;
	}

	.paragraph:first-child {
	    margin-top: 0;
	}

	.paragraph .title1,
	.paragraph .title2 {
	    line-height: 1em;
	    margin-bottom: 9px;
	}

	.paragraph .title1 {
	    color: #ddd;
	}

	.paragraph .title2 {
	    font-size: 28px;
	    margin-bottom: 31px;
	}

	.paragraph .title3 {
	    margin-bottom: 38px;
	}

	.paragraph .content {
	    line-height: 26px;
	    width: 882px;
	}

	.paragraph .content li {
	    list-style-type: decimal;
	    margin-left: 1em;
	    padding-left: 3px;
	}

	.paragraph .content li:nth-child(n+10) {
	    margin-left: 1.5em;
	}

	.paragraph .content li:nth-child(n+100) {
	    margin-left: 2em;
	}


</style>
