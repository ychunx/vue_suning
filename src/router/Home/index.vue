<template>
  <div class="main">
    <!-- banner模块 start -->
    <div class="banner" :style="{ background: bannerColor }">
      <div class="w">
        <div class="bannerImgs swiper-container" id="mySwiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="carousel in bannerList"
              :key="carousel.id"
            >
              <img :src="carousel.imgUrl" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev" @click="changeColorPrev"></div>
          <div class="swiper-button-next" @click="changeColorNext"></div>
        </div>
        <div class="bannerFour">
          <ul>
            <li>
              <a href="#">
                <img src="./images/four1.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/four2.jpg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/four3.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/four4.png" />
              </a>
            </li>
          </ul>
        </div>
        <div class="bannerRight">
          <div class="topBox">
            <div class="userImg">
              <a href="#">
                <img src="" />
              </a>
            </div>
            <div class="notLogin">
              <div class="btnGroup">
                <p class="hi">Hi，欢迎来到苏宁易购</p>
                <a href="#">登录</a>
                <i>|</i>
                <a href="#">注册</a>
              </div>
              <a href="#">199新人专享</a>
              <a href="#">开通super尊享特权</a>
            </div>
            <div class="threeEntry">
              <a href="#"><img src="./images/box1.png" alt="" />领红包</a>
              <a href="#"><img src="./images/box2.png" alt="" />领云钻</a>
              <a href="#"><img src="./images/box3.png" alt="" />抢神券</a>
            </div>
          </div>
          <div class="botBox">
            <ul>
              <li>
                <a href="#"><img src="./images/box4.png" alt="" />话费充值</a>
              </li>
              <li>
                <a href="#"><img src="./images/box5.png" alt="" />水电煤</a>
              </li>
              <li>
                <a href="#"><img src="./images/box6.png" alt="" />苏宁卡</a>
              </li>
              <li>
                <a href="#"><img src="./images/box7.png" alt="" />理财</a>
              </li>
              <li>
                <a href="#"><img src="./images/box8.png" alt="" />分期</a>
              </li>
              <li>
                <a href="#"><img src="./images/box9.png" alt="" />苏宁公益</a>
              </li>
              <li>
                <a href="#"><img src="./images/box10.png" alt="" />加油卡</a>
              </li>
              <li>
                <a href="#"><img src="./images/box11.png" alt="" />以旧换新</a>
              </li>
              <li>
                <a href="#"><img src="./images/box12.png" alt="" />保险</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- banner模块 end -->

    <!-- floatBar 模块 start -->
    <div class="floatBar" v-show="floatBarShow">
      <ul>
        <li :class="{ active: isSelected == 1 }" @click="goMod(1)">限时秒杀</li>
        <li :class="{ active: isSelected == 2 }" @click="goMod(2)">领券中心</li>
        <li :class="{ active: isSelected == 3 }" @click="goMod(3)">直播拼购</li>
        <li :class="{ active: isSelected == 4 }" @click="goMod(4)">频道广场</li>
        <li :class="{ active: isSelected == 5 }" @click="goMod(5)">猜你喜欢</li>
      </ul>
      <a href="#">顶部</a>
      <a href="#">暴恐举报</a>
    </div>
    <!-- floatBar 模块 end -->

    <!-- 推荐模块 start -->
    <div class="recoms w">
      <div class="recom">
        <p>限时秒杀</p>
        <div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
        </div>
      </div>
      <div class="recom">
        <p>大聚惠</p>
        <div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
        </div>
      </div>
      <div class="recom">
        <p>领券中心</p>
        <div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
        </div>
      </div>
      <div class="recom">
        <p>推荐榜单</p>
        <div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
        </div>
      </div>
      <div class="recom">
        <p>苏宁直播</p>
        <div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
        </div>
      </div>
      <div class="recom">
        <p>苏宁拼购</p>
        <div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
          <div>
            <img src="./images/goods.jpg" alt="" />
            <h1>昕昕卫生间纸巾盒厕纸置物架</h1>
            <h2><i>&yen;</i><em>9.90</em><i>&yen;</i><em>19.90</em></h2>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐模块 end -->

    <!-- 顶部固定栏 -->
    <FixBar />
  </div>
