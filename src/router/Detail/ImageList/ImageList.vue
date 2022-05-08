<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="img in skuImageList" :key="img.id">
        <img :src="img.imgUrl" />
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
};
</script>

<style scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;
}
.swiper-slide {
  width: 56px;
  height: 56px;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  padding: 2px;
  width: 50px;
  height: 50px;
  display: block;
}
.swiper-slide img.active {
  border: 2px solid #f60;
  padding: 1px;
}
.swiper-slide img:hover {
  border: 2px solid #f60;
  padding: 1px;
}

.swiper-button-next {
  left: auto;
  right: 0;
}

.swiper-button-prev {
  left: 0;
  right: auto;
}

.swiper-button-next,
.swiper-button-prev {
  box-sizing: border-box;
  width: 12px;
  height: 56px;
  background: rgb(235, 235, 235);
  border: 1px solid rgb(204, 204, 204);
  top: 0;
  margin-top: 0;
}
.swiper-button-next::after {
  font-size: 12px;
}
.swiper-button-prev::after {
  font-size: 12px;
}
</style>