<template>
  <header class="header w">
    <div class="logo">
      <h1>
        <router-link to="/home" title="苏宁易购logo">苏宁易购</router-link>
      </h1>
    </div>
    <form class="search">
      <input type="search" name="" id="" v-model="keyword" />
      <button @click.prevent="goSearch">搜索</button>
    </form>
    <div class="hotwords">
      <a href="">手机</a>
      <a href="" class="style_ora">爆款洗衣机</a>
      <a href="">冰箱</a>
      <a href="" class="style_ora">奶粉特惠购</a>
      <a href="" class="style_ora">品质家具购</a>
      <a href="">电视</a>
      <a href="">ipad</a>
      <a href="">热水器</a>
      <a href="">沙发</a>
    </div>
    <!-- 右边导航栏 -->
    <div class="sidebar" v-show="isShopCart">
      <div class="tar_car" @click="goShopCart">
        <span class="car">购物车</span>
        <span class="count">{{ shopCartNum }}</span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
      isShopCart: true,
      shopCartNum: 0,
    };
  },
  methods: {
    goSearch() {
      let location = { name: "Search" };
      location.query = this.$route.query || {};
      location.params = { keyword: this.keyword || undefined };
      this.$router.push(location);
      this.keyword = "";
    },
    goShopCart() {
      this.$router.push("/shopcart");
    },
  },
  watch: {
    // 控制右固定栏在购物车页面不显示
    $route(newv, oldv) {
      if (this.$route.path == "/shopcart") {
        this.isShopCart = false;
      } else {
        this.isShopCart = true;
      }
      // 每当路由跳转时刷新购物车数量
      this.shopCartNum = this.cartList.cartInfoList
        ? this.cartList.cartInfoList.length
        : 0;
    },
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  mounted() {
    // 等获取到购物车数据后再计算数量
    setTimeout(() => {
      this.shopCartNum = this.cartList.cartInfoList
        ? this.cartList.cartInfoList.length
        : 0;
    }, 1000);
  },
};
</script>

<style scoped>
/* 头部模块 */
.header {
  position: relative;
  height: 110px;
  background-color: #fff;
}

.logo {
  position: absolute;
  top: 10px;
  left: 0;
  width: 190px;
  height: 90px;
}

.logo a {
  display: block;
  width: 190px;
  height: 90px;
  background: url("./images/logo.png") no-repeat;
  background-size: 190px 90px;
  font-size: 0;
}

/* 搜索模块 */
.search {
  position: absolute;
  top: 30px;
  left: 360px;
  width: 540px;
  height: 40px;
  /* border: 2px solid #FF8000;
    border-radius: 12px; */
  overflow: hidden;
  display: flex;
}

.search input {
  flex: 3;
  height: 40px;
  padding-left: 10px;
  /* color: #D2D2D2; */
  border: 2px solid #ff8000;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.search button {
  width: 120px;
  height: 40px;
  background-color: #ff8000;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.search button:hover {
  cursor: pointer;
}

/* 热词 */
.hotwords {
  display: flex;
  position: absolute;
  top: 75px;
  left: 350px;
}

.hotwords a {
  font-size: 12px;
  color: #999;
  border-left: 1px solid #ddd;
  padding: 0 10px;
  display: block;
}

.hotwords a.style_ora {
  color: #ff6600;
}
.hotwords a:hover {
  color: #f60;
}

.hotwords a:first-child {
  border: 0;
}

/* 右边导航栏 */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 35px;
  height: 100%;
  z-index: 999;
}

.tar_car {
  position: absolute;
  bottom: 50%;
  width: 35px;
  height: 160px;
  text-align: center;
  background-color: #383838;
  cursor: pointer;
}

.tar_car span {
  color: #fff;
  font-size: 12px;
}

.car {
  width: 12px;
  margin: 70px auto 0;
  line-height: 18px;
  display: block;
}

.count {
  display: inline-block;
  min-width: 17px;
  height: 15px;
  padding: 0 6px;
  background-color: #d00;
  color: #fff;
  line-height: 15px;
  border-radius: 5px;
}
</style>