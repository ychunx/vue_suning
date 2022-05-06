<template>
  <div class="main w">
    <!--bread-->
    <div class="bread">
      <ul class="fl sui-breadcrumb">
        <li>
          <a href="#">全部结果</a>
        </li>
      </ul>
      <ul class="fl sui-tag">
        <li class="with-x" v-if="searchParams.categoryName">
          {{ searchParams.categoryName }}<i @click="removeName">×</i>
        </li>
        <li class="with-x" v-if="searchParams.keyword">
          {{ searchParams.keyword }}<i @click="removeKeyword">×</i>
        </li>
        <li class="with-x" v-if="searchParams.trademark">
          {{ searchParams.trademark.split(":")[1] }}<i @click="removeTm">×</i>
        </li>
        <li
          class="with-x"
          v-for="(attr, index) in searchParams.props"
          :key="index"
        >
          {{ attr.split(":")[1] }}<i @click="removeAttr(index)">×</i>
        </li>
      </ul>
    </div>

    <!--selector-->
    <SearchSelector @tmInfo="tmInfo" @attrInfo="attrInfo" />

    <!--details-->
    <div class="details clearfix">
      <div class="sui-navbar">
        <div class="navbar-inner filter">
          <ul class="sui-nav">
            <span
              class="sui-nav-boder"
              :class="{ 'sui-nav-boder-second': orderC }"
            ></span>
            <li
              :class="{ active: isOne }"
              @click="changeOrder(1)"
              @mouseenter="orderE(1)"
              @mouseleave="orderL(1)"
            >
              <a
                >综合<span v-show="isOne"
                  ><span v-show="isDesc">⬇</span
                  ><span v-show="!isDesc">⬆</span></span
                ></a
              >
            </li>
            <li
              :class="{ active: !isOne }"
              @click="changeOrder(2)"
              @mouseenter="orderE(2)"
              @mouseleave="orderL(2)"
            >
              <a
                >价格<span v-show="!isOne"
                  ><span v-show="isDesc">⬇</span
                  ><span v-show="!isDesc">⬆</span></span
                ></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="goods-list">
        <ul class="yui3-g">
          <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
            <div class="list-wrap">
              <div class="p-img">
                <a><img :src="goods.defaultImg" /></a>
              </div>
              <div class="price">
                <strong>
                  <em>¥</em>
                  <i>{{ goods.price }}.00</i>
                </strong>
              </div>
              <div class="attr">
                <a>{{ goods.title }}</a>
              </div>
              <div class="commit">
                <i class="command"
                  >已有<span>{{ goods.hotScore }}</span
                  >人评价</i
                >
              </div>
              <div class="operate">
                <a class="sui-btn btn-bordered btn-danger">加入购物车</a>
                <a class="sui-btn btn-bordered">收藏</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Pagination
        :pageNo="searchParams.pageNo"
        :pageSize="searchParams.pageSize"
        :total="total"
        :continues="5"
        @getPageNo="getPageNo"
      />
    </div>
  </div>
</template>

<script>
import SearchSelector from "./SearchSelector/SearchSelector";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Search",
  components: {
    SearchSelector,
  },
  data() {
    return {
      searchParams: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: "",
      },
      // 筋斗云位置
      orderC: false,
      orderC1: false,
    };
  },
  methods: {
    // 获取页面数据并展示
    getData(pageNo) {
      // 由于当页码大于将要请求的页码总数时，会出现空页面现象，所以要跳转回第一页
      if (pageNo) {
        this.searchParams.pageNo = pageNo;
      } else {
        this.searchParams.pageNo = 1;
      }
      this.$store.dispatch("getSearchInfo", this.searchParams);
    },
    // 去除分类名的面包屑
    removeName() {
      this.searchParams.categoryName = undefined;
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
      this.getData();
      //但貌似还是把query参数全干掉了
      if (this.$route.params) {
        this.$router.push({ name: "Search", params: this.$route.params });
      }
    },
    // 去除关键词params的面包屑
    removeKeyword() {
      this.searchParams.keyword = undefined;
      this.getData();
      if (this.$route.query) {
        this.$router.push({ name: "Search", query: this.$route.query });
      }
    },
    // 去除品牌面包屑
    removeTm() {
      this.searchParams.trademark = undefined;
      this.getData();
    },
    // 去除属性面包屑
    removeAttr(i) {
      this.searchParams.props.splice(i, 1);
      this.getData();
    },
    // 获取品牌选择的自定义事件
    tmInfo(tm) {
      this.searchParams.trademark = `${tm.tmId}:${tm.tmName}`;
      this.getData();
    },
    // 获取属性选择的自定义事件
    attrInfo(attr, v) {
      let prop = `${attr.attrId}:${v}:${attr.attrName}`;
      if (this.searchParams.props.indexOf(prop) == -1) {
        this.searchParams.props.push(prop);
        this.getData();
      }
    },
    // 改变排序及下边框位置
    changeOrder(flag) {
      let originFlag = this.searchParams.order.split(":")[0];
      let originSort = this.searchParams.order.split(":")[1];
      if (originFlag == flag) {
        this.searchParams.order = `${flag}:${
          originSort == "desc" ? "asc" : "desc"
        }`;
      } else {
        this.searchParams.order = `${flag}:desc`;
      }
      this.getData();

      // 实现筋斗云效果
      if (flag == 1) {
        this.orderC = false;
        // 改变原始状态
        this.orderC1 = this.orderC;
      } else {
        this.orderC = true;
        // 改变原始状态
        this.orderC1 = this.orderC;
      }
    },
    // 排序筋斗云效果
    orderE(i) {
      // 备份原始状态以供离开时返回
      this.orderC1 = this.orderC;
      // 判断此时下边框应该再哪
      if (i == 1) {
        this.orderC = false;
      } else {
        this.orderC = true;
      }
    },
    orderL(i) {
      // 返回原始状态
      this.orderC = this.orderC1;
    },
    // 获取页码器子组件改变页码数的自定义事件
    getPageNo(pageNo) {
      // this.searchParams.pageNo = pageNo;
      this.getData(pageNo);
    },
  },
  computed: {
    ...mapGetters(["goodsList"]),
    ...mapState({
      total: (state) => state.Search.searchInfo.total,
    }),
    // 判断排序
    isOne() {
      return this.searchParams.order.indexOf("1") != -1;
    },
    isDesc() {
      return this.searchParams.order.indexOf("desc") != -1;
    },
  },
  beforeMount() {
    Object.assign(this.searchParams, this.$route.query, this.$route.params);
  },
  mounted() {
    this.getData();
  },
  watch: {
    $route(newv, oldv) {
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
      Object.assign(this.searchParams, this.$route.query, this.$route.params);
      this.getData();
    },
  },
};
</script>

