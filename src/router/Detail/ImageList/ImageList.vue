<template>
  <div class="swiper-container-father">
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(img, index) in skuImageList"
          :key="img.id"
        >
          <img
            :src="img.imgUrl"
            :class="{ active: currentIndex == index }"
            @mouseenter="changeCurrentIndex(index)"
          />
        </div>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  props: ["skuImageList"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changeCurrentIndex(i) {
      this.currentIndex = i;
      this.$bus.$emit("getIndex", i);
    },
  },
  watch: {
    skuImageList(newv, oldv) {
      this.$nextTick(() => {
        new Swiper(this.$refs.swiper, {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          slidesPerView: 5,
        });
      });
    },
  },
};
</script>

<style scoped>
.swiper-container-father {
  height: 64px;
  width: 400px;
  position: relative;
  margin-top: 10px;
}
.swiper-container {
  height: 64px;
  width: 348px;
  box-sizing: border-box;
}
.swiper-slide {
  width: 64px;
  height: 64px;
}
.swiper-slide img {
  width: 64px;
  height: 64px;
  border: 1px solid #ccc;
  padding: 2px;
  display: block;
  cursor: pointer;
}
.swiper-slide img.active {
  border: 2px solid #f60;
  padding: 1px;
}

.swiper-button-next {
  right: 0;
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next,
.swiper-button-prev {
  box-sizing: border-box;
  width: 25px;
  height: 64px;
  top: 22px;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
  color: #999;
  font-weight: 900;
}
</style>