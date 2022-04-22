<template>
  <div class="footerBox">
    <div class="w">
      <div class="iconBoxs">
        <div class="iconBox">
          <div class="icons">
            <img src="./images/footerIcon1.jpg" />
          </div>
          <div class="iconP">
            <a href="#">正品保障</a>
            <p>正品保障、提供发票</p>
          </div>
        </div>
        <div class="iconBox">
          <div class="icons">
            <img src="./images/footerIcon2.jpg" />
          </div>
          <div class="iconP">
            <a href="#">急速物流</a>
            <p>如约送货、送货入户</p>
          </div>
        </div>
        <div class="iconBox">
          <div class="icons">
            <img src="./images/footerIcon3.jpg" />
          </div>
          <div class="iconP">
            <a href="#">售后无忧</a>
            <p>30天包退、365天包换</p>
          </div>
        </div>
        <div class="iconBox">
          <div class="icons">
            <img src="./images/footerIcon4.jpg" />
          </div>
          <div class="iconP">
            <a href="#">帮助中心</a>
            <p>您的购物指南</p>
          </div>
        </div>
        <div class="iconBox">
          <div class="icons">
            <img src="./images/footerIcon5.png" />
          </div>
          <div class="iconP">
            <a href="#">省心购</a>
            <p>专注好服务</p>
          </div>
        </div>
      </div>
      <div class="helpBoxs">
        <div class="helpBox">
          <div>
            <p>购物指南</p>
            <ul>
              <li><a href="#">免费注册</a></li>
              <li><a href="#">会员等级</a></li>
              <li><a href="#">常见问题</a></li>
            </ul>
          </div>
          <div>
            <p>支付方式</p>
            <ul>
              <li><a href="#">苏宁支付</a></li>
              <li><a href="#">网银支付</a></li>
              <li><a href="#">快捷支付</a></li>
              <li><a href="#">分期付款</a></li>
              <li><a href="#">货到付款</a></li>
              <li><a href="#">任性付支付</a></li>
            </ul>
          </div>
          <div>
            <p>物流配送</p>
            <ul>
              <li><a href="#">运费政策</a></li>
              <li><a href="#">物流配送服务</a></li>
              <li><a href="#">签收验货</a></li>
              <li><a href="#">物流查询</a></li>
            </ul>
          </div>
          <div>
            <p>售后服务</p>
            <ul>
              <li><a href="#">退换货政策</a></li>
              <li><a href="#">贵就赔</a></li>
              <li><a href="#">维修/安装</a></li>
              <li><a href="#">订单修改</a></li>
              <li><a href="#">退换货申请</a></li>
              <li><a href="#">我的发票</a></li>
            </ul>
          </div>
          <div>
            <p>商家服务</p>
            <ul>
              <li><a href="#">合作招商</a></li>
              <li><a href="#">培训中心</a></li>
              <li><a href="#">广告服务</a></li>
              <li><a href="#">商家帮助</a></li>
              <li><a href="#">服务市场</a></li>
              <li><a href="#">规则中心</a></li>
            </ul>
          </div>
        </div>
        <div class="helpDownBox">
          <p>身边苏宁</p>
          <div>
            全国300多个城市，上万个门店和服务终端期待您的光临，为您提供贴心的服务！
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBox",
};
</script>

<style scoped>
/* footer上面模块 */
.footerBox {
  background-color: #f5f5f5;
  height: 290px;
}

.iconBoxs {
  padding: 20px 0 12px 0;
  display: flex;
  justify-content: center;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
}

.iconBox {
  height: 48px;
  flex: 1;
  padding: 0 30px;
  display: flex;
}

.icons {
  width: 48px;
  height: 48px;
  margin-right: 8px;
}

.iconBox .icons img {
  width: 48px;
  height: 48px;
}

.iconP {
  flex: 1;
  flex-direction: column;
  line-height: 24px;
}

.iconBox .iconP a {
  display: block;
  color: #333;
  font-size: 14px;
  font-weight: bold;
}

.iconBox .iconP a:hover {
  color: #f60;
}

.iconBox .iconP p {
  display: block;
  text-align: start;
  font-size: 12px;
  color: #545454;
}

/* footer help服务 */
.helpBoxs {
  height: 190px;
  display: flex;
  padding-top: 10px;
}

.footerBox .helpBoxs p {
  color: #545454;
  font-size: 14px;
  font-weight: bold;
  height: 35px;
  line-height: 35px;
  text-align: start;
}

.helpBox {
  flex: 1;
  display: flex;
}

.helpBox > div {
  flex: 1;
  /* display: flex; */
  flex-direction: column;
}

.helpBox > div a {
  font-size: 12px;
  color: #545454;
  height: 22px;
}

.helpBox > div a:hover {
  color: #f60;
}

.helpDownBox {
  width: 140px;
  height: 200px;
}

.helpDownBox div {
  width: 90px;
  color: #333;
  font-size: 12px;
}
</style>