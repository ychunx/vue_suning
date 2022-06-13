<template>
  <div id="app">
    <!-- 包括一些控制组件显示的参数 -->
    <Shortcut v-show="$route.meta.showShortcut" />
    <Header v-show="$route.meta.showHeader" />
    <Nav v-show="$route.meta.showNav" :showOther="true" />
    <router-view></router-view>
    <FooterBox v-show="$route.meta.showFooterBox" />
    <Footer v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import Shortcut from "./components/Shortcut";
import Header from "./components/Header";
import Nav from "./components/Nav";
import FooterBox from "./components/FooterBox";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Shortcut,
    Header,
    Nav,
    FooterBox,
    Footer,
  },
};
</script>