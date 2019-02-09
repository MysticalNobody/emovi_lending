<template>
  <div id="index-page">
    <GooglePlay/>
    <Footer/>
  </div>
</template>

<script>
import GooglePlay from "../components/GooglePlay";
import Footer from "../components/Footer";
export default {
  components: {
    GooglePlay,
    Footer
  }
};
</script>