<style scoped>
.bread {
  margin-bottom: 5px;
  overflow: hidden;
  font-size: 14px;
}
.sui-breadcrumb {
  padding: 3px 15px;
  margin: 0;
  font-weight: 400;
  border-radius: 3px;
  float: left;
}
.sui-breadcrumb li {
  display: inline-block;
  line-height: 26px;
  color: #666;
}
.sui-tag {
  list-style: none;
  font-size: 0;
  line-height: 0;
  padding: 5px 0 0;
  float: left;
}
.with-x {
  font-size: 12px;
  margin: 0 5px 5px 0;
  display: inline-block;
  overflow: hidden;
  color: #000;
  background: #f7f7f7;
  padding: 0 7px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #dedede;
  white-space: nowrap;
  transition: color 400ms;
  cursor: pointer;
}
.with-x i {
  margin-left: 10px;
  cursor: pointer;
  font: 400 14px tahoma;
  display: inline-block;
  height: 100%;
}
.with-x:hover {
  color: #f60;
}

.details {
  margin-bottom: 5px;
}
.sui-navbar {
  overflow: visible;
  margin-bottom: 0;
}
.filter {
  min-height: 40px;
  padding-right: 20px;
  background: #fbfbfb;
  border: 1px solid #e2e2e2;
  padding-left: 0;
  border-radius: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
}
.sui-nav {
  position: relative;
  left: 0;
  display: block;
  float: left;
  margin: 0 10px 0 0;
}
.sui-nav ul {
  position: relative;
}
.sui-nav li {
  float: left;
  line-height: 18px;
  width: 66px;
  text-align: center;
}
.sui-nav li a {
  display: block;
  cursor: pointer;
  padding: 11px 15px 5px;
  color: #777;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s linear;
}
.sui-nav li a:hover {
  color: #f60;
}
.sui-nav li.active a {
  color: #f60;
  /* border-bottom: 4px solid #f60; */
}
.sui-nav-boder {
  position: absolute;
  top: 34.5px;
  left: 0;
  width: 66px;
  height: 4px;
  box-sizing: border-box;
  border-bottom: 4px solid #f60;
  transition: all 0.2s linear;
}
.sui-nav-boder-second {
  left: 66px;
}

.goods-list {
  margin: 20px 0;
  /* 防止由于商品上移动画导致的塌陷 */
  min-height: 443px;
}
.goods-list ul {
  display: flex;
  flex-wrap: wrap;
}
.goods-list ul li {
  height: 100%;
  width: 20%;
  margin-top: 10px;
  line-height: 28px;
}

.list-wrap {
  transition: all 0.2s linear;
}
.list-wrap:hover {
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.08), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  margin-top: -3px;
}
.list-wrap .p-img {
  padding-left: 15px;
  width: 215px;
  height: 255px;
}
.list-wrap .p-img a {
  color: #666;
}
.list-wrap .p-img a img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

.price {
  padding-left: 15px;
  font-size: 18px;
  color: #f60;
}
.price strong {
  font-weight: 700;
}

.attr {
  padding-left: 15px;
  width: 85%;
  height: 57.6px;
  overflow: hidden;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.attr a {
  font-size: 12px;
  color: #333;
  text-decoration: none;
  transition: all 0.2s linear;
}
.attr a:hover {
  color: #f60;
}

.commit {
  padding-left: 15px;
  height: 22px;
  font-size: 13px;
  color: #a7a7a7;
}
.commit span {
  font-weight: 700;
  color: #646fb0;
}

.operate {
  padding: 12px 15px;
}
.sui-btn {
  display: inline-block;
  padding: 2px 14px;
  box-sizing: border-box;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 0;
  background-color: transparent;
  margin-right: 15px;
  color: #333;
}
.btn-bordered {
  min-width: 85px;
  background-color: transparent;
  border: 1px solid #eee;
  transition: all 0.2s linear;
}
.btn-bordered:hover {
  background-color: #f9f9fd;
}
.btn-danger {
  border: 1px solid #eee;
  transition: all 0.2s linear;
}
.btn-danger:hover {
  background-color: #fff6e5;
  color: #f60 !important;
}
</style>