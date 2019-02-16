<template>
  <div class="chose_emoji">
    <div class="items">
      <div
        @click="isChosen(item)!=-1?deleteEmoji(isChosen(item)):choseEmoji(item)"
        class="item"
        v-for="item of emojis"
        :key="item.id"
      >
        <div :class="isChosen(item)!=-1?'active':''">
          <img class="item-image" :src="item.image">
          <div class="item_text">{{item.text}}</div>
        </div>
      </div>
    </div>
    <div class="content">
      <h2 v-if="chosen[0]">Фильмы под выбранные эмоции</h2>
      <h2 v-else class="chose_emotions">Выберите несколько эмоций</h2>
      <div v-if="chosen[0]" class="chosen">
        <div class="chosen_item" v-for="item of 3" :key="item.id">
          <div class="item" v-if="chosen[item-1]">
            <img class="chosen_item-emoji" :src="chosen[item-1].image">
            <img @click="deleteEmoji(item - 1)" class="chosen_item-close" src="images/close.svg">
          </div>
        </div>
      </div>
      <div v-if="chosen[0]" class="films">
        <div class="film" v-for="item of 3" :key="item.id">
          <a
            v-if="films[item-1]"
            target="_blank"
            :href="'https://themoviedb.org/movie/'+films[item-1].id"
          >
            <div
              class="film-img"
              v-if="films[item-1]"
              :style="'background-image:url('+films[item-1].poster+')'"
            ></div>
          </a>
        </div>
      </div>

      <a class="vote" @click="sendVote()">
        <div
          :class="chosen.length<3?'disabled':voted?'vote-chosen':''"
          class="chose_emoji-href"
        >{{voted?'Ваш голос учтён':chosen.length==2?('Осталось выбрать 1 эмоцию'):chosen.length!=3?('Осталось выбрать '+(3-chosen.length)+ ' эмоциии'):'Проголосовать за эмоции'}}</div>
      </a>
    </div>
  </div>
