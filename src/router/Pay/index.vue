<template>
  <div>
    <div class="payHeader">
      <div class="w">
        <div>
          <span title="苏宁支付收银台" class="logo"></span><span>收银台</span>
        </div>
        <div>
          支付账户：{{ userInfo.loginName }}<i>|</i><a>帮助中心</a><i>|</i
          ><a>提建议</a><i>|</i><em>服务电话：95177</em>
        </div>
      </div>
    </div>
    <div class="payMain">
      <div class="w">
        <div class="payMainHd">
          <div class="goodsName">
            <div>订单号：{{ orderId }}</div>
            <div>
              收款方：苏宁易购销售有限公司<a>详情</a>
              <div class="goodsList">
                <div>
                  <div class="goodsListHd">商品信息</div>
                  <div class="goodsListHd">单价</div>
                  <div class="goodsListHd">数量</div>
                </div>
                <div
                  class="goods"
                  v-for="goods in goodsList"
                  :key="goods.skuId"
                >
                  <img :src="goods.imgUrl" />
                  <div>{{ goods.skuName }}</div>
                  <div>{{ goods.orderPrice }}</div>
                  <div>{{ goods.skuNum }}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            订单金额 <span>{{ payInfo.totalFee }}.00</span> 元 <a>刷新</a>
          </div>
        </div>
        <div class="payMainBd">
          <div>
            <img :src="QRCodeUrl" />
          </div>
          <div class="payMainButton">
            <a @click="alert('请联系管理员')">遇见问题</a>
            <a @click="queryStatus">支付成功</a>
          </div>
        </div>
        <div class="mask" v-if="successShow">
          <div>
            <p>支付成功！</p>
            <router-link to="/center">查看订单</router-link>
            <router-link to="/home">回到首页</router-link>
          </div>
        </div>
        <div class="mask" v-if="failShow">
          <div>
            <p>还未支付成功哦~</p>
            <a @click="failShow = false">继续支付</a>
          </div>
        </div>
      </div>
    </div>
    <div class="payFooter">
      <div class="w">
        <p>Copyright©2020-2022深圳市云网万店电子商务有限公司版权所有</p>
        <p>
          粤ICP备2021027996号 苏B2-20100316 出版物经营许可证新出发苏批字第A-243
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  name: "Pay",
  data() {
    return {
      payInfo: {},
      QRCodeUrl: "",
      goodsList: [],
      userInfo: {},
      timer: null,
      successShow: false,
      failShow: false,
    };
  },
  methods: {
    async getPayInfo() {
      let res = await this.$API.reqPayInfo(this.orderId);
      if (res.code == 200) {
        this.payInfo = res.data;
        this.getQRCode();
        this.getGoodsInfo();
        this.getUserInfo();
      }
    },
    async getQRCode() {
      let QRCodeUrl = await QRCode.toDataURL(this.payInfo.codeUrl);
      this.QRCodeUrl = QRCodeUrl;
    },
    async getGoodsInfo() {
      let res = await this.$API.reqOrderInfo();
      if (res.code == 200) {
        this.goodsList = res.data.detailArrayList;
      }
    },
    async getUserInfo() {
      let res = await this.$API.reqUserInfo();
      if (res.code == 200) {
        this.userInfo = res.data;
      }
    },
    async queryStatus() {
      let res = await this.$API.reqPayStatus(this.payInfo.orderId);
      // 开发中直通
      if (true || res.code == 200) {
        clearInterval(this.timer);
        this.timer = true;
        this.successShow = true;
        this.failShow = false;
      } else {
        this.successShow = false;
        this.failShow = true;
      }
    },
  },
  computed: {
    orderId() {
      return this.$route.query.orderId;
    },
  },
  mounted() {
    this.getPayInfo();
    if (!this.timer) {
      this.timer = setInterval(async () => {
        let res = await this.$API.reqPayStatus(this.payInfo.orderId);
        if (res.code == 200) {
          clearInterval(this.timer);
          this.timer = true;
          this.successShow = true;
        } else {
          this.successShow = false;
        }
      }, 1000);
    }
  },
};
</script>

