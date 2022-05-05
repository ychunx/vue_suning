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
        <li class="with-x">手机</li>
        <li class="with-x">iphone<i>×</i></li>
        <li class="with-x">华为<i>×</i></li>
        <li class="with-x">OPPO<i>×</i></li>
      </ul>
    </div>

    <!--selector-->
    <SearchSelector />

    <!--details-->
    <div class="details clearfix">
      <div class="sui-navbar">
        <div class="navbar-inner filter">
          <ul class="sui-nav">
            <li class="active">
              <a href="#">综合⬇</a>
            </li>
            <li>
              <a href="#">价格⬆</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="goods-list">
        <ul class="yui3-g">
          <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
            <div class="list-wrap">
              <div class="p-img">
                <a href="item.html" target="_blank"
                  ><img :src="goods.defaultImg"
                /></a>
              </div>
              <div class="price">
                <strong>
                  <em>¥</em>
                  <i>{{ goods.price }}.00</i>
                </strong>
              </div>
              <div class="attr">
                <a target="_blank" href="item.html">{{ goods.title }}</a>
              </div>
              <div class="commit">
                <i class="command"
                  >已有<span>{{ goods.hotScore }}</span
                  >人评价</i
                >
              </div>
              <div class="operate">
                <a
                  href="success-cart.html"
                  target="_blank"
                  class="sui-btn btn-bordered btn-danger"
                  >加入购物车</a
                >
                <a href="javascript:void(0);" class="sui-btn btn-bordered"
                  >收藏</a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="fr page">
        <div class="sui-pagination clearfix">
          <ul>
            <li class="prev disabled">
              <a href="#">«上一页</a>
            </li>
            <li class="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li class="dotted"><span>...</span></li>
            <li class="next">
              <a href="#">下一页»</a>
            </li>
          </ul>
          <div><span>共10页&nbsp;</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from "./SearchSelector/SearchSelector";
import { mapGetters } from "vuex";
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
    };
  },
  methods: {
    getData() {
      this.$store.dispatch("getSearchInfo", this.searchParams);
    },
  },
  computed: {
    ...mapGetters(["goodsList", "trademarkList", "attrsList"]),
  },
  mounted() {
    this.getData();
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
.sui-nav li {
  float: left;
  line-height: 18px;
}
.sui-nav li a {
  display: block;
  cursor: pointer;
  padding: 11px 15px 5px;
  color: #777;
  text-decoration: none;
}
.sui-nav li.active a {
  color: #f60;
  border-bottom: 4px solid #f60;
}

.goods-list {
  margin: 20px 0;
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

.page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;
}
.sui-pagination {
  margin: 18px 0;
}
.sui-pagination ul {
  margin-left: 0;
  margin-bottom: 0;
  vertical-align: middle;
  width: 490px;
  float: left;
}
.sui-pagination ul li {
  line-height: 18px;
  display: inline-block;
}
.sui-pagination ul li a {
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e0e9ee;
  margin-left: -1px;
  font-size: 14px;
  padding: 9px 18px;
  color: #333;
}
.sui-pagination ul li.active a {
  background-color: #fff;
  color: #e1251b;
  border-color: #fff;
  cursor: default;
}
.sui-pagination ul li.prev a {
  background-color: #fafafa;
}
.sui-pagination ul li.disabled a {
  color: #999;
  cursor: default;
}
.sui-pagination ul li.dotted span {
  margin-left: -1px;
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  font-size: 14px;
  border: 0;
  padding: 9px 18px;
  color: #333;
}
.sui-pagination ul li.next a {
  background-color: #fafafa;
}
.sui-pagination div {
  color: #333;
  font-size: 14px;
  float: right;
  width: 241px;
}
</style>