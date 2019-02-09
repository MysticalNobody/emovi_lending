<template>
  <div class="google_play">
    <div class="share">
      <div class="text">
        emovi - поиск
        фильмов по emoji
      </div>
      <div class="share-images">
        <img src="images/e_logo1.svg">
        <a href="https://play.google.com/store/apps/details?id=app.emovi" target="_blank">
          <img src="images/google-play-badge.svg">
        </a>
      </div>
    </div>
    <div class="buy_tickets">
      <div class="text">emovi night -
        <br>киновечер, на котором вы решаете, что смотреть
      </div>
      <div class="share-images">
        <img src="images/1f60d.svg">
        <a>Купить билет</a>
      </div>
    </div>
    <div v-if="top_emoji[0]" class="chosen">
      <div class="chosen-text">
        Лидирующие эмоции
        на киновечер 16.02
      </div>
      <div class="chosen-subtext">на основе всех оценок</div>
      <div class="chosen_item" v-for="item of 3" :key="item.id">
        <img class="chosen_item-emoji" :src="top_emoji[item-1].image">
      </div>
    </div>
    <div v-if="top_films[0]" class="films">
      <div class="title">Лидирующие фильмы на киновечер 16.02</div>
      <div class="flim" v-for="item of 3" :key="item.id">
        <div class="flim-img" :style="'background-image:url('+top_films[item-1]+')'"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Api from "../api";
import Emojis from "../emojis";
export default {
  data() {
    return {
      top_emoji: [],
      top_films: []
    };
  },
  mounted: async function() {
    var data = (await Api.getResults())["1"].emotions;
    for (var i = 0; i < data.length; i += 1) {
      this.top_emoji.push(Emojis.getById(data[i]));
    }
    this.films = await this.getFlims();
  },
  methods: {
    async getFlims() {
      this.films = [];
      var _films = await Api.getFlims(this.top_emoji.map(e => e.id).join(","));
      for (var i = 0; i < 3; i++) {
        try {
          this.top_films.push(_films[i].poster);
        } catch {}
      }
    }
  }
};
</script>

<style scoped>
.google_play {
  position: relative;
  background: #090909;
  height: 84.8vh;
}
.share {
  position: absolute;
  right: 9vw;
  font-weight: bold;
  width: 350px;
  top: 7vh;
  text-align: center;
}
.buy_tickets {
  position: absolute;
  right: 5vw;
  font-weight: bold;
  width: 500px;
  bottom: 10vh;
  text-align: center;
}
.buy_tickets .share-images {
  width: 450px;
  margin: auto;
  margin-top: 2vh;
}
.share-images {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buy_tickets .share-images a {
  width: 300px;
  height: 70px;
  padding-top: 10px;
  font-size: 32px;
  color: black;
  border-radius: 60px;
  background: #ffaa34;
}
.text {
  font-size: 43px;
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
}

.chosen {
  position: absolute;
  top: 6.5vh;
  left: 2.5vw;
  display: flex;
}
.chosen_item {
  text-align: center;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 12px;
  margin-right: 36px;
  margin-top: 1.5vh;
  position: relative;
  display: block;
}
.chosen_item-emoji {
  width: 60px;
  margin-top: 10px;
}
.chosen-text {
  font-size: 40px;
  font-weight: bold;
  line-height: 50px;
  width: 420px;
}
.chosen-subtext {
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  bottom: -50px;
}

.films {
  position: absolute;
  bottom: 10vh;
  left: 2.5vw;
  display: flex;
  justify-content: space-between;
  width: 43vw;
}
.films .title {
  position: absolute;
  font-size: 40px;
  font-weight: bold;
}
.flim-img {
  width: 13vw;
  height: 20vw;
  background-size: cover;
  margin-top: 70px;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
