<template>
  <div class="clearfix selector">
    <div class="type-wrap logo">
      <div class="fl key brand">品牌</div>
      <div class="value logos">
        <ul class="logo-list">
          <li v-for="tm in trademarkList" :key="tm.tmId" @click="tmClick(tm)">
            {{ tm.tmName }}
          </li>
        </ul>
      </div>
      <div class="ext">
        <a class="sui-btn">多选</a>
        <a>更多</a>
      </div>
    </div>
    <div class="type-wrap" v-for="attr in attrsList" :key="attr.attrId">
      <div class="fl key">{{ attr.attrName }}</div>
      <div class="fl value">
        <ul class="type-list">
          <li
            v-for="(v, index) in attr.attrValueList"
            :key="index"
            @click="attrClick(attr, v)"
          >
            <a>{{ v }}</a>
          </li>
        </ul>
      </div>
      <div class="fl ext"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SearchSelector",
  computed: {
    ...mapGetters(["trademarkList", "attrsList"]),
  },
  methods: {
    tmClick(tm) {
      this.$emit("tmInfo", tm);
    },
    attrClick(attr, v) {
      this.$emit("attrInfo", attr, v);
    },
  },
};
</script>

<style scoped>
.selector {
  margin-bottom: 5px;
  overflow: hidden;
  font-size: 12px;
}
.selector a:hover {
  cursor: pointer;
  color: #f60;
  transition: all 0.2s linear;
}
.selector .logo {
  border-top: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
}

.type-wrap {
  margin: 0;
  position: relative;
  border-top: 1px solid #ddd;
  overflow: hidden;
}
.type-wrap .key {
  width: 100px;
  line-height: 26px;
  text-align: start;
  padding: 10px 10px 0 15px;
  float: left;
}
.type-wrap .value {
  overflow: hidden;
  padding: 10px 90px 10px 15px;
  color: #333;
}
.logo-list li {
  float: left;
  margin: 1px 1px;
  width: 105px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  color: #f60;
  font-size: 12px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.logo-list li:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.13), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  /* margin-top: -3px; */
}
.logo-list li img {
  max-width: 100%;
  vertical-align: middle;
}
.type-list li {
  float: left;
  display: block;
  margin-right: 30px;
  line-height: 26px;
}
.type-list li a {
  text-decoration: none;
  color: #666;
}

.type-wrap .ext {
  position: absolute;
  top: 10px;
  right: 10px;
}
.type-wrap .ext .sui-btn {
  display: inline-block;
  margin-bottom: 0;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  padding: 0 10px;
  background: #fff;
  border: 1px solid #d5d5d5;
  color: #666;
}
.type-wrap .ext .sui-btn + a {
  display: inline-block;
  padding: 0px 10px;
}
</style>