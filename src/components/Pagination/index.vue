<template>
  <!-- 分页器组件 -->
  <div class="pagination">
    <!-- 上一页 -->
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      &lt;
    </button>

    <!-- 如果连续页码起始页数不大于1则不显示 -->
    <button v-show="continueNum.start > 1" @click="$emit('getPageNo', 1)">
      1
    </button>

    <button v-show="continueNum.start > 2">···</button>

    <!-- 连续页码 -->
    <button
      v-for="(num, index) in continueNum.end"
      :key="index"
      v-show="num >= continueNum.start"
      @click="$emit('getPageNo', num)"
      :class="{ active: pageNo == num }"
    >
      {{ num }}
    </button>

    <!-- 连续页码最后一页小于总页码-1才显示 -->
    <button v-show="continueNum.end < pagesSum - 1">···</button>

    <!-- 最后一页页码，连续页码不包括才显示 -->
    <button
      v-show="continueNum.end < pagesSum"
      @click="$emit('getPageNo', pagesSum)"
    >
      {{ pagesSum }}
    </button>

    <!-- 下一页 -->
    <button
      :disabled="pagesSum == pageNo"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      &gt;
    </button>

    <div>
      <div>
        <span>共 {{ pagesSum }} 页</span>
        <div>
          <span>跳转到</span>
          <!-- 只能输入数字 -->
          <input oninput="value=value.replace(/[^\d]/g,'')" v-model="pnum" />
        </div>
        <button @click="goPage">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  // 接受当前页码、每页多少项、总共多少项数据、连续页码尺寸
  props: ["pageNo", "pageSize", "total", "continues"],
  data() {
    return {
      pnum: "",
    };
  },
  methods: {
    goPage() {
      if (parseInt(this.pnum) > this.pagesSum || parseInt(this.pnum) < 1) {
        alert("请输入正确的页码！");
        return;
      }
      this.$emit("getPageNo", parseInt(this.pnum));
      this.pnum = "";
    },
  },
  computed: {
    // 根据总项数和每页项数计算页数
    pagesSum() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 获取连续始末页码
    continueNum() {
      const { continues, pageNo, pagesSum } = this;
      let start = 0,
        end = 0;
      // 如果总页数小于连续页数
      if (continues > pagesSum) {
        start = 1;
        end = pagesSum;
      } else {
        // 根据连续尺寸计算相对于当前页码的始末页码
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        // 保证第一页码为大于1
        if (start < 1) {
          start = 1;
          end = continues;
        }
        // 保证页码不超过总页数
        if (end > pagesSum) {
          start = pagesSum - continues + 1;
          end = pagesSum;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style scoped>
.pagination {
  text-align: center;
  margin: 50px 0;
}
.pagination button {
  min-width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  margin: 0 5px;
  background-color: #f8f8fa;
  color: #666;
  outline: none;
  border-radius: 2px;
  padding: 0 4px;
  vertical-align: top;
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border: 0;
  transition: all 0.2s linear;
}
.pagination button:hover {
  background-color: #e5e5e5;
}
.pagination button:first-child,
.pagination button:nth-last-child(2) {
  font-weight: 300;
  font-size: 32px;
  color: #9b9b9b;
}
.pagination button[disabled] {
  color: #c0c4cc;
  cursor: not-allowed;
}
.pagination button.active {
  cursor: not-allowed;
  background-color: #6a6a6f;
  color: #fff;
  font-weight: bold;
}

.pagination > div {
  height: 40px;
  width: 300px;
  line-height: 40px;
  font-size: 14px;
  color: #666;
  display: inline-block;
}
.pagination > div > div {
  text-align: center;
  display: flex;
}
.pagination > div > div > span {
  margin-right: 5px;
}
.pagination > div > div > div {
  box-sizing: border-box;
  border: 1px solid #ddd;
  text-align: center;
  height: 40px;
  overflow: hidden;
}
.pagination > div > div > div span {
  display: inline-block;
  border-right: 1px solid #ddd;
  padding: 0px 10px;
}
.pagination > div input {
  display: inline-block;
  padding: 11px 0 0 10px;
  width: 45px;
  font-weight: bolder;
  vertical-align: top;
  font-size: 16px;
}
.pagination > div button {
  width: 50px;
}
.pagination > div button:hover {
  background-color: #6a6a6f;
  color: #fff;
}
</style>