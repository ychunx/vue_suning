<template>
  <div class="cart">
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">
          <input
            class="chooseAll"
            type="checkbox"
            :checked="isAllChecked"
          />&nbsp;全选
        </div>
        <div class="cart-th2">商品信息</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="goods in cartInfoList" :key="goods.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="goods.isChecked"
              @change="updateCheck(goods, $event)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="goods.imgUrl" />
            <div class="item-msg">{{ goods.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ goods.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a class="mins" @click="changeSkuNum('mins', goods)">-</a>
            <input
              autocomplete="off"
              type="text"
              :value="goods.skuNum"
              minnum="1"
              class="itxt"
              oninput="value=value.replace(/[^\d]/g,'')"
              @change="changeSkuNum('input', goods, $event.target.value)"
            />
            <a class="plus" @click="changeSkuNum('add', goods)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ goods.skuNum * goods.skuPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none">移到收藏</a>
            <br />
            <a class="sindelet" @click="deleteGoods(goods)">删除</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          :checked="isAllChecked"
          @change="changeAll"
        />
        <span>&nbsp;全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllChecked">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ totalnNum }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em><span>￥</span>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">去结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShopCart",
  data() {
    return {
      isAllChecked: false,
      changeTimer: null,
    };
  },
  methods: {
    getCartDate() {
      this.$store.dispatch("getCartList");
    },
    // 修改产品个数(节流)
    changeSkuNum(type, goods, disNum) {
      if (this.changeTimer) return;
      this.changeTimer = setTimeout(async () => {
        switch (type) {
          case "add":
            disNum = 1;
            break;
          case "mins":
            disNum = goods.skuNum > 1 ? -1 : 0;
            break;
          case "input":
            if (disNum < 1) {
              disNum = 0;
              alert("请输入正确的数量！");
            } else {
              disNum = disNum - goods.skuNum;
            }
            break;
        }
        try {
          await this.$store.dispatch("changeShopCart", {
            skuId: goods.skuId,
            skuNum: disNum,
          });
          this.getCartDate();
        } catch (error) {
          alert(error.message);
        }
        this.changeTimer = null;
      }, 1000);
    },
    // 删除某个产品
    async deleteGoods(goods) {
      try {
        await this.$store.dispatch("deleteCart", goods.skuId);
        this.getCartDate();
        // 刷新顶部固定栏购物车数量
        this.$bus.$emit("fleshCartNum");
      } catch (error) {
        alert(error.message);
      }
    },
    // 修改产品选中状态
    async updateCheck(goods, e) {
      try {
        let isChecked = e.target.checked ? "1" : "0";
        await this.$store.dispatch("updateCheck", {
          skuId: goods.skuId,
          isChecked,
        });
        this.getCartDate();
      } catch (error) {
        alert(error.message);
      }
    },
    // 修改全部产品选中状态
    async changeAll(e) {
      try {
        let isChecked = e.target.checked ? "1" : "0";
        await this.$store.dispatch("changeAll", isChecked);
        this.getCartDate();
      } catch (error) {
        alert(error.message);
      }
    },
    // 删除选中产品
    async deleteAllChecked() {
      try {
        await this.$store.dispatch("deleteAllChecked");
        this.getCartDate();
        // 刷新顶部固定栏购物车数量
        this.$bus.$emit("fleshCartNum");
      } catch (error) {
        alert(error.message);
      }
    },
  },
  mounted() {
    this.getCartDate();
  },
  computed: {
    ...mapGetters(["cartList"]),
    cartInfoList() {
      return this.cartList.cartInfoList || [];
    },
    totalnNum() {
      let sum = 0;
      this.cartInfoList.forEach((item) => {
        if (item.isChecked == 1) {
          sum++;
        }
      });
      // 如果全选了且购物车不为空则勾选
      if (sum == this.cartInfoList.length && sum > 0) {
        this.isAllChecked = true;
      } else {
        this.isAllChecked = false;
      }
      return sum;
    },
    totalPrice() {
      let sum = 0;
      this.cartInfoList.forEach((item) => {
        if (item.isChecked == 1) {
          sum += item.skuNum * item.skuPrice;
        }
      });
      return sum;
    },
  },
};
</script>

<style scoped>
.cart {
  width: 1190px;
  margin: 10px auto;
}
.cart-th {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}
.cart-th > div {
  float: left;
  color: #666;
  font-size: 12px;
}
.cart-th1 {
  width: 25%;
}
.cart-th1 input {
  vertical-align: middle;
}

.cart-th1 span {
  vertical-align: middle;
}
.cart-th2 {
  width: 25%;
}

.cart-th3,
.cart-th4,
.cart-th5,
.cart-th6 {
  width: 12.5%;
}

.cart-body {
  margin: 15px 0;
  border: 1px solid #ddd;
}
.cart-list {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}
.cart-list > li {
  float: left;
  font-size: 12px;
  color: #333;
}

.cart-list-con1 {
  width: 4.1667%;
}

.cart-list-con2 {
  width: 45.8333%;
}
.cart-list-con2 img {
  width: 82px;
  height: 82px;
  float: left;
}

.cart-list-con2 .item-msg {
  float: left;
  width: 400px;
  margin: 0 10px;
  line-height: 18px;
}

.cart-list-con4 {
  width: 12.5%;
}

.cart-list-con5 {
  width: 12.5%;
}
.cart-list-con5 .mins,
.cart-list-con5 .plus {
  border: 1px solid #ddd;
  float: left;
  color: #666;
  width: 15px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  display: block;
  cursor: pointer;
}

.cart-list-con5 .mins {
  border-right: 0;
}
.cart-list-con5 .plus {
  border-left: 0;
}
.cart-list-con5 input {
  border: 1px solid #ddd;
  width: 40px;
  height: 33px;
  float: left;
  text-align: center;
  font-size: 14px;
}

.cart-list-con6 {
  width: 12.5%;
}
.cart-list-con6 .sum {
  font-size: 16px;
}

.cart-list-con7 {
  width: 12.5%;
}
.cart-list-con7 a {
  color: #666;
  cursor: pointer;
}

.cart-tool {
  overflow: hidden;
  border: 1px solid #ddd;
  font-size: 12px;
  color: #333;
}
.select-all {
  padding: 18px 10px;
  overflow: hidden;
  float: left;
}
.select-all span {
  vertical-align: middle;
}

.select-all input {
  vertical-align: middle;
}

.option {
  padding: 18px 10px;
  overflow: hidden;
  float: left;
}
.option a {
  float: left;
  padding: 0 10px;
  color: #666;
  cursor: pointer;
}

.money-box {
  float: right;
}
.money-box .chosed {
  line-height: 40px;
  float: left;
  padding: 0 10px;
}

.money-box .sumprice {
  width: 220px;
  line-height: 32px;
  float: left;
  padding: 0 10px;
}
.sumprice span {
  font-size: 14px;
  color: #f60;
}
.summoney {
  color: #f60;
  font-size: 22px;
}
.cart-tool .sumbtn {
  float: right;
}
.cart-tool .sumbtn a {
  display: block;
  position: relative;
  width: 110px;
  height: 52px;
  line-height: 52px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  font-family: "Microsoft YaHei";
  background: #f60;
  overflow: hidden;
}
</style>