<style scoped>
.payHeader {
  height: 60px;
  padding: 19px 0;
  box-shadow: 9px 9px 18px #e5e5e5;
}
.payMain {
  background-color: #f5f5f5;
  margin-top: 6px;
}
.payFooter {
  height: 67px;
  padding: 12px 0 7px;
}
.w {
  width: 990px;
  margin: 0 auto;
}

.payHeader .w {
  display: flex;
  justify-content: space-between;
  color: #333;
}
.logo {
  display: inline-block;
  width: 106px;
  height: 22px;
  background: url("./images/logo.png") no-repeat;
}
.logo + span {
  display: inline-block;
  vertical-align: top;
  padding-left: 10px;
  line-height: 26px;
}
.payHeader .w > div:last-child {
  font-size: 12px;
  line-height: 26px;
}
.payHeader .w > div:last-child i {
  margin: 0 10px;
}
.payHeader .w > div:last-child a:hover {
  cursor: pointer;
  color: #39f;
}

.payMainHd {
  height: 102px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goodsName {
  width: 260px;
  height: 50px;
}
.goodsName div:first-child {
  width: 185px;
  color: #333;
  padding-bottom: 8px;
  line-height: 24px;
  white-space: nowrap;
  /* 溢出用省略号 */
  text-overflow: ellipsis;
  overflow: hidden;
}
.goodsName div:last-child {
  color: #666;
  font-size: 12px;
  position: relative;
}
.payMainHd a {
  padding-left: 20px;
  color: #39f;
  cursor: pointer;
}
.goodsName + div {
  height: 36px;
  font-size: 12px;
  line-height: 36px;
}
.payMainHd span {
  font-size: 24px;
  color: #f60;
}
.goodsList {
  position: absolute;
  top: 30px;
  left: 5px;
  width: 980px;
  height: 390px;
  background-color: #fff;
  display: none;
}
.payMainHd a:hover + div {
  display: block;
}
.goodsList > div:first-child {
  display: flex;
  justify-content: space-between;
  width: 980px;
}
.goodsListHd {
  text-align: center;
  flex: 1;
  line-height: 20px;
}
.goodsListHd:first-child {
  flex: 5;
}
.goods {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 980px;
}
.goods img {
  width: 50px;
  height: 50px;
}
.goods div:nth-child(2) {
  flex: 5;
  padding: 5px 10px 10px;
}
.goods div:nth-child(3),
.goods div:nth-child(4) {
  flex: 1;
  text-align: center;
  line-height: 50px;
}

.payMainBd {
  width: 985px;
  height: 500px;
  padding: 15px 0 30px;
  margin: 0 auto;
  margin-bottom: 55px;
  background-color: #fff;
  box-shadow: 0px 0px 8px #e8e8e8;
}
.payMainBd img {
  display: block;
  width: 200px;
  height: 200px;
  margin: 100px auto 105px;
}
.payMainButton {
  height: 50px;
  text-align: center;
}
.payMainButton a {
  display: inline-block;
  width: 180px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}
.payMainButton a:first-child {
  margin-right: 20px;
  border: 1px solid #e5e5e5;
  box-shadow: 1px 2px 8px #e8e8e8;
  border-radius: 2px;
}
.payMainButton a:last-child {
  background-color: #39f;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 1px 2px 8px #7dd2f4;
  border-radius: 2px;
}

.payFooter p {
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  color: #333;
}

.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
}
.mask > div {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  margin-top: -50px;
  margin-left: -150px;
  background-color: #fff;
}
.mask > div p {
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.mask > div a {
  display: block;
  text-align: center;
  width: 100px;
  height: 30px;
  margin: 10px auto;
  background-color: #39f;
  line-height: 30px;
  color: #fff;
  cursor: pointer;
}
</style>