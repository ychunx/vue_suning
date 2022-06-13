<template>
  <!-- 交易订单页 -->
  <div class="main">
    <div class="tradeHeader">
      <div class="logo">
        <router-link to="/home" title="苏宁易购logo">苏宁易购</router-link>
      </div>
      <!-- 当前进度 -->
      <div class="progress">
        <ul>
          <li>
            <i>1</i>
            <span>我的购物车</span>
            <b></b>
          </li>
          <li>
            <i>2</i>
            <span>确认订单</span>
            <b></b>
          </li>
          <li>
            <i>3</i>
            <span>付款</span>
            <b></b>
          </li>
          <li>
            <i>4</i>
            <span>支付成功</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="tradeMain">
      <div class="tradeTitle">收货信息</div>

      <!-- 地址信息 -->
      <div class="tradeAddress">
        <ul>
          <li
            :class="{ active: address.isDefault == 1 }"
            v-for="address in addressList"
            :key="address.id"
            @click="changeDefault(address, addressList)"
          >
            <div class="addressHd">{{ address.consignee }}</div>
            <div class="addressBd">
              {{ address.fullAddress }}，{{ address.phoneNum }}
            </div>
            <div class="addressChange">
              <a>修改</a>
            </div>
            <i></i>
          </li>
        </ul>
      </div>

      <div class="tradeTitle">支付方式</div>
      <div class="payList">
        <div class="active">微信支付<i></i></div>
        <div>苏宁支付<i></i></div>
        <div>支付宝<i></i></div>
      </div>

      <div class="tradeTitle">
        商品及服务信息<router-link to="/shopcart"
          >返回我的购物车修改</router-link
        >
      </div>
      <div class="goodsList">
        <table>
          <thead>
            <tr>
              <th>全部</th>
              <th>服务信息</th>
              <th>单价</th>
              <th>数量</th>
              <th>小计</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="tGoods"
              v-for="(goods, index) in orderInfo.detailArrayList"
              :key="index"
            >
              <td>
                <div class="tGoodsInfo">
                  <img :src="goods.imgUrl" />
                  <div>
                    <a>{{ goods.skuName }}</a>
                    <span>规格：</span>
                  </div>
                </div>
              </td>
              <td>
                <p>为您从外地调货</p>
                <p><span>承诺达</span></p>
                <p>预计 01-01 09:00-21:00 送达<a>修改</a></p>
              </td>
              <td>
                <i>￥</i><span>{{ goods.orderPrice }}.00</span>
              </td>
              <td>{{ goods.skuNum }}</td>
              <td>
                <i>￥</i><span>{{ goods.skuNum * goods.orderPrice }}.00</span>
              </td>
            </tr>
            <tr class="tFooter">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>免运费</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="goodsTip">
        <input type="checkbox" checked />
        部分商品在特定条件下不支持7天无理由退货，确认购买
      </div>

      <div class="tradeTitle">发票信息<a>修改</a></div>
      <div class="invoice">
        <p>
          <span>发票类型： 电子(商品明细)普通发票</span>
          <span
            >发票抬头：{{
              currentAddress.consignee
            }}（电子普通发票与纸质普通发票具有同等法律效力，可作为售后维权凭据、支持报销入账）</span
          >
        </p>
      </div>

      <div class="tradeTitle">结算信息</div>
      <div class="coupon">
        <div>使用优惠券 (无可用优惠券)</div>
        <div>使用苏宁卡/贵宾卡/乐购仕卡</div>
        <div>
          <span class="couponSpan">{{ orderInfo.totalNum }}</span
          >件商品 总计：
          <span
            ><i>￥</i><em>{{ orderInfo.originalTotalAmount }}.00</em></span
          >
        </div>
        <div>
          运费： <span><i>￥</i><em>0.00</em></span>
        </div>
        <div>
          优惠：
          <span
            ><i>-￥</i
            ><em
              >{{
                orderInfo.originalTotalAmount - orderInfo.totalAmount
              }}.00</em
            ></span
          >
        </div>
        <div>
          优惠券卡： <span><i>-￥</i><em>0.00</em></span>
        </div>
      </div>

      <div class="checkoutBox">
        <div>
          应付金额：<span
            ><i>￥</i><em>{{ orderInfo.totalAmount }}.00</em></span
          >
        </div>
        <div>
          收货信息：<span
            >{{ currentAddress.consignee }} {{ currentAddress.phoneNum }}
            {{ currentAddress.userAddress }}</span
          >
        </div>
        <div>支付方式：<span>微信支付</span></div>
        <div>
          提交订单后尽快支付，商品才不会被人抢走哦！<a @click="submitOrder"
            >提交订单</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Trade",
  data() {
    return {
      orderId: "", // 交易订单号
    };
  },
  mounted() {
    // 获取数据
    this.$store.dispatch("getUserAddress");
    this.$store.dispatch("getOrderInfo");
  },
  methods: {
    // 选择地址（后台没有提供设置地址的接口）
    changeDefault(address, addressList) {
      // 拍他
      addressList.forEach((item) => (item.isDefault = 0));
      address.isDefault = 1;
    },

    // 提交订单
    async submitOrder() {
      let { tradeNo } = this.orderInfo;
      let data = {
        consignee: this.currentAddress.consignee, // 姓名
        consigneeTel: this.currentAddress.phoneNum, // 手机号码
        deliveryAddress: this.currentAddress.fullAddress, // 地址
        paymentWay: "ONLINE", // 支付类型
        orderComment: "none", // 订单备注，这里默认无
        orderDetailList: this.orderInfo.detailArrayList, // 商品信息列表
      };
      let res = await this.$API.reqSubmitOrder(tradeNo, data);
      if (res.code == 200) {
        this.orderId = res.data;
        // 下单成功跳转支付页
        this.$router.push(`/pay?orderId=${this.orderId}`);
      } else {
        alert(res.data);
      }
    },
  },
  computed: {
    ...mapState({
      addressList: (state) => state.Trade.addressList,
      orderInfo: (state) => state.Trade.orderInfo,
    }),

    // 计算当前地址，也即是默认地址
    currentAddress() {
      return this.addressList.find((item) => item.isDefault == 0) || {};
    },
  },
};
</script>

