<template>
  <div id="index-page">
    <Nav/>
    <HeadContent/>
    <Footer/>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import HeadContent from "../components/HeadContent";
export default {
  components: {
    Nav,
    HeadContent
  }
};
</script>