<template>
  <div class="fixBar" v-show="fixBarShow">
    <div class="fixBarW">
      <Nav :showOther="false" class="fixBarNav" />
      <form class="search">
        <input type="search" name="" id="" v-model="keyword" />
        <button @click.prevent="goSearch">搜索</button>
      </form>
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
import Nav from "@/components/Nav";
export default {
  name: "FixBar",
  components: {
    Nav,
  },
  data() {
    return {
      fixBarShow: false,
      keyword: "",
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
        // 滚动到600像素时顶部固定栏显示
        if (top >= 700) {
          this.fixBarShow = true;
        } else {
          this.fixBarShow = false;
        }
      }, 10);
    },
    goSearch() {
      let location = { name: "Search" };
      location.query = this.$route.query || {};
      location.params = { keyword: this.keyword || undefined };
      this.$router.push(location);
      this.keyword = "";
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