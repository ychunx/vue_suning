<template>
  <div class="detail">
    <!-- 主要内容区域 -->
    <section class="con">
      <!-- 导航路径区域 -->
      <div class="conPoin">
        <span v-show="categoryView.category1Name">{{
          categoryView.category1Name
        }}</span>
        <span v-show="categoryView.category2Name">{{
          categoryView.category2Name
        }}</span>
        <span v-show="categoryView.category3Name">{{
          categoryView.category3Name
        }}</span>
      </div>
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果-->
          <Zoom :skuImageList="skuImageList" />
          <!-- 小图列表 -->
          <ImageList :skuImageList="skuImageList" />
        </div>
        <!-- 右侧选择区域布局 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <h3 class="InfoName">
              {{ skuInfo.skuName }}
            </h3>
            <p class="news">
              {{ skuInfo.skuDesc }}
            </p>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title">
                  价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格
                </div>
                <div class="price">
                  <i>¥&nbsp;</i>
                  <em>{{ skuInfo.price }}</em>
                  <span>&nbsp;&nbsp;降价通知</span>
                </div>
                <div class="remark">
                  <i>累计评价&nbsp;</i>
                  <em>888</em>
                </div>
              </div>
              <div class="priceArea2">
                <div class="title">
                  <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
                </div>
                <div class="fixWidth">
                  <i class="red-bg">加价购</i>
                  <em class="t-gray"
                    >满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em
                  >
                </div>
              </div>
            </div>
            <div class="support">
              <div class="supportArea">
                <div class="title">
                  支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持
                </div>
                <div class="fixWidth">
                  以旧换新，闲置手机回收 4G套餐超值抢 礼品购
                </div>
              </div>
              <div class="supportArea">
                <div class="title">配 送 至</div>
                <div class="fixWidth">广东省 深圳市 宝安区</div>
              </div>
            </div>
          </div>

          <div class="choose">
            <div class="chooseArea">
              <div class="choosed"></div>
              <dl v-for="spuSaleAttr in spuSaleAttrList" :key="spuSaleAttr.id">
                <dt class="title">{{ spuSaleAttr.saleAttrName }}</dt>
                <dd
                  changepirce="0"
                  :class="{ active: spuSaleAttrValue.isChecked == 1 }"
                  v-for="(
                    spuSaleAttrValue, index
                  ) in spuSaleAttr.spuSaleAttrValueList"
                  :key="index"
                  @click="
                    changeActive(
                      spuSaleAttrValue,
                      spuSaleAttr.spuSaleAttrValueList
                    )
                  "
                >
                  {{ spuSaleAttrValue.saleAttrValueName }}
                </dd>
              </dl>
            </div>
            <div class="cartWrap">
              <div class="controls">
                <!-- 将除了整数的字符都替换为空 -->
                <input
                  autocomplete="off"
                  class="itxt"
                  v-model="skuNum"
                  oninput="value=value.replace(/[^\d]/g,'')"
                  @change="changeSkuNum"
                />
                <a href="javascript:" class="plus" @click="skuNum++">+</a>
                <a
                  href="javascript:"
                  class="mins"
                  @click="skuNum > 1 ? skuNum-- : (skuNum = 1)"
                  >-</a
                >
              </div>
              <div class="add">
                <a @click="changeShopCart">加入购物车</a>
              </div>
              <div class="addSuccessMask" v-if="isShowMask">
                <div class="addSuccess">
                  <div class="addSuccess-top">
                    温馨提示
                    <a @click="closeMask">X</a>
                  </div>
                  <div class="addSuccess-main">
                    已成功加入购物车！
                    <router-link to="/shopcart"
                      >去购物车结算&nbsp;></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容详情页 -->
    <section class="tip">以下为静态组件,没有数据交互</section>
    <section class="product-detail">
      <aside class="aside">
        <div class="tabWraped">
          <h4 class="active">相关分类</h4>
          <h4>推荐品牌</h4>
        </div>
        <div class="tabContent">
          <div class="tab-pane active">
            <ul class="partList">
              <li>手机</li>
              <li>手机壳</li>
              <li>内存卡</li>
              <li>Iphone配件</li>
              <li>贴膜</li>
              <li>手机耳机</li>
              <li>移动电源</li>
              <li>平板电脑</li>
            </ul>
            <ul class="goodsList">
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part01.png" />
                  </div>
                  <div class="attr">Apple苹果iPhone 6s (A1699)</div>
                  <div class="price">
                    <em>¥</em>
                    <i>6088.00</i>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane">
            <p>推荐品牌</p>
          </div>
        </div>
      </aside>
      <div class="detail">
        <div class="fitting">
          <h4 class="kt">选择搭配</h4>
          <div class="good-suits">
            <div class="master">
              <img src="./images/l-m01.png" />
              <p>￥5299</p>
              <i>+</i>
            </div>
            <ul class="suits">
              <li class="suitsItem">
                <img src="./images/dp01.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="39" />
                  <span>39</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp02.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="50" />
                  <span>50</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp03.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="59" />
                  <span>59</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp04.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="99" />
                  <span>99</span>
                </label>
              </li>
            </ul>
            <div class="result">
              <div class="num">已选购0件商品</div>
              <div class="price-tit">套餐价</div>
              <div class="price">￥5299</div>
              <button class="addshopcar">加入购物车</button>
            </div>
          </div>
        </div>
        <div class="intro">
          <ul class="tab-wraped">
            <li class="active">
              <a href="###"> 商品介绍 </a>
            </li>
            <li>
              <a href="###"> 规格与包装 </a>
            </li>
            <li>
              <a href="###"> 售后保障 </a>
            </li>
            <li>
              <a href="###"> 商品评价 </a>
            </li>
            <li>
              <a href="###"> 手机社区 </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="one" class="tab-pane active">
              <ul class="goods-intro">
                <li>分辨率：1920*1080(FHD)</li>
                <li>后置摄像头：1200万像素</li>
                <li>前置摄像头：500万像素</li>
                <li>核 数：其他</li>
                <li>频 率：以官网信息为准</li>
                <li>品牌： Apple</li>
                <li>商品名称：APPLEiPhone 6s Plus</li>
                <li>商品编号：1861098</li>
                <li>商品毛重：0.51kg</li>
                <li>商品产地：中国大陆</li>
                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                <li>系统：苹果（IOS）</li>
                <li>像素：1000-1600万</li>
                <li>机身内存：64GB</li>
              </ul>
              <div class="intro-detail">
                <img src="./images/intro01.png" />
                <img src="./images/intro02.png" />
                <img src="./images/intro03.png" />
              </div>
            </div>
            <div id="two" class="tab-pane">
              <p>规格与包装</p>
            </div>
            <div id="three" class="tab-pane">
              <p>售后保障</p>
            </div>
            <div id="four" class="tab-pane">
              <p>商品评价</p>
            </div>
            <div id="five" class="tab-pane">
              <p>手机社区</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImageList from "./ImageList/ImageList";
