<template>
  <div>
    <!-- 登录页头部 start -->
    <div class="header reg_w">
      <router-link to="/home" class="reg_logo fl"
        ><img src="./images/logo.png"
      /></router-link>
      <div class="reg_txt fl">欢迎登录</div>
      <router-link to="/register" class="reg_login fr"
        >我还未注册，马上注册&gt;</router-link
      >
    </div>
    <!-- 登录页头部 end -->

    <!-- 登录页主体 start -->
    <div class="main reg_w">
      <div class="regForm">
        <div>
          <a>扫码登录</a>|
          <a class="active">账户登录</a>
        </div>
        <div class="phone">
          <label>账号</label>
          <input type="text" placeholder="用户名/手机/邮箱" v-model="phone" />
        </div>
        <div class="sendSce"></div>
        <div class="pwd">
          <label>密码</label>
          <input
            type="password"
            placeholder="密码"
            v-model="password"
            @keyup.enter="login"
          />
        </div>
        <div></div>
        <button class="submit" @click="login">登录</button>
      </div>
    </div>
    <!-- 登录页主体 end -->
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let { phone, password } = this;
      try {
        await this.$store.dispatch("login", { phone, password });
        this.$router.push("/home");
      } catch (error) {
        alert(error.message);
      }
    },
  },
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
  min-height: 447px;
}

.regForm {
  padding: 0 305px;
}

.regForm > div:first-child {
  width: 360px;
  height: 50px;
  margin-bottom: 40px;
  color: #aaa;
  border-bottom: 1px solid #aaa;
}
.regForm > div:first-child a {
  display: inline-block;
  width: 175px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.regForm > div:first-child a.active {
  color: #f60;
  border-bottom: 4px solid #f60;
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