</template>
<script>
import Api from "../api";
import Emojis from "../emojis";
export default {
  data() {
    return {
      chosen: [],
      films: [],
      voted: false,
      results: [],
      emojis: Emojis.all
    };
  },
  methods: {
    choseEmoji(emoji) {
      var isUnique = true;
      this.chosen.forEach(_emoji => {
        if (_emoji == emoji) isUnique = false;
      });
      if (this.chosen.length < 3 && isUnique) {
        this.chosen.push(emoji);
        this.getFilms();
      }
    },
    isChosen(emoji) {
      for (var i = 0; i < this.chosen.length; i += 1) {
        if (this.chosen[i] == emoji) return i;
      }
      return -1;
    },
    async getFilms() {
      this.films = [];
      var _films = await Api.getFilms(this.chosen.map(e => e.id).join(","));
      for (var i = 0; i < 3; i++) {
        try {
          this.films.push(_films[i]);
        } catch {}
      }
    },
    async sendVote() {
      if (this.voted) return;
      if (this.chosen.length != 3) return;
      this.voted = true;
      await Api.sendVote(this.chosen.map(e => e.id));
      this.$router.push("/result");
    },
    async deleteEmoji(id) {
      if (this.chosen.length <= 0) return;
      this.chosen.splice(id, 1);
      if (this.chosen.length > 0) {
        await this.getFilms();
      }
    }
  }
};
</script>
<style scoped>
h2 {
  text-align: center;
  position: absolute;
  left: 40vw;
  top: 7.5vh;
  font-size: 28px;
}
.chose_emotions {
  top: 39.5vh;
  left: 45vw;
  width: 44.5vw;
}
.chose_emoji {
  height: 99vh;
  padding: 8vh 4.5vw;
  background: #090909;
  position: relative;
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 29vw;
  margin-left: -2.5vw;
  margin-top: 5.5vh;
}
.item {
  cursor: pointer;
  text-align: center;
  height: 110px;
}
.item_text {
  margin-top: 0.5vh;
}
.chosen {
  position: absolute;
  top: 6.5vh;
  right: 2.5vw;
  display: flex;
}
.chosen_item {
  text-align: center;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 12px;
  margin-right: 36px;
  position: relative;
  display: block;
}
.chosen_item .item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.chosen_item-emoji {
  width: 50px;
}
.chosen_item-close {
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: absolute;
  top: -12px;
  right: -12px;
}
.films {
  position: absolute;
  top: 23vh;
  right: 3.5vw;
  left: initial;
  display: flex;
  justify-content: space-between;
  width: 57vw;
}
.film-img {
  width: 14vw;
  height: 21vw;
  background-size: cover;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
}
.chose_emoji-href {
  cursor: pointer;
  height: 65px;
  background: #ffaa34;
  width: 480px;
  bottom: 5vh;
  border-radius: 50px;
  text-align: center;
  padding-top: 0;
  padding-top: initial;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 5vw;
  font-size: 30px;
  color: black;
  font-weight: bold;
}
.vote {
  position: absolute;
  width: 57vw;
  right: 3.5vw;
  display: flex;
  justify-content: center;
}
.disabled {
  cursor: initial;
  opacity: 0.3;
}
.vote-chosen {
  background: transparent !important;
  color: #219b19 !important;
}
@media screen and (max-width: 1250px) {
  h2 {
    font-size: 22px;
  }
  .item {
    height: 80px;
  }
  img.item-image {
    width: 30px;
  }
  .chose_emoji-href {
    cursor: pointer;
    height: 40px;
    background: #ffaa34;
    width: 300px;
    bottom: initial;
    position: initial;
    border-radius: 50px;
    text-align: center;
    padding-top: 0;
    padding-top: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 5vw;
    font-size: 20px;
    color: black;
    font-weight: bold;
  }

  .vote {
    width: 57vw;
    display: flex;
    right: 3.5vw;
    margin-top: -50px;
    float: right;
    justify-content: center;
    align-items: center;
  }
  .item_text {
    font-size: 12px;
  }
  .items {
    width: 300px;
  }
  .chose_emoji {
    height: initial;
    width: 100%;
    padding: 8vh 4.5vw;
    background: #090909;
    position: relative;
  }
  .chosen_item {
    text-align: center;
    width: 44px;
    height: 44px;
    background: white;
    border-radius: 12px;
    margin-right: 36px;
    position: relative;
    display: block;
  }
  .chosen_item-emoji {
    width: 30px;
  }
}

