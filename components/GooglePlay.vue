<template>
  <div class="google_play">
    <div class="share">
      <div class="text">
        <span>emovi</span>
        <div>поиск фильмов по emoji</div>
      </div>
      <div class="share-images">
        <a href="https://play.google.com/store/apps/details?id=app.emovi" target="_blank">
          <img class="gp_logo" src="images/google-play-badge.svg">
        </a>
        <a href="https://testflight.apple.com/join/eSbmXUPP" target="_blank">
          <img class="ap_logo" src="images/app_store.svg">
        </a>
      </div>
    </div>
    <div class="buy_tickets">
      <div class="text">
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
        <div class="title">Лидирующие фильмы на киновечер 16.02</div>
        <div class="film" v-for="item of 3" :key="item.id">
          <a
            v-if="top_films[item-1]"
            target="_blank"
            :href="'https://themoviedb.org/movie/'+top_films[item-1].id"
          >
            <div class="film-img" :style="'background-image:url('+top_films[item-1].poster+')'"></div>
          </a>
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
  margin-top: 20px;
}
.share-images {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
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
  display: flex;
  justify-content: space-evenly;
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
</style>
