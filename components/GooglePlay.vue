<template>
  <div class="google_play">
    <div class="share">
      <div class="text">
        <img class="pre-image" src="images/12802.svg">
        <span>emovi</span>
        <div>Поиск фильмов по emoji</div>
      </div>
      <div class="share-images">
        <a href="https://play.google.com/store/apps/details?id=app.emovi" target="_blank">
          <img class="gp_logo" src="images/google-play-badge.svg">
        </a>
        <a href="http://emovi.app/#subscribe" target="_blank">
          <img class="ap_logo" src="images/app_store.svg">
        </a>
      </div>
    </div>
    <div class="buy_tickets">
      <div class="text">
        <img class="pre-image" src="images/e_head3.svg">
        <span>emovi night</span>
        <div>Киновечер, на котором решаете вы</div>
      </div>
      <div class="share-images">
        <a target="_blank" href="https://vk.com/app5708398_-80720837">
          <img class="buy" src="images/buy.svg">
        </a>
      </div>
    </div>
    <div class="films_container">
      <div v-if="top_films[0]" class="films">
        <div class="title">Лидирующие фильмы на киновечер 22.02</div>
        <div class="film" v-for="item of 3" :key="item.id">
          <a
            v-if="top_films[item-1]"
            target="_blank"
            :href="'https://themoviedb.org/movie/'+top_films[item-1].id"
          >
            <div class="film-img" :style="'background-image:url('+top_films[item-1].poster+')'"></div>
          </a>
          <div class="emojis">
            <img :src="top_emoji[(item-1)][0].image" class="chosen_item-emoji">
            <span>{{top_emoji[(item-1)][0].text}}</span>
          </div>
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
      this.top_emoji[i].push(
        Emojis.getById(data["" + (i + 1) + ""].emotions[0])
      );
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
          this.top_films.push(_films[0]);
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
  right: 150px;
  font-weight: bold;
  width: 450px;
  height: 134px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  bottom: 0vh;
}
.buy_tickets {
  position: absolute;
  left: 150px;
  font-weight: bold;
  height: 134px;
  bottom: 1vh;
  text-align: center;
}
.buy_tickets .share-images {
  margin: auto;
  justify-content: flex-start;
  display: flex;
  margin-top: 9px;
}
.share-images {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 26px;
}
.ap_logo {
  height: 6vmin;
}
.share .share-images {
  width: 100%;
}
.gp_logo {
  height: 9vmin;
  margin-right: 10px;
}
.share-images .smile {
  height: 6vmin;
}
.text {
  font-size: 64px;
  text-align: left;
}
.text img {
  height: 45px;
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
  width: 30px;
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
.films_container {
  width: 60vw;
  height: 70vh;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.text div {
  font-weight: normal;
  width: 639px;
  font-size: 40px;
}

.share .text div {
  font-weight: normal;
  width: 100%;
  font-size: 40px;
}
.films {
  position: relative;
  left: 2.5vw;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
}
.films .title {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 2.5vw;
  font-weight: bold;
}
.buy {
  height: 6vmin;
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
  padding-top: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.emojis {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.emojis span {
  font-size: 16px;
  margin-left: 15px;
}
@media screen and (max-width: 1500px) {
  .text {
    font-size: 40px;
    text-align: left;
  }
  .gp_logo {
    height: 60px;
  }
  .ap_logo,
  .buy {
    height: 40px;
  }
  .text div {
    font-weight: normal;
    width: 100%;
    font-size: 24px;
  }
  .share .text div {
    font-weight: normal;
    width: 100%;
    font-size: 24px;
  }
  .share {
    position: absolute;
    right: 65px;
    font-weight: bold;
    width: 278px;
    height: 100px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    bottom: 0vh;
  }
  .film-img {
    width: 140px;
    height: 210px;
  }
  .buy_tickets {
    position: absolute;
    left: 65px;
    font-weight: bold;
    height: 100px;
    bottom: 0vh;
    text-align: center;
  }
}
@media screen and (max-width: 900px) {
  .share {
    position: absolute;
    right: 65px;
    font-weight: bold;
    width: 278px;
    height: 100px;
    text-align: center;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    bottom: 0vh;
  }
  .text {
    font-size: 30px;
    text-align: left;
  }
  .share .text div,
  .text div {
    font-weight: normal;
    width: 100%;
    font-size: 18px;
  }
  .text img {
    height: 33px;
  }
}
@media screen and (max-width: 1000px) and (min-height: 700px) {
  .buy_tickets .share-images {
    margin: auto;
    justify-content: center;
    display: flex;
    margin-top: 9px;
  }
  .buy_tickets {
    position: absolute;
    left: calc(50vw - 136px);
    font-weight: bold;
    height: 100px;
    bottom: 19vh;
    text-align: center;
  }
  .text {
    font-size: 26px;
    text-align: center;
  }
  .text img {
    height: 30px;
  }
  .text div {
    font-weight: normal;
    width: 100%;
    font-size: 20px;
  }
  .share {
    position: absolute;
    left: calc(50vw - 122px);
    font-weight: bold;
    width: 278px;
    height: 100px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    bottom: 1vh;
  }
  .films_container {
    width: 80vw;
    height: 54vh;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
}
@media screen and (max-width: 900px) and (max-height: 500px) {
  .emojis span {
    font-size: 9px;
    margin-left: 5px;
  }
  .films .title {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  .films_container {
    width: 70vw;
    height: 65vh;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  .share .text div,
  .text div {
    font-weight: normal;
    width: 100%;
    font-size: 13px;
  }
  .text img {
    height: 25px;
  }

  .gp_logo {
    height: 37px;
  }
  .text {
    font-size: 18px;
    text-align: left;
  }
  .ap_logo,
  .buy {
    height: 25px;
  }
  .share {
    position: absolute;
    right: 55px;
    font-weight: bold;
    width: 200px;
    height: 75px;
    text-align: center;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    bottom: 0vh;
  }
  .film-img {
    width: 22vh;
    height: 33vh;
    background-size: cover;
    margin-top: 22px;
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .share-images {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
  }
  .buy_tickets .share-images {
    margin: auto;
    justify-content: flex-start;
    display: flex;
    margin-top: 2px;
  }
  .chosen_item-emoji {
    width: 22px;
  }
  .buy_tickets {
    position: absolute;
    left: 125px;
    font-weight: bold;
    height: 75px;
    bottom: 0vh;
    text-align: center;
  }
}

@media screen and (max-width: 600px) and (min-height: 400px) {
  .film-img {
    width: 85px;
    height: 125px;
  }
  .emojis span {
    font-size: 9px;
    margin-left: 5px;
  }
  .chosen_item-emoji {
    width: 22px;
  }
  .films_container {
    width: 90%;
    height: 45vh;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  .films {
    position: relative;
    left: initial;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
  }
  .films .title {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
  }
  .buy_tickets {
    position: absolute;
    left: 10px;
    font-weight: bold;
    height: 100px;
    bottom: 14vh;
    text-align: center;
  }
  .text div {
    font-weight: normal;
    width: 100%;
    font-size: 14px;
  }
  .text {
    font-size: 20px;
    text-align: left;
  }
  .ap_logo,
  .buy {
    height: 31px;
  }
  .gp_logo {
    height: 44px;
  }
  .text img {
    height: 30px;
  }
  .share .text div {
    font-weight: normal;
    width: 100%;
    font-size: 14px;
  }
  .share-images {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
  }
  .share {
    position: absolute;
    left: 10px;
    font-weight: bold;
    width: 278px;
    height: 100px;
    text-align: center;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    bottom: -7vh;
  }
}
@media screen and (max-width: 600px) and (min-height: 500px) {
  .films .title {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
  }
}
@media screen and (max-width: 600px) and (max-height: 400px) {
  .share {
    position: absolute;
    right: 10px;
    font-weight: bold;
    width: 200px;
    height: 75px;
    text-align: center;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    bottom: -5vh;
  }
  .chosen_item-emoji {
    width: 22px;
  }
  .buy_tickets {
    position: absolute;
    left: 35px;
    font-weight: bold;
    height: 75px;
    bottom: -6vh;
    text-align: center;
  }
}
</style>