import Zoom from "./Zoom/Zoom";
import { mapGetters } from "vuex";

export default {
  name: "Detail",
  data() {
    return {
      skuNum: 1,
      isShowMask: false,
    };
  },
  components: {
    ImageList,
    Zoom,
  },
  methods: {
    // 切换选择售卖属性
    changeActive(spuSaleAttrValue, List) {
      List.forEach((item) => {
        item.isChecked = 0;
      });
      spuSaleAttrValue.isChecked = 1;
    },
    changeSkuNum() {
      if (this.skuNum < 1) this.skuNum = 1;
    },
    async changeShopCart() {
      try {
        await this.$store.dispatch("changeShopCart", {
          skuId: this.$route.params.skuid,
          skuNum: this.skuNum,
        });
        this.isShowMask = true;
      } catch (error) {
        alert(error.message);
      }
    },
    closeMask() {
      this.isShowMask = false;
    },
  },
  beforeMount() {
    this.$store.dispatch("getGoodsDetail", this.$route.params.skuid);
  },
  computed: {
    ...mapGetters(["categoryView", "skuInfo", "spuSaleAttrList"]),
    skuImageList() {
      return this.skuInfo.skuImageList || [];
    },
  },
};
</script>

<style scoped>
.detail {
  /* width: 980px;
  float: right; */
  width: 1190px;
  margin: 0 auto;
}
.conPoin {
  padding: 9px 15px 9px 0;
  color: #666;
  font-size: 12px;
}
.conPoin > span + span:before {
  content: "/\00a0";
  padding: 0 5px;
  color: #ccc;
}