<style scoped>
.main {
  width: 1190px;
  margin: 0 auto;
}
.tradeHeader {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
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

.progress li {
  display: inline-block;
  width: 144px;
  height: 51px;
  text-align: center;
  position: relative;
}
.progress li i {
  display: block;
  margin: 0 auto 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
}
.progress li:nth-child(1) i,
.progress li:nth-child(2) i {
  background-color: #fa0;
  color: #fff;
}
.progress li:nth-child(3) i,
.progress li:nth-child(4) i {
  background-color: #e5e5e5;
  color: #bbb;
}
.progress li span {
  font-size: 14px;
  color: #333;
}
.progress li b {
  position: absolute;
  left: 84px;
  top: 9.5px;
  width: 120px;
  height: 5px;
}
.progress li:nth-child(1) b {
  background-color: #fa0;
}
.progress li:nth-child(2) b,
.progress li:nth-child(3) b {
  background-color: #e5e5e5;
}

.tradeMain {
  margin: 10px 0;
}
.tradeTitle {
  height: 36px;
  font-size: 16px;
  font-weight: bold;
  color: #221814;
  line-height: 36px;
}
.tradeTitle a {
  display: inline-block;
  height: 36px;
  font-size: 12px;
  font-weight: normal;
  color: #28e;
  margin-left: 10px;
  vertical-align: top;
  cursor: pointer;
}
.tradeTitle a:hover {
  color: #f60;
}

.tradeAddress li {
  display: inline-block;
  width: 283px;
  height: 110px;
  margin-right: 14.5px;
  margin-bottom: 15px;
  background: url("./images/addr-wide.png") no-repeat;
  padding: 3px 22px 3px 14px;
  font-size: 12px;
  color: #333;
  cursor: pointer;
}
.tradeAddress li.active {
  background: url("./images/addr-selected-wide.png") no-repeat;
  position: relative;
}
.tradeAddress .addressHd {
  height: 29px;
  line-height: 29px;
}
.tradeAddress .addressBd {
  height: 47px;
  padding-top: 3px;
  border-top: 1px dashed #e8e8e8;
  line-height: 23.5px;
}
.tradeAddress .addressChange {
  height: 25px;
  text-align: end;
  font-size: 12px;
}
.tradeAddress .addressChange a {
  color: #28e;
  cursor: pointer;
}
.tradeAddress .addressChange a:hover {
  color: #f60;
}
.tradeAddress .active i {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 23px;
  height: 23px;
  background: url("./images/lion-cart.png") no-repeat;
  background-position: -84px -138px;
}

.payList {
  height: 70px;
}
.payList div {
  width: 222px;
  height: 40px;
  border: 1px solid #ddd;
  font-size: 15px;
  color: #333;
  text-align: center;
  line-height: 40px;
  margin-right: 14px;
  display: inline-block;
  cursor: pointer;
}
.payList div:hover {
  border: 1px solid #fa0;
}
.payList div.active {
  border: 1px solid #fa0;
  position: relative;
}
.payList div.active i {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 17px;
  height: 17px;
  background: url("./images/lion-cart.png") no-repeat;
  background-position: -109px -138px;
}

.goodsList {
  border: 1px solid #eee;
}
.goodsList table {
  width: 100%;
  /* 去掉缝隙 */
  border-collapse: collapse;
}
.goodsList thead {
  background-color: #f8f8f8;
  border-bottom: 1px solid #eee;
}
.goodsList th {
  height: 40.5px;
  line-height: 40.5px;
  font-size: 12px;
  color: #999;
  font-weight: normal;
  border: none;
}
.goodsList th:nth-child(1) {
  padding-left: 30px;
  color: #333;
  font-weight: bold;
  text-align: start;
  width: 396.5px;
}
.goodsList th:nth-child(2) {
  width: 393.5px;
}
.goodsList th:nth-child(3) {
  width: 100px;
  text-align: end;
}
.goodsList th:nth-child(4) {
  width: 154px;
  text-align: end;
  padding-right: 44px;
}
.goodsList th:nth-child(5) {
  width: 144px;
  text-align: end;
  padding-right: 26px;
}
.tGoods {
  height: 86px;
  font-size: 12px;
  color: #333;
}
.tGoods td {
  border-bottom: 1px solid #eee;
}
.tGoods td:nth-child(1) {
  padding-left: 30px;
}
.tGoodsInfo {
  width: 366px;
  height: 60px;
  margin: 15px 0 10px;
}
.tGoodsInfo img {
  width: 60px;
  height: 60px;
}
.tGoodsInfo div {
  display: inline-block;
  width: 295px;
  height: 60px;
  padding-left: 10px;
  vertical-align: top;
}
.tGoodsInfo div a {
  display: inline-block;
  width: 285px;
  white-space: nowrap;
  /* 溢出用省略号 */
  text-overflow: ellipsis;
  overflow: hidden;
}
.tGoodsInfo div a:hover {
  color: #f60;
  cursor: pointer;
}
.tGoodsInfo div span {
  color: #999;
}
.tGoods td:nth-child(2) {
  text-align: center;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.tGoods td:nth-child(2) p {
  height: 20px;
  line-height: 20px;
}
.tGoods td:nth-child(2) p span {
  display: inline-block;
  width: 48px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #f60;
  color: #f60;
}
.tGoods td:nth-child(2) p a {
  color: #28e;
  cursor: pointer;
  margin-left: 5px;
}
.tGoods td:nth-child(3) {
  text-align: end;
}
.tGoods td:nth-child(4) {
  text-align: center;
  padding-left: 44px;
}
.tGoods td:nth-child(5) {
  padding-right: 26px;
  text-align: end;
  font-weight: bold;
}
.tFooter td {
  height: 44px;
  line-height: 44px;
  color: #333;
  font-size: 12px;
  text-align: end;
  padding-right: 26px;
}

.goodsTip {
  height: 32px;
  font-size: 12px;
  color: #333;
  text-align: end;
  line-height: 32px;
  padding-right: 25px;
}
.goodsTip input {
  vertical-align: middle;
}

.invoice {
  height: 58px;
  padding: 19px 29px 5px;
  font-size: 12px;
  color: #333;
  border: 1px solid #eee;
  margin-bottom: 10px;
}
.invoice span {
  margin-right: 160px;
}

.coupon {
  height: 196px;
  font-size: 12px;
  font-weight: bold;
  color: #333;
  border: 1px solid #eee;
  padding: 19px 29px 28px;
}
.coupon > div:nth-child(1),
.coupon > div:nth-child(2) {
  margin-top: 8px;
}
.coupon > div:nth-child(3),
.coupon > div:nth-child(4),
.coupon > div:nth-child(5),
.coupon > div:nth-child(6) {
  height: 25px;
  line-height: 25px;
  text-align: end;
  font-weight: normal;
  color: #999;
}
.coupon span {
  display: inline-block;
  width: 110px;
  color: #333;
  font-weight: bold;
}
.coupon .couponSpan {
  color: #f60;
  font-weight: normal;
}

.checkoutBox {
  height: 164px;
  text-align: end;
  font-size: 14px;
  color: #999;
  padding: 12px 29px;
}
.checkoutBox > div:nth-child(1) {
  margin-top: 7px;
  height: 34px;
  line-height: 34px;
}
.checkoutBox > div:nth-child(1) span {
  color: #f60;
  font-size: 22px;
  font-weight: bold;
}
.checkoutBox > div:nth-child(2) {
  margin-top: 5px;
  height: 22px;
  line-height: 22px;
}
.checkoutBox > div:nth-child(3) {
  height: 22px;
  line-height: 22px;
}
.checkoutBox > div:nth-child(2) span,
.checkoutBox > div:nth-child(3) span {
  color: #333;
}
.checkoutBox > div:nth-child(4) {
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  color: #fa0;
}
.checkoutBox > div:nth-child(4) a {
  display: inline-block;
  width: 105px;
  height: 40px;
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 40px;
  background-color: #f60;
  border-radius: 2px;
  cursor: pointer;
}
.checkoutBox > div:nth-child(4) a:hover {
  background-color: #f40;
}
</style>