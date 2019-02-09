<template>
  <div class="google_play">
    <div class="text">
      Понравился поиск по emoji?
      <br>Вы можете делать это в любое время.
      <img src="images/e_logo1.svg">
    </div>
    <h2>emov</h2>
    <a>
      <img src="images/download.svg">
      Скачать в Google Play
    </a>
  </div>
</template>
<style scoped>
.google_play {
  position: relative;
  background: #090909;
  height: 80vh;
}
.text {
  position: absolute;
  top: 24vh;
  text-align: center;
  width: 750px;
  font-size: 43px;
  left: 27.5vw;
}
.text img {
  position: absolute;
  top: -1vh;
  right: 0.5vw;
}
h2 {
  position: absolute;
  top: 37.5vh;
  text-align: center;
  width: 750px;
  font-size: 65px;
  left: 27.5vw;
}
.google_play a {
  cursor: pointer;
  position: absolute;
  color: #ffaa34;
  top: 48.5vh;
  text-align: center;
  width: 750px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 27vw;
}
</style>