.mainCon {
  overflow: hidden;
  margin: 5px 0 30px;
}
.previewWrap {
  float: left;
  width: 400px;
  position: relative;
}

.InfoWrap {
  width: 700px;
  float: right;
}
.InfoName {
  font-size: 16px;
  line-height: 21px;
  margin-top: 15px;
  color: #222;
}

.news {
  color: #f60;
  font-size: 14px;
  margin-top: 15px;
}

.priceArea {
  background: #fff8f3;
  padding: 7px;
  margin: 13px 0;
}
.priceArea1 {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.title {
  float: left;
  margin-right: 15px;
  font-size: 12px;
  color: #999;
}

.price {
  float: left;
}
.price i {
  font-size: 18px;
  color: #e00;
}

.price em {
  font-size: 30px;
  font-weight: 700;
  color: #e00;
}

.price span {
  font-size: 14px;
  color: #f50;
}

.remark {
  float: right;
  font-size: 12px;
  color: #666;
}
.priceArea2 {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.priceArea2 .title {
  margin-right: 15px;
  float: left;
}
.fixWidth {
  width: 520px;
  float: left;
}
.fixWidth .red-bg {
  background: #f60;
  color: #fff;
  padding: 3px;
  font-size: 12px;
  margin-right: 8px;
}

.fixWidth .t-gray {
  color: #333;
  font-size: 12px;
}

.support {
  border-bottom: 1px solid #ededed;
  padding-bottom: 5px;
}
.support .supportArea {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.support .title {
  margin-right: 15px;
  float: left;
}

.support .fixWidth {
  width: 520px;
  float: left;
  color: #666;
  font-size: 12px;
}

.chooseArea {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.chooseArea dl {
  overflow: hidden;
  margin: 15px 0;
}
.chooseArea dl dt {
  margin-right: 15px;
  float: left;
}

.chooseArea dl dd {
  float: left;
  margin-right: 5px;
  color: #666;
  font-size: 12px;
  line-height: 24px;
  padding: 2px 14px;
  border-top: 1px solid #eee;
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-left: 1px solid #eee;
  cursor: pointer;
}

.chooseArea dl dd:hover {
  border: 1px solid #f50;
}
.chooseArea dl .active {
  border: 1px solid #f50;
}

.cartWrap .controls {
  width: 48px;
  position: relative;
  float: left;
  margin-right: 15px;
}
.cartWrap .controls .plus,
.cartWrap .controls .mins {
  width: 15px;
  text-align: center;
  height: 17px;
  line-height: 17px;
  background: #f1f1f1;
  color: #666;
  position: absolute;
  right: -8px;
  border: 1px solid #ccc;
}

.cartWrap .controls .mins {
  right: -8px;
  top: 19px;
  border-top: 0;
}

.cartWrap .controls .plus {
  right: -8px;
}
.cartWrap .controls .itxt {
  width: 38px;
  height: 37px;
  border: 1px solid #ddd;
  color: #555;
  float: left;
  border-right: 0;
  text-align: center;
}

.cartWrap .add {
  float: left;
  cursor: pointer;
}
.cartWrap .add a {
  background-color: #f50;
  padding: 0 25px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  height: 36px;
  line-height: 36px;
  display: block;
}
.addSuccessMask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
}
.addSuccess {
  box-sizing: content-box;
  width: 450px;
  height: 150px;
  border: 6px solid rgba(0, 0, 0, 0.35);
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -225px;
  margin-top: -75px;
}
.addSuccess-top {
  width: 450px;
  height: 30px;
  background-color: #eeeeee;
  line-height: 30px;
  padding-left: 10px;
  color: #666;
  font-size: 14px;
  font-weight: bold;
}
.addSuccess-top a {
  color: #999;
  float: right;
  font-size: 20px;
  font-weight: normal;
  display: block;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
}
.addSuccess-main {
  width: 450px;
  height: 120px;
  line-height: 32px;
  padding: 44px 30px;
  font-size: 14px;
  font-weight: bold;
  color: #666;
}
.addSuccess-main a {
  display: block;
  float: right;
  width: 120px;
  height: 32px;
  background-color: #f50;
  color: #fff;
  font-weight: normal;
  text-align: center;
  cursor: pointer;
}

.product-detail {
  /* width: 1200px;
  margin: 30px auto 0; */
  overflow: hidden;
}
.aside {
  width: 210px;
  float: left;
  border: 1px solid #ccc;
}
.tabWraped {
  height: 40px;
}
.tabWraped h4 {
  border-top: 3px solid #fff;
  font-size: 14px;
  float: left;
  line-height: 30px;
  width: 104px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.tabWraped h4.active {
  border-top: 3px solid #e1251b;
  border-bottom: 0;
  font-weight: normal;
}

.tabContent {
  padding: 10px;
}
.tab-pane {
  display: none;
  font-size: 12px;
}
.tab-pane.active {
  display: block;
}

.tab-pane:nth-child(1) .partList {
  overflow: hidden;
}
.tab-pane:nth-child(1) .partList li {
  width: 50%;
  float: left;
  border-bottom: 1px dashed #ededed;
  line-height: 28px;
}

.tab-pane:nth-child(1) .goodsList > li {
  margin: 5px 0 15px;
  border-bottom: 1px solid #ededed;
  padding-bottom: 5px;
}
.p-img {
  text-align: center;
}
.p-img img {
  width: 152px;
}

.price {
  font-size: 16px;
  color: #c81623;
  padding-top: 8px;
  margin: 0;
}
.goodsList .list-wrap .price em {
  font-size: 16px;
}

.operate {
  text-align: center;
  margin: 5px 0;
}
.operate a {
  background-color: transparent;
  border: 1px solid #8c8c8c;
  color: #8c8c8c;
  display: inline-block;
  padding: 2px 14px;
  line-height: 18px;
}

.fitting {
  border: 1px solid #ddd;
  margin-bottom: 15px;
}
.fitting .kt {
  border-bottom: 1px solid #ddd;
  background: #f1f1f1;
  color: #333;
  font-size: 14px;
  padding: 5px 0 5px 15px;
}

.good-suits {
  height: 170px;
  padding-top: 10px;
}
.master {
  width: 127px;
  height: 165px;
  text-align: center;
  position: relative;
  float: left;
}
.master img {
  width: 87px;
}

.master p {
  color: #c81623;
  font-size: 16px;
  font-weight: 700;
}

.master i {
  position: absolute;
  top: 48px;
  right: -25px;
  font-size: 16px;
}

.suits {
  width: 668px;
  height: 165px;
  float: left;
}
.suitsItem {
  float: left;
  width: 150px;
  padding: 0 20px;
  text-align: center;
}
.suitsItem img {
  width: 120px;
  height: 130px;
}

.suitsItem p {
  font-size: 12px;
}

.suitsItem label {
  display: block;
  position: relative;
}
.suitsItem label input {
  vertical-align: middle;
}

.suitsItem label span {
  vertical-align: middle;
}

.result {
  border-left: 1px solid #ddd;
  width: 153px;
  height: 165px;
  padding-left: 20px;
  float: left;
}
.num {
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.price-tit {
  font-weight: bold;
  margin-bottom: 10px;
}

.price {
  color: #b1191a;
  font-size: 16px;
  margin-bottom: 10px;
}

.addshopcar {
  background-color: #e1251b;
  border: 1px solid #e1251b;
  padding: 10px 25px;
  font-size: 16px;
  color: #fff;
  display: inline-block;
  box-sizing: border-box;
}

.tab-wraped {
  background: #ededed;
  /* border: 1px solid #ddd; */
  overflow: hidden;
}
.tab-wraped li {
  float: left;
}
.tab-wraped li + li > a {
  border-left: 1px solid #ddd;
}

.tab-wraped li.active a {
  /* border: 0; */
  background: #e1251b;
  color: #fff;
}

.tab-wraped li a {
  display: block;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  padding: 0 11px;
  text-align: center;
  color: #666;
  background: #fcfcfc;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

.tab-pane {
  display: none;
}
.tab-pane.active {
  display: block;
}

.tab-pane:nth-child(1) .goods-intro {
  padding-left: 10px;
}
.tab-pane:nth-child(1) .goods-intro li {
  margin: 10px 0;
}

.tab-pane:nth-child(1) .intro-detail img {
  width: 80%;
  float: right;
}
.tip {
  width: 1190px;
  margin: 0 auto 20px;
  height: 100px;
  font-size: 18px;
  text-align: center;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  line-height: 100px;
}
</style>