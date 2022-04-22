<template>
  <nav class="nav w">
    <div class="dropdown">
      <div class="dt">分类</div>
      <div class="dd">
        <ul>
          <li>
            <img src="./images/1.png" /><a href="#">手机</a><em>/</em
            ><a href="#">运营商</a>
          </li>
          <li>
            <img src="./images/2.png" /><a href="#">家用电器</a><em>/</em
            ><a href="#">帮客</a>
          </li>
          <li>
            <img src="./images/3.png" /><a href="#">厨卫</a><em>/</em
            ><a href="#">生活家电</a><em>/</em><a href="#">厨具</a>
          </li>
          <li>
            <img src="./images/4.png" /><a href="#">电脑办公</a><em>/</em
            ><a href="#">相机</a>
          </li>
          <li>
            <img src="./images/5.png" /><a href="#">家具</a><em>/</em
            ><a href="#">家装</a><em>/</em><a href="#">家纺</a><em>/</em
            ><a href="#">灯具</a>
          </li>
          <li>
            <img src="./images/6.png" /><a href="#">食品</a><em>/</em
            ><a href="#">酒水</a><em>/</em><a href="#">生鲜</a><em>/</em
            ><a href="#">特产</a>
          </li>
          <li>
            <img src="./images/7.png" /><a href="#">美妆</a><em>/</em
            ><a href="#">个护</a><em>/</em><a href="#">清洁</a><em>/</em
            ><a href="#">宠物</a>
          </li>
          <li>
            <img src="./images/8.png" /><a href="#">母婴</a><em>/</em
            ><a href="#">玩具</a><em>/</em><a href="#">车床</a><em>/</em
            ><a href="#">童装</a>
          </li>
          <li>
            <img src="./images/9.png" /><a href="#">运动</a><em>/</em
            ><a href="#">户外</a><em>/</em><a href="#">内衣</a><em>/</em
            ><a href="#">鞋靴</a>
          </li>
          <li>
            <img src="./images/10.png" /><a href="#">女装</a><em>/</em
            ><a href="#">男装</a><em>/</em><a href="#">家具</a><em>/</em
            ><a href="#">家装</a>
          </li>
          <li>
            <img src="./images/11.png" /><a href="#">箱包</a><em>/</em
            ><a href="#">钟表</a><em>/</em><a href="#">珠宝</a><em>/</em
            ><a href="#">艺术</a>
          </li>
          <li>
            <img src="./images/12.png" /><a href="#">汽车</a><em>/</em
            ><a href="#">电摩</a><em>/</em><a href="#">汽车用品</a>
          </li>
          <li>
            <img src="./images/13.png" /><a href="#">图书</a><em>/</em
            ><a href="#">艺术</a><em>/</em><a href="#">原版</a><em>/</em
            ><a href="#">文学</a>
          </li>
          <li>
            <img src="./images/14.png" /><a href="#">医药健康</a><em>/</em
            ><a href="#">计生情趣</a>
          </li>
          <li>
            <img src="./images/15.png" /><a href="#">理财</a><em>/</em
            ><a href="#">分期</a><em>/</em><a href="#">便民</a>
          </li>
        </ul>
      </div>
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
export default {
  name: "Nav",
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
}

.dropdown .dt {
  width: 100%;
  height: 100%;
  line-height: 38px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  padding-left: 34px;
}

.dropdown .dt:hover {
  cursor: pointer;
}

.dropdown .dd {
  width: 200px;
  height: 476px;
  background-color: #fff;
  font-size: 14px;
}

.dd li {
  height: 31px;
  padding: 0 6px 0 28px;
  position: relative;
}

.dd li:hover {
  background-color: #f3f3f3;
}

.dd li img {
  position: absolute;
  top: 7px;
  left: 6px;
  width: 16px;
  height: 16px;
}

.dd li a,
.dd li em {
  position: relative;
  top: 2px;
}

.dd li a {
  display: inline-block;
  line-height: 29px;
  /* 字间距 */
  letter-spacing: 1px;
  color: #000;
}

.dd li a:hover {
  color: #f60;
}

.dd em {
  margin: 0 3px;
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