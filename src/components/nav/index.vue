<template>
  <nav class="nav w">
    <div class="dropdown" @mouseenter="navShowE" @mouseleave="navShowL">
      <div class="dt">分类</div>
      <transition name="sort">
        <div class="sort" v-show="navShow">
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
    <div class="navitems">
      <a href=""><img src="./images/nav.png" /></a>
      <a href="">电器城</a>
      <a href="">手机数码</a>
      <a href="">苏宁超市</a>
      <a href="">家具建材</a>
      <a href="">生活家电</a>
      <a href="">帮客服务</a>
      <a href="">金融</a>
    </div>
    <div>
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
      navShow: true,
    };
  },
  methods: {
    navShowE() {
      this.navShow = true;
    },
    navShowL() {
      if (this.$route.path != "/home") {
        this.navShow = false;
      }
    },
    goSearch(e) {
      let node = e.target;
      let { categoryname, category1id, category2id, category3id } =
        node.dataset;
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
  mounted() {
    this.$store.dispatch("categoryList");
    /* if (this.$route.path != "/home") {
      this.navShow = false;
    } */
  },
  computed: {
    ...mapState({
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
  z-index: 3;
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