</template>

<script>
import FixBar from "@/components/FixBar";
import { mapState } from "vuex";
import Swiper from "swiper";
export default {
  name: "Home",
  components: {
    FixBar,
  },
  data() {
    return {
      bannerColor: "#f91d25",
      bannerIndex: 0,
      //floatBar相关，显示和防抖
      floatBarShow: false,
      floatTimer: null,
      isSelected: 1,
    };
  },
  methods: {
    changeColorPrev() {
      if (this.bannerIndex <= 0) {
        this.bannerIndex = 7;
      } else {
        this.bannerIndex--;
      }
      this.bannerColor = this.bannerList[this.bannerIndex].color;
    },
    changeColorNext() {
      if (this.bannerIndex >= 7) {
        this.bannerIndex = 0;
      } else {
        this.bannerIndex++;
      }
      this.bannerColor = this.bannerList[this.bannerIndex].color;
    },
    // 设置滚动监听，决定floatBar显示与否
    scroll() {
      //防抖定时器
      this.floatTimer = setTimeout(() => {
        let top = Math.floor(
          window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop
        );
        if (top >= 500) {
          this.floatBarShow = true;
          if (top >= 1700) {
            this.isSelected = 5;
          } else if (top >= 1400) {
            this.isSelected = 4;
          } else if (top >= 1100) {
            this.floatBarShow = true;
            this.isSelected = 3;
          } else if (top >= 800) {
            this.floatBarShow = true;
            this.isSelected = 2;
          } else if (top >= 500) {
            this.floatBarShow = true;
            this.isSelected = 1;
          }
        } else {
          this.floatBarShow = false;
        }
      }, 10);
    },
    // floatBar点击跳转
    goMod(i) {
      switch (i) {
        case 2:
          this.animate(window, 900);
          break;
        case 3:
          this.animate(window, 1200);
          break;
        case 4:
          this.animate(window, 1500);
          break;
        case 5:
          this.animate(window, 1800);
          break;
        default:
          this.animate(window, 600);
      }
    },
    // floatBar跳转动画
    animate(obj, target, callback) {
      clearInterval(obj.timer);
      obj.timer = setInterval(() => {
        let step = (target - window.pageYOffset) / 10;
        // 支持反转动画
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset == target) {
          clearInterval(obj.timer);
          callback && callback();
        }
        window.scroll(0, window.pageYOffset + step);
      }, 10);
    },
  },
  mounted() {
    // 获取banner图
    this.$store.dispatch("bannerList");

    // 设置滚动监听，决定floatBar显示与否
    window.addEventListener("scroll", () => {
      clearTimeout(this.floatTimer);
      this.scroll();
    });
  },
  computed: {
    ...mapState({
      bannerList: (state) => state.Home.bannerList,
    }),
  },
  watch: {
    bannerList: {
      handler(newV, oldV) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(
            document.querySelector(".swiper-container"),
            {
              effect: "fade",
              loop: true,
              pagination: {
                el: ".swiper-pagination",
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            }
          );
        });
      },
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 1200px) {
  .banner .bannerRight {
    display: none;
  }
}

/* banner模块 */
.main {
  background-color: #f2f2f2;
}

.banner {
  display: block;
  width: 100%;
  height: 476px;
  transition: all 0.2s linear;
}

.banner .w {
  position: relative;
  height: 476px;
}

/* banenr 图 */
.bannerImgs {
  position: absolute;
  top: 0;
  left: 200px;
  width: 794px;
}

.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 130px;
}

/* banner 图区域 */
.bannerFour {
  position: absolute;
  bottom: 5px;
  left: 204px;
  height: 112px;
  width: 786px;
  z-index: 2;
}

.bannerFour ul {
  display: flex;
  justify-content: space-around;
}

.bannerFour li {
  border-radius: 6px;
  overflow: hidden;
}

.bannerFour a {
  display: block;
  width: 100%;
  height: 100%;
}

.bannerFour img {
  height: 112px;
  flex: 1;
}

.bannerRight {
  position: absolute;
  top: 0;
  left: 994px;
  width: 196px;
  height: 476px;
  background-color: #fff;
}

