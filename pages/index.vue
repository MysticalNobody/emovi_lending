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
<style>
#index-page {
  max-width: 1920px;
  margin: auto;
}
@media screen and (max-width: 1600px) {
  #index-page {
    max-width: 1024px;
    margin: auto;
  }
}
</style>
