<template>
  <!-- 我的订单二级路由组件 -->
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h3>我的订单</h3>
      </div>
      <div class="chosetype">
        <table>
          <thead>
            <tr>
              <th width="29%">商品</th>
              <th width="31%">订单详情</th>
              <th width="13%">收货人</th>
              <th>金额</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="orders">
        <!-- 表格展示数据 -->
        <table
          class="order-item"
          v-for="order in myOrderList.records"
          :key="order.id"
        >
          <thead>
            <tr>
              <th colspan="5">
                <span class="ordertitle"
                  >{{ order.createTime }}　订单编号：{{ order.outTradeNo }}
                  <span class="pull-right delete"
                    ><img src="../images/delete.png" /></span
                ></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(goods, index) in order.orderDetailList" :key="goods.id">
              <td width="60%">
                <div class="typographic">
                  <img :src="goods.imgUrl" />
                  <a class="block-text">{{ goods.skuName }}</a>
                  <span>x{{ goods.skuNum }}</span>
                  <a class="service">售后申请</a>
                </div>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                width="8%"
                class="center"
                v-if="index == 0"
              >
                {{ order.consignee }}
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                width="13%"
                class="center"
                v-if="index == 0"
              >
                <ul class="unstyled">
                  <li>总金额¥{{ order.totalAmount }}.00</li>
                  <li>微信支付</li>
                </ul>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                width="8%"
                class="center"
                v-if="index == 0"
              >
                <a class="btn">{{ order.orderStatusName }} </a>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                width="13%"
                class="center"
                v-if="index == 0"
              >
                <ul class="unstyled">
                  <li>
                    <a>评价|晒单</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="choose-order">
        <!-- 自封装分页器组件 -->
        <Pagination
          :pageNo="pageNo"
          :pageSize="limit"
          :total="myOrderList.total"
          :continues="5"
          @getPageNo="getPageNo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyOrder",
  data() {
    return {
      pageNo: 1,
      limit: 3,

      // 列表数据
      myOrderList: {},
    };
  },
  methods: {
    async getData() {
      // 直接发请求不使用vuex
      let res = await this.$API.reqMyOrderList(this.pageNo, this.limit);
      if (res.code == 200) {
        this.myOrderList = res.data;
      }
    },
    getPageNo(pageNo) {
      this.pageNo = pageNo;
      this.getData();
    },
  },
  mounted() {
    // 组件挂载后请求数据
    this.getData();
  },
};
</script>

<style>
/* 右边 */
.order-right {
  float: right;
  width: 83.33%;
}
/* 订单部分 */
.order-content {
  margin: 0 20px;
  color: #666;
} /* 标题 */
.title {
  margin-bottom: 22px;
  border: 1px solid #ddd;
}
.title h3 {
  padding: 12px 10px;
  font-size: 15px;
  background-color: #f1f1f1;
}

/* 表头 */
.chosetype {
  margin-bottom: 15px;
  color: #666;
}
.chosetype table {
  border: 1px solid #e6e6e6;
  border-collapse: separate;
  border-radius: 2px;
  width: 100%;
  max-width: 100%;
  border-spacing: 0;
}
.chosetype table th {
  padding: 6px 8px;
  color: #666;
  font-weight: 700;
  vertical-align: bottom;
  background-color: #f4f4f4;
  line-height: 18px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 12px;
  text-align: left;
}

/* 表单内容 */
.orders {
  font-size: 12px;
}
.orders a:hover {
  color: #4cb9fc;
}

.orders table {
  border: 1px solid #e6e6e6;
  border-collapse: collapse;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 18px;
  max-width: 100%;
}
.orders table th {
  padding: 6px 8px;
  line-height: 18px;
  text-align: left;
  vertical-align: bottom;
  background-color: #f4f4f4;
  font-size: 12px;
  color: #666;
}
.pull-right {
  float: right;
  cursor: pointer;
}
.pull-right img {
  margin-right: 10px;
  vertical-align: middle;
}

.orders table td {
  font-size: 12px;
  color: #666;
  padding: 6px 8px;
  line-height: 18px;
  text-align: left;
  vertical-align: middle;
  border: 1px solid #e6e6e6;
}
.orders table td.center {
  text-align: center;
}

.typographic img {
  float: left;
  margin-right: 10px;
  width: 80px;
  height: 80px;
}

.typographic a {
  float: left;
  width: 250px;
  color: #333;
  cursor: pointer;
}
.typographic a:hover {
  color: #f60;
}
.typographic a.service {
  color: #666;
  width: 100px;
}

.typographic span {
  float: left;
  width: 100px;
  text-align: center;
}
</style>