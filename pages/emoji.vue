<template>
  <div id="emoji-page">
    <ChoseEmoji/>
  </div>
</template>

<script>
import ChoseEmoji from "../components/ChoseEmoji";
export default {
  components: {
    ChoseEmoji
  }
};
</script>
<style scoped>
@media screen and (max-width: 1250px) {
  #emoji-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #090909;
  }
}
</style>
