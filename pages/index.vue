<template>
  <div id="index-page">
    <Nav/>
    <HeadContent/>
    <ChoseEmoji/>
    <GooglePlay/>
    <Footer/>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import HeadContent from "../components/HeadContent";
import ChoseEmoji from "../components/ChoseEmoji";
import GooglePlay from "../components/GooglePlay";
import Footer from "../components/Footer";
export default {
  components: {
    Nav,
    HeadContent,
    ChoseEmoji,
    GooglePlay,
    Footer
  }
};
</script>