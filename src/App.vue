<template>
  <div id="app">
    <Shortcut v-show="$route.meta.show" />
    <Header v-show="$route.meta.show" />
    <Nav v-show="$route.meta.show" />
    <router-view></router-view>
    <FooterBox v-show="$route.meta.show" />
    <Footer />
  </div>
</template>

<script>
import Shortcut from "./components/Shortcut";
import Header from "./components/Header";
import Nav from "./components/nav";
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