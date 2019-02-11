<template>
  <div class="head_content">
    <h1>Киновечер, на котором вы решаете, что смотреть.</h1>
    <div class="items">
      <div class="item" v-for="item of items" :key="item.id">
        <img class="item-image" :src="item.image">
        <div class="item_text">{{item.text}}</div>
      </div>
    </div>
    <nuxt-link to="/emoji">
      <div class="head_content-href">Выбрать эмоции</div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { image: "images/e_head1.svg", text: "Вы голосуете за 3 эмоции" },
        {
          image: "images/e_head2.svg",
          text:
            "Искусственный интеллект учитывает все голоса и выбирает 3 фильма"
        },
        {
          image: "images/e_head3.svg",
          text: "Вы приходите на киноночь и наслаждаетесь"
        }
      ]
    };
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 4vmin;
  margin-top: 12.5vh;
}
.items {
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 67vw;
  margin-top: 8vh;
}
.item {
  width: 20vw;
  max-width: 375px;
  text-align: center;
}
.item_text {
  font-size: 3vmin;
  margin-top: 3vh;
}
.item-image {
  height: 12vh;
}
.head_content-href {
  cursor: pointer;
  height: 100px;
  background: #ffaa34;
  width: 35vw;
  margin: auto;
  margin-top: 9vh;
  border-radius: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5.5vmin;
  color: black;
  font-weight: bold;
}
@media screen and (max-width: 1100px) {
  .item_text {
    font-size: 2.5vmin;
  }
  .head_content-href {
    cursor: pointer;
    height: 70px;
    background: #ffaa34;
    width: 35vw;
    margin: auto;
    margin-top: 6vh;
    border-radius: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: black;
    font-weight: bold;
  }
}
</style>
