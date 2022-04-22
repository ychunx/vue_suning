<template>
  <div>
    <!-- 注册页头部 start -->
    <div class="header reg_w">
      <router-link to="/home" class="reg_logo fl"
        ><img src="./images/logo.png"
      /></router-link>
      <div class="reg_txt fl">欢迎注册</div>
      <a href="#" class="reg_login fr">我已经注册，马上登录&gt;</a>
    </div>
    <!-- 注册页头部 end -->

    <!-- 注册页主体 start -->
    <div class="main reg_w">
      <div class="regForm">
        <p>注册领199元大礼包</p>
        <div class="phone">
          <label>手机号码</label>
          <input type="text" placeholder="建议使用常用的手机号" />
        </div>
        <div></div>
        <div class="msg">
          <label>手机验证码</label>
          <input type="text" placeholder="请输入手机验证码" />
          <button>获取短信验证码</button>
        </div>
        <div class="sendSce"></div>
        <div class="pwd">
          <label>设置密码</label>
          <input type="text" placeholder="请输入密码" />
        </div>
        <div></div>
        <button class="submit">提交注册</button>
      </div>
    </div>
    <!-- 注册页主体 end -->
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style scoped>
.reg_w {
  width: 990px;
  margin: 0 auto;
}

.header {
  height: 88px;
}

.reg_logo {
  display: block;
  height: 88px;
  width: 190px;
  margin-right: 24px;
}

.reg_logo img {
  height: 88px;
  width: 190px;
}

.reg_txt {
  width: 72px;
  height: 88px;
  line-height: 88px;
  font-size: 18px;
  color: #666;
}

.reg_login {
  color: #333;
  font-size: 12px;
  margin-top: 63px;
}

.reg_login:hover {
  color: #f60;
}

.main {
  border: 1px solid #ddd;
  border-top: 3px solid #f90;
  background: #f8f8f8;
  padding: 55px 0;
  line-height: 1.5;
}

.regForm {
  padding: 0 305px;
}

.regForm p {
  color: #222;
  font-size: 14px;
  margin-bottom: 17px;
}

.phone,
.msg,
.pwd {
  width: 380px;
  height: 40px;
  border: 1px solid #ccc;
  line-height: 38px;
  font-size: 0;
}

.phone + div {
  width: 380px;
  height: 22px;
}

.regForm label {
  display: inline-block;
  width: 87px;
  padding-left: 11px;
  color: #222;
  font-size: 12px;
}

.regForm input {
  width: 291px;
  height: 38px;
  vertical-align: top;
  font-size: 12px;
  color: #cacaca;
}

.regForm input:focus {
  letter-spacing: 1.5px;
  font-size: 16px;
  color: #333;
}

.msg input {
  width: 140px;
}

.msg button {
  width: 150px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  background: #f5f5f5;
  border-left: 1px solid #bbb;
  font-size: 14px;
}

.msg button:hover {
  color: #f60;
  cursor: pointer;
}

.sendSce {
  width: 380px;
  height: 34px;
}

.pwd + div {
  width: 380px;
  height: 50px;
}

.submit {
  width: 380px;
  height: 40px;
  margin: 24px 0 5px 0;
  background-color: #f60;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}

.footer {
  background: #f8f8f8;
}
</style>