<template>
  <div class="chose_emoji">
    <h2 v-if="chosen[0]">Фильмы под выбранные эмоции</h2>
    <h2 v-else class="chose_emotions">Выберите несколько эмоций</h2>
    <div class="items">
      <div @click="choseEmoji(item)" class="item" v-for="item of emojis" :key="item.id">
        <img class="item-image" :src="item.image">
        <div class="item_text">{{item.text}}</div>
      </div>
    </div>
    <div v-if="chosen[0]" class="chosen">
      <div class="chosen_item" v-for="item of 3" :key="item.id">
        <div v-if="chosen[item-1]">
          <img class="chosen_item-emoji" :src="chosen[item-1].image">
          <img @click="deleteEmoji(item - 1)" class="chosen_item-close" src="images/close.svg">
        </div>
      </div>
    </div>
    <div v-if="chosen[0]" class="films">
      <div class="flim" v-for="item of 3" :key="item.id">
        <div
          class="flim-img"
          v-if="films[item-1]"
          :style="'background-image:url('+films[item-1]+')'"
        ></div>
      </div>
    </div>

    <a @click="sendVote()" v-if="chosen[2]">
      <div
        :class="voted?'disabled':''"
        class="chose_emoji-href"
      >{{voted?'Ваш голос учтён':'Проголосовать за эмоции'}}</div>
    </a>
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
    async choseEmoji(emoji) {
      if (this.chosen.lenght >= 3) return;
      this.chosen.push(emoji);
      await this.getFlims();
    },
    async getFlims() {
      this.films = [];
      var _films = await Api.getFlims(this.chosen.map(e => e.id).join(","));
      for (var i = 0; i < 3; i++) {
        try {
          this.films.push(_films[i].poster);
        } catch {}
      }
    },
    async sendVote() {
      if (this.voted) return;
      this.voted = true;
      await Api.sendVote(this.chosen.map(e => e.id));
      this.$router.push("/result");
    },
    async deleteEmoji(id) {
      if (this.chosen.lenght <= 0) return;
      this.chosen.splice(id, 1);
      await this.getFlims();
    }
  }
};
</script>
<style scoped>
h2 {
  text-align: center;
  position: absolute;
  right: 32vw;
  top: 7.5vh;
  font-size: 42px;
}
.chose_emotions {
  top: 39.5vh;
  left: 51.5vw;
  width: 550px;
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
  margin-top: 3.5vh;
  text-align: center;
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
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 12px;
  margin-right: 36px;
  position: relative;
  display: block;
}
.chosen_item-emoji {
  width: 60px;
  margin-top: 10px;
  margin-left: 5px;
}
.chosen_item-close {
  cursor: pointer;
  width: 35px;
  height: 35px;
  position: absolute;
  top: -17px;
  right: -17px;
}
.films {
  position: absolute;
  top: 23vh;
  left: 38.5vw;
  display: flex;
  justify-content: space-between;
  width: 57vw;
}
.flim-img {
  width: 16vw;
  height: 25vw;
  background-size: cover;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
}
.chose_emoji-href {
  cursor: pointer;
  height: 85px;
  background: #ffaa34;
  width: 650px;
  bottom: 5vh;
  position: absolute;
  border-radius: 50px;
  text-align: center;
  padding-top: 7px;
  right: 17vw;
  font-size: 50px;
  color: black;
  font-weight: bold;
}

.disabled {
  background: #219b19;
}
</style>
