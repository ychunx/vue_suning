<template>
  <!-- nav栏包括分类、快捷标签、右部公示 -->
  <nav class="nav w">
    <!-- 分类下拉框 -->
    <div class="dropdown" @mouseenter="navShowE" @mouseleave="navShowL">
      <div class="dt">分类</div>
      <!-- 下拉过渡 -->
      <transition name="sort">
        <div class="sort" v-show="navShow && showOther1">
          <!-- 展示平台分类属性一级、二级、三级 -->
          <ul @click="goSearch">
            <li v-for="c1 in categoryList" :key="c1.categoryId">
              <!-- <img src="./images/1.png" /> -->
              <a
                :data-categoryName="c1.categoryName"
                :data-category1Id="c1.categoryId"
                >{{ c1.categoryName }}</a
              >
              <div>
                <div v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                  <a
                    :data-categoryName="c2.categoryName"
                    :data-category2Id="c2.categoryId"
                    >{{ c2.categoryName }}</a
                  >
                  <div>
                    <a
                      v-for="c3 in c2.categoryChild"
                      :key="c3.categoryId"
                      :data-categoryName="c3.categoryName"
                      :data-category3Id="c3.categoryId"
                      >{{ c3.categoryName }}</a
                    >
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <!-- 快捷标签 -->
    <div class="navitems" v-show="showOther">
      <a href=""><img src="./images/nav.png" /></a>
      <a href="">电器城</a>
      <a href="">手机数码</a>
      <a href="">苏宁超市</a>
      <a href="">家具建材</a>
      <a href="">生活家电</a>
      <a href="">帮客服务</a>
      <a href="">金融</a>
    </div>
    <div v-show="showOther">
      <img src="./images/nav2.png" />
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Nav",
  data() {
    return {
      navShow: true, // 由于单页面，控制该组件显示

      // 为了实现顶部固定栏下拉框一开始不下拉，且鼠标离开后能收回
      showOther1: false,
    };
  },
  // 供顶部固定栏使用，决定是否显示出分类和下拉栏以为的元素是否显示
  props: ["showOther"],
  methods: {
    navShowE() {
      this.navShow = true;

      // 为了实现顶部固定栏下拉框一开始不下拉，且鼠标离开后能收回
      this.showOther1 = true;
    },
    navShowL() {
      // 为了实现顶部固定栏下拉框一开始不下拉，且鼠标离开后能收回
      this.showOther1 = false || this.showOther;

      // 当不是home页面或者是home页面的顶部固定栏组件，离开时就会收回下拉栏
      if (this.$route.path != "/home" || !this.showOther) {
        this.navShow = false;
      }
    },
    // 点击分类属性前往商品列表也就是搜索页
    goSearch(e) {
      // 获取事件触发目标
      let node = e.target;
      // 解构出分类属性名和一二三级ID
      let { categoryname, category1id, category2id, category3id } =
        node.dataset;
      // 防止点击重复分类报错（防止添加两个相同属性到面包屑）
      if (categoryname == this.$route.query.categoryName) return;
      if (categoryname) {
        let location = { name: "Search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        location.query = query;
        location.params = this.$route.params || {};
        this.$router.push(location);
      }
    },
  },
  watch: {
    // 跳转路由时判断nav下拉框是否展开
    $route(newv, oldv) {
      if (newv.path == "/home") {
        this.navShow = true;
      } else {
        this.navShow = false;
      }
    },
  },
  mounted() {
    // 获取分类数据
    this.$store.dispatch("categoryList");
    // 为了实现顶部固定栏下拉框一开始不下拉，且鼠标离开后能收回
    this.showOther1 = this.showOther;
  },
  computed: {
    ...mapState({
      // 获取分类数据
      categoryList: (state) => state.Home.categoryList,
    }),
  },
};
</script>

<style scpoed>
/* nav模块 */
.nav {
  height: 38px;
  display: flex;
  overflow: visible;
}

/* 下拉菜单 start */
.dropdown {
  /* 分类 */
  height: 38px;
  width: 200px;
  background: #ff8000;
  border-radius: 12px 12px 0 0;
  z-index: 999;
}

.dropdown .dt {
  width: 100%;
  height: 100%;
  line-height: 38px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  padding-left: 34px;
  cursor: pointer;
}

.sort {
  /* width: 994px; */
  width: 200px;
  height: 476px;
  font-size: 14px;
  position: relative;
}

.sort-enter {
  height: 0px;
  overflow: hidden;
}

.sort-enter-to {
  height: 476px;
  overflow: hidden;
}

.sort-enter-active {
  transition: all 0.3s linear;
}

.sort li {
  height: 31px;
  width: 200px;
}

/* .sort li img {
  position: absolute;
  top: 7px;
  left: 6px;
  width: 16px;
  height: 16px;
}

.sort li a,
.sort li em {
  position: relative;
  top: 2px;
} */

.sort li a {
  display: inline-block;
  line-height: 29px;
  /* 字间距 */
  letter-spacing: 1px;
  color: #000;
}

.sort li > a {
  width: 200px;
  height: 31px;
  padding-left: 26px;
  background-color: #fff;
}

.sort li a:hover {
  color: #f60;
  background-color: #f3f3f3;
  cursor: pointer;
}

.sort em {
  margin: 0 3px;
}

.sort li > div {
  position: absolute;
  top: 0;
  /* left: -594px; */
  left: 200px;
  background-color: #f3f3f3;
  width: 794px;
  height: 476px;
  display: none;
  overflow: hidden;
  transition: all 0.2s linear;
}

.sort li:hover > a {
  background-color: #f3f3f3;
}
.sort li:hover > div {
  display: block;
  /* left: 200px; */
}
.sort li > div > div {
  overflow: hidden;
  margin-bottom: 10px;
}

.sort li > div > div > a:first-child {
  display: block;
  float: left;
  width: 100px;
  text-align: end;
}

.sort li > div a {
  margin-right: 20px;
}

.sort li > div a + div {
  float: right;
  width: 674px;
}

/* 下拉菜单 end */

/* nav 项目 */
.navitems {
  width: 794px;
  height: 38px;
}

.navitems a {
  display: inline-block;
  height: 38px;
  padding: 0 12px;
  line-height: 38px;
  color: #333;
  font-size: 15px;
  font-weight: bold;
  overflow: hidden;
  transition: all 0.2s linear;
}

.navitems a:hover {
  color: #f60;
  border-bottom: 4px solid #f60;
}

.navitems a:first-child {
  padding: 0;
}

.navitems a img {
  width: 110px;
  vertical-align: bottom;
}

.nav div > img {
  width: 196px;
  height: 39px;
}

.nav div > img:hover {
  cursor: pointer;
}
</style>