.topBox {
  height: 225px;
  width: 196px;
  position: relative;
}

.userImg {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 48px;
  height: 48px;
}

.userImg img {
  width: 100%;
  height: 100%;
}

.notLogin {
  width: 196px;
  height: 140px;
  overflow: hidden;
}

.btnGroup {
  position: absolute;
  top: 15px;
  right: 5px;
  line-height: 12px;
  font-size: 12px;
}

.btnGroup p {
  display: block;
  height: 22px;
}

.btnGroup p,
.btnGroup a,
.btnGroup i {
  color: #333;
}

.btnGroup a:hover {
  color: #f60;
}

.notLogin > a {
  display: block;
  width: 156px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  border-radius: 3px;
  font-size: 12px;
}

.notLogin > a:nth-child(2) {
  color: #fff;
  background-color: #ff8000;
  margin: 70px 20px 0 20px;
}

.notLogin > a:last-child {
  color: #fada99;
  background-color: #19145c;
  margin: 10px 20px 0 20px;
}

.threeEntry {
  height: 85px;
  width: 196px;
  color: #333;
  font-size: 14px;
  display: flex;
}

.threeEntry a {
  display: block;
  flex: 1;
  text-align: center;
}

.threeEntry a:hover {
  color: #f60;
}

.threeEntry img {
  width: 36px;
  height: 36px;
  display: block;
  margin: 6px auto;
}

.botBox {
  display: flex;
  width: 196px;
  height: 251px;
}

.botBox ul {
  display: flex;
  text-align: center;
  flex-wrap: wrap;
}

.botBox ul li {
  width: 33.33%;
  transition: all 0.2s linear;
}

.botBox ul li:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  margin-top: -3px;
}

.botBox img {
  display: block;
  width: 26px;
  height: 26px;
  margin: 12px auto;
}

.botBox a {
  color: #333;
  font-size: 14px;
  transition: all 0.2s linear;
}

.botBox ul li:hover a {
  color: #f60;
}

/* floatBar 浮动模块 */
.floatBar {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -106px;
  margin-left: -670px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  width: 70px;
  height: 212px;
  padding-top: 9px;
  font-size: 12px;
  color: #333;
  z-index: 10;
}

.floatBar li {
  width: 68px;
  height: 29px;
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
  line-height: 28px;
  cursor: pointer;
  transition: all 0.2s linear;
}

.floatBar li.active {
  color: #fff;
  background-color: #f60;
}
.floatBar li:hover {
  color: #fff;
  background-color: #f60;
}

.floatBar a {
  display: block;
  width: 68px;
  height: 28px;
  line-height: 28px;
  text-align: center;
}

.floatBar a:hover {
  color: #f60;
}

.floatBar a:nth-child(2) {
  color: #f60;
}

/* 推荐模块 */
.recoms {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.recom {
  width: 590px;
  background-color: #fff;
  border-radius: 12px;
  margin-top: 10px;
}

.recom p {
  display: inline-block;
  height: 60px;
  font-size: 24px;
  color: #333;
  font-weight: bold;
  text-align: start;
  padding: 10px 0 0 16px;
}

.recom p:hover {
  cursor: pointer;
  color: #f60;
}

.recom > div {
  display: flex;
}

.recom > div div {
  padding: 0 10px;
}

.recom > div div:hover {
  cursor: pointer;
}

.recom > div div:hover h1 {
  color: #f60;
}

.recom > div h1 {
  font-size: 14px;
  color: #333;
  font-weight: normal;
  display: block;
  overflow: hidden;
  height: 20px;
  line-height: 20px;
}

.recom > div h2 {
  font-size: 12px;
  color: #999;
  font-weight: normal;
  margin: 4px;
}

.recom img {
  display: block;
  width: 150px;
  margin: 0 auto 10px;
}

.recom > div h2 i:first-child {
  color: #f30;
  font-weight: bold;
}

.recom > div h2 em:nth-child(2) {
  color: #f30;
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
}

.recom > div h2 i:nth-child(3),
.recom > div h2 em:last-child {
  text-decoration: line-through;
}
</style>