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
    <div v-if="top_films[0]" class="films">
      <div class="title">Лидирующие фильмы на киновечер 16.02</div>
      <div class="film" v-for="item of 3" :key="item.id">
        <div class="film-img" :style="'background-image:url('+top_films[item-1]+')'"></div>
        <div class="emojis">
          <img
            v-for="emoji of 3"
            :key="emoji.id"
            :src="top_emoji[''+(item-1)+''][''+(emoji-1)+''].image"
            class="chosen_item-emoji"
          >
        </div>
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
      top_emoji: [[], [], []],
      top_films: []
    };
  },
  mounted: async function() {
    var data = await Api.getResults();
    for (var i = 0; i < 3; i += 1) {
      for (var j = 0; j < 3; j += 1) {
        this.top_emoji[i].push(
          Emojis.getById(data["" + (i + 1) + ""].emotions[j])
        );
      }
    }
    this.films = await this.getFilms();
  },
  methods: {
    async getFilms() {
      this.films = [];
      for (var i = 0; i < 3; i += 1) {
        var _films = await Api.getFilms(
          this.top_emoji[i].map(e => e.id).join(",")
        );
        try {
          this.top_films.push(_films[0].poster);
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
  width: 24vw;
  top: 7vh;
  text-align: center;
}
.buy_tickets {
  position: absolute;
  right: 5vw;
  font-weight: bold;
  width: 33vw;
  bottom: 10vh;
  text-align: center;
}
.buy_tickets .share-images {
  width: 30vw;
  margin: auto;
  margin-top: 2vh;
}
.share-images {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.buy_tickets .share-images a {
  width: 19vw;
  height: 5vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2vw;
  color: black;
  border-radius: 60px;
  background: #ffaa34;
}
.text {
  font-size: 2.5vw;
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
  width: 7vmin;
  height: 7vmin;
  background: white;
  border-radius: 12px;
  margin-right: 36px;
  position: relative;
  display: block;
}
.chosen_item-emoji {
  width: 5vmin;
  margin-top: 1vmin;
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
  top: 20vh;
  left: 2.5vw;
  display: flex;
  justify-content: space-between;
  width: 55vw;
}
.films .title {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 2.5vw;
  font-weight: bold;
}
.film-img {
  width: 16vw;
  height: 23vw;
  background-size: cover;
  margin-top: 70px;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
}
.film {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.emojis {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>
