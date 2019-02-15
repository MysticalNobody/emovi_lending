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
  font-size: 46px;
  margin-top: 10.5vh;
}
.items {
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 70%;
  margin-top: 100px;
}
.item {
  width: 20vw;
  max-width: 375px;
  text-align: center;
}
.item_text {
  font-size: 37px;
  margin-top: 25px;
}
.item-image {
  height: 135px;
}
.head_content-href {
  cursor: pointer;
  height: 100px;
  background: #ffaa34;
  width: 660px;
  margin: auto;
  margin-top: 9vh;
  border-radius: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  color: black;
  font-weight: bold;
}

@media screen and (max-width: 1600px) {
  h1 {
    text-align: center;
    font-size: 31px;
    margin-top: 9.5vh;
  }
  .items {
    display: flex;
    margin: auto;
    justify-content: space-between;
    width: 82%;
    margin-top: 70px;
  }
  .item {
    width: 255px;
    max-width: 270px;
    text-align: center;
  }
  .item-image {
    height: 70px;
  }
  .item_text {
    font-size: 25px;
    line-height: initial;
    margin-top: initial;
  }
  .item:nth-child(1) .item_text {
    font-size: 25px;
    margin: auto;
    line-height: 31px;
    margin-top: 10px;
    width: 165px;
  }
  .item:nth-child(2) .item_text {
    font-size: 25px;
    line-height: 31px;
    margin-top: 10px;
  }
  .item:nth-child(3) .item_text {
    width: 180px;
    margin: auto;
    margin-top: 12px;
    line-height: 31px;
  }
  .head_content-href {
    cursor: pointer;
    height: 50px;
    background: #ffaa34;
    width: 330px;
    margin: auto;
    margin-top: 11vh;
    border-radius: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: black;
    font-weight: bold;
  }
}
@media screen and (max-width: 900px) {
  .items {
    width: 95%;
  }
}
@media screen and (max-width: 800px) {
  .items {
    width: 100%;
  }
}
@media screen and (max-width: 700px), screen and (max-width: 900px) and (min-width: 500px) {
  h1 {
    text-align: center;
    font-size: 21px;
    margin-top: 9.5vh;
  }
  .head_content-href {
    cursor: pointer;
    height: 30px;
    background: #ffaa34;
    width: 220px;
    margin: auto;
    margin-top: 11vh;
    border-radius: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: black;
    font-weight: bold;
  }
  .item:nth-child(3) .item_text {
    font-size: 14px;
    width: 160px;
    margin: auto;
    margin-top: 12px;
    line-height: 17px;
  }
  .item-image {
    height: 34px;
  }
  .item:nth-child(2) .item_text {
    font-size: 14px;
    line-height: 17px;
    margin: auto;
    margin-top: 10px;
    width: 140px;
  }
  .item:nth-child(1) .item_text {
    font-size: 14px;
    margin: auto;
    line-height: 17px;
    margin-top: 10px;
    width: 150px;
  }
  .items {
    margin-top: 20px;
  }
}

@media screen and (max-width: 900px) and (min-height: 700px) {
  .item-image {
    height: 50px;
    width: 50px;
  }
  .item:nth-child(1) .item_text,
  .item:nth-child(2) .item_text,
  .item:nth-child(3) .item_text {
    font-size: 25px;
    line-height: normal;
    margin: initial;
    margin-left: 26px;
    line-height: initial;
    text-align: left;
    width: 70%;
    margin-top: initial;
  }
  .item {
    width: 100%;
    max-width: initial;
    display: flex;
    text-align: center;
  }
  .items {
    display: flex;
    margin: auto;
    height: 300px;
    flex-direction: column;
    justify-content: baseline;
    width: 82%;
    margin-top: 70px;
  }
}
@media screen and (max-width: 500px) and (min-height: 500px) {
  .item-image {
    height: 30px;
    width: 50px;
  }
  .item:nth-child(1) .item_text,
  .item:nth-child(2) .item_text,
  .item:nth-child(3) .item_text {
    font-size: 16px;
    line-height: normal;
    margin: initial;
    margin-left: 26px;
    line-height: initial;
    text-align: left;
    width: 70%;
    margin-top: initial;
  }
  .item {
    width: 100%;
    max-width: initial;
    display: flex;
    text-align: center;
  }
  .items {
    display: flex;
    margin: auto;
    height: 200px;
    flex-direction: column;
    justify-content: baseline;
    width: 82%;
    margin-top: 70px;
  }
  .head_content-href {
    cursor: pointer;
    height: 48px;
    background: #ffaa34;
    width: 300px;
    margin: auto;
    margin-top: 11vh;
    border-radius: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: black;
    font-weight: bold;
  }
}
</style>
