<template>
  <!-- 顶部固定栏 -->
  <section class="shortcut">
    <div class="w">
      <div class="fl">
        <ul>
          <li class="arrow_icon" @click="$router.push('/home')">网站导航</li>
          <li class="arrow_icon">商家入驻</li>
          <li class="arrow_icon">客户服务</li>
          <li>网页无障碍</li>
          <li>广州</li>
        </ul>
      </div>
      <div class="fr">
        <ul>
          <li class="login" v-if="!userName">
            <router-link to="/login">请登录</router-link>&nbsp;&nbsp;
            <router-link to="/register" class="style_ora">注册有礼</router-link>
          </li>
          <li class="login" v-else>
            <a class="style_ora">{{ userName }}</a
            >&nbsp;&nbsp;
            <a @click="logout">退出登录</a>
          </li>
          <li class="arrow_icon" @click="$router.push('/center')">我的订单</li>
          <li class="arrow_icon">我的易购</li>
          <li>苏宁会员</li>
          <li class="style_ora arrow_icon" @click="goShopCart">
            购物车&nbsp;{{ shopCartNum }}
          </li>
          <li>易付宝</li>
          <li>企业采购</li>
          <li class="arrow_icon">手机苏宁</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Shortcut",
  data() {
    return {
      shopCartNum: 0,
    };
  },
  methods: {
    goShopCart() {
      this.$router.push("/shopcart");
    },
    // 退出登录
    async logout() {
      try {
        await this.$store.dispatch("logout");
        this.$router.push("/home");
      } catch (error) {
        alert(error.message);
      }
    },
  },
  computed: {
    ...mapGetters(["cartList"]),
    // 获取已登录的用户名
    userName() {
      return this.$store.state.User.userInfo.name;
    },
  },
  mounted() {
    this.$store.dispatch("getCartList");
    // 等获取到购物车数据后再计算数量（应该用watch监视cartInfoList数据比较好）
    setTimeout(() => {
      this.shopCartNum = this.cartList.cartInfoList
        ? this.cartList.cartInfoList.length
        : 0;
    }, 1000);

    // 在购物车页面删除产品时同时刷新顶部固定栏数量
    this.$bus.$on("fleshCartNum", () => {
      setTimeout(() => {
        this.shopCartNum = this.cartList.cartInfoList
          ? this.cartList.cartInfoList.length
          : 0;
      }, 500);
    });
  },
  watch: {
    $route(newv, oldv) {
      // 每当路由跳转时刷新购物车数量
      setTimeout(() => {
        this.shopCartNum = this.cartList.cartInfoList
          ? this.cartList.cartInfoList.length
          : 0;
      }, 500);
    },
  },
};
</script>

<style scoped>
/* 顶部导航模块 */
.shortcut {
  height: 35px;
  width: 100%;
  min-width: 990px;
  line-height: 35px;
  border-bottom: 1px solid #eee;
  background: #f5f5f5;
  font-size: 12px;
  color: #666;
}

.shortcut ul li {
  float: left;
  padding: 0 10px;
}

.shortcut ul a:hover,
.shortcut ul li:hover {
  cursor: pointer;
  color: #f60;
}

/* 向下箭头三角 */
.arrow_icon::after {
  content: "\e91e";
  font-family: "icomoon";
  color: #bbb;
  margin-left: 3px;
}
</style>