@media screen and (max-width: 1150px) {
  h2 {
    font-size: 20px;
  }
}
@media screen and (max-width: 1000px) {
  h2 {
    font-size: 18;
  }
}
@media screen and (max-width: 900px) {
  .items .active {
    border-radius: 200px;
    background: white;
    width: 40px;
    height: 40px;
    display: flex;
    margin: auto;
    margin-top: 0;
    justify-content: center;
    align-items: center;
  }
  .item .active .item_text {
    display: none;
  }
  .chosen_item-close {
    cursor: pointer;
    width: 18px;
    height: 25px;
    position: absolute;
    top: -12px;
    right: -8px;
  }
  .chosen_item {
    margin-right: 20px;
  }
  .chosen_item .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .chosen_item {
    display: none;
  }
  h2 {
    font-size: 22px;
    width: 57vw;
  }
  img.item-image {
    width: 22px;
  }
  .item_text {
    font-size: 8px;
  }
  .items {
    width: 235px;
  }
  .item {
    height: 65px;
  }
}
@media screen and (max-width: 700px) {
  .chose_emoji {
    display: flex;
  }
  .items {
    width: 230px;
    margin: auto;
    margin-left: 15px;
    height: 285px;
  }
  h2 {
    font-size: 22px;
    width: initial;
    left: 0;
  }
  .content {
    height: 100vh;
    width: 51vw;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .h2 {
    font-size: 22px;
    position: absolute;
    left: 0;
  }
  .films {
    position: initial;
    top: initial;
    right: 3.5vw;
    left: auto;
    left: initial;
    display: flex;
    margin: auto;
    justify-content: space-between;
    width: 100%;
  }
  .vote {
    width: 100%;
    display: flex;
    right: initial;
    bottom: 9vh;
    margin-bottom: 7vh;
    margin-top: initial;
    position: absolute;
    bottom: 0;
    justify-content: center;
    align-items: center;
  }
  .item {
    height: 50px;
    width: 50px;
  }
  img.item-image {
    width: 22px;
  }
  .chose_emoji-href {
    cursor: pointer;
    height: 40px;
    background: #ffaa34;
    width: 300px;
    bottom: auto;
    bottom: initial;
    position: static;
    position: initial;
    border-radius: 50px;
    text-align: center;
    padding-top: 0;
    padding-top: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    color: black;
    font-weight: bold;
  }
}

@media screen and (max-width: 1100px) and (min-height: 1000px),
  screen and (max-width: 900px) and (min-height: 400px) {
  .items .active {
    border-radius: 200px;
    background: white;
    width: 65px;
    height: 65px;
    display: flex;
    margin: auto;
    margin-top: 0;
    justify-content: center;
    align-items: center;
  }
  .item .active .item_text {
    display: none;
  }
  .chosen_item {
    display: none;
  }
  img.item-image {
    width: 50px;
  }
  .item_text {
    font-size: 13px;
    text-align: center;
    margin: auto;
  }
  .item {
    margin: auto;
  }
  .chose_emoji {
    display: flex;
  }
  .items {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin: auto;
    height: 225px;
  }
  h2 {
    font-size: 29px;
    width: auto;
    width: 100%;
    top: -5vh;
    left: 0;
  }
  .film-img {
    width: 27vw;
    height: 40vw;
    background-size: cover;
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .content {
    height: 100vh;
    width: 51vw;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .films {
    position: initial;
    top: initial;
    right: 3.5vw;
    left: initial;
    display: flex;
    margin: auto;
    justify-content: space-between;
    width: 100%;
  }
  .vote {
    position: absolute;
    width: 84vw;
    right: 3.5vw;
    bottom: -32vh;
    display: flex;
    justify-content: center;
  }
  img.item-image {
    width: 40px;
  }
  .content {
    width: 100%;
    height: 50vh;
  }
  .chose_emoji {
    display: flex;
    flex-direction: column-reverse;
  }
  .chose_emotions {
    top: initial;
    left: initial;
    width: 100%;
  }
  .chose_emoji-href {
    cursor: pointer;
    height: 50px;
    background: #ffaa34;
    width: 350px;
    bottom: auto;
    bottom: initial;
    position: static;
    position: initial;
    border-radius: 50px;
    text-align: center;
    padding-top: 0;
    padding-top: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    /* right: 5vw; */
    font-size: 20px;
    color: black;
    font-weight: bold;
  }
}
@media screen and (max-width: 700px) and (min-height: 400px) {
  .vote {
    width: 100%;
    display: flex;
    right: auto;
    right: initial;
    bottom: 9vh;
    margin-bottom: 7vh;
    margin-top: 0;
    margin-top: initial;
    position: absolute;
    bottom: -55vh;
    justify-content: center;
    align-items: center;
  }
  .chose_emoji-href {
    cursor: pointer;
    height: 45px;
    background: #ffaa34;
    width: 90vw;
    bottom: 5vh;
    border-radius: 50px;
    text-align: center;
    padding-top: 0;
    padding-top: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 5vw;
    font-size: 20px;
    color: black;
    font-weight: bold;
  }

  h2 {
    font-size: 29px;
    width: auto;
    width: 100%;
    top: -15vh;
    left: 0;
  }
  .content {
    width: 100%;
    height: 25vh;
  }
  .items .active {
    border-radius: 200px;
    background: white;
    width: 55px;
    height: 55px;
    display: flex;
    margin: auto;
    margin-top: 0;
    justify-content: center;
    align-items: center;
  }
  .item_text {
    font-size: 8px;
    text-align: center;
    margin: auto;
  }
}
@media screen and (max-width: 900px) and (min-height: 400px) and (max-height: 500px) {
  h2 {
    font-size: 20px;
    width: auto;
    width: 100%;
    top: -15vh;
    left: 0;
  }
  .vote {
    width: 100%;
    display: flex;
    right: auto;
    right: initial;
    bottom: 9vh;
    margin-bottom: 0;
    margin-top: 0;
    margin-top: initial;
    position: absolute;
    bottom: -58vh;
    justify-content: center;
    align-items: center;
  }
}
</style>
