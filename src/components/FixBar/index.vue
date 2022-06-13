<template>
  <!-- 主页下拉到一定位置后出现的固定顶栏 -->
  <div class="fixBar" v-show="fixBarShow">
    <!-- 居中 -->
    <div class="fixBarW">
      <!-- 分类列表 -->
      <Nav :showOther="false" class="fixBarNav" />
      <!-- 搜索框 -->
      <form class="search">
        <input type="search" name="" id="" v-model="keyword" />
        <button @click.prevent="goSearch">搜索</button>
      </form>
      <!-- 右侧 -->
      <div>
        <ul>
          <li class="login">
            <a href="#">请登录</a>&nbsp;&nbsp;
            <router-link to="/register" class="style_ora">注册有礼</router-link>
          </li>
          <li class="style_ora arrow_icon">购物车&nbsp;0</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入分类栏
import Nav from "@/components/Nav";

export default {
  name: "FixBar",
  components: {
    Nav,
  },
  data() {
    return {
      fixBarShow: false, // 控制该组件显示
      keyword: "", // 搜索框关键字
    };
  },
  methods: {
    scroll() {
      //防抖定时器
      this.fixTimer = setTimeout(() => {
        let top = Math.floor(
          window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop
        );
        // 滚动到700像素时顶部固定栏显示，否则隐藏
        if (top >= 700) {
          this.fixBarShow = true;
        } else {
          this.fixBarShow = false;
        }
      }, 10);
    },

    // 前往搜索页
    goSearch() {
      // 定义参数对象用于后续路由跳转
      let location = { name: "Search" };
      // 带上原有路径参数
      location.query = this.$route.query || {};
      location.params = { keyword: this.keyword || undefined };
      // 更改路由
      this.$router.push(location);
      this.keyword = ""; // 清空关键字数据
    },
  },
  mounted() {
    // 设置滚动监听，决定fixBar显示与否
    window.addEventListener("scroll", () => {
      clearTimeout(this.fixTimer);
      this.scroll();
    });
  },
};
</script>

<style scoped>
.fixBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  opacity: 0.95;
  z-index: 999;
}
.fixBarW {
  width: 1190px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fixBarNav {
  width: 200px;
  margin: 0;
}

/* 搜索模块 */
.search {
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

li {
  float: left;
  padding: 0 10px;
  font-size: 12px;
}

ul a:hover,
ul li:hover {
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