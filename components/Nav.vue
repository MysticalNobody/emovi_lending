<template>
  <div class="nav">
    <div :class="'logo logo_'+index" v-for="(logo, index) of logos" :key="logo.id">
      <a :href="logo.href" target="_blank">
        <img class="logo-image" :src="logo.image">
        <div class="logo-text">{{logo.text}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logos: [
        {
          image: "/images/e_logo1.svg",
          text: "emovi night"
        },
        {
          image: "/images/e_logo2.svg",
          text: "Киношки Бауманские",
          href: "https://vk.com/kinobmstu"
        }
      ]
    };
  }
};
</script>
<style scoped>
.nav {
  display: flex;
  margin-top: 3.8vh;
  height: 9.2vh;
  padding: 0 4.5vw;
  justify-content: space-between;
}
.logo-text {
  position: absolute;
  font-size: 3vw;
  font-weight: bold;
  color: white;
}
.logo_0 .logo-text {
  width: 370px;
  left: 92px;
  top: -12px;
  font-size: 5vw;
}
.logo_1 .logo-text {
  left: 126px;
  top: -12px;
}
.logo-image {
  height: 72px;
}
.logo_1 {
  width: 375px;
}
.logo_1 .logo-image {
  height: 100px;
}
.logo {
  position: relative;
}
</style>
