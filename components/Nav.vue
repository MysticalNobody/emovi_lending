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
          image: "/images/logo2.svg",
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
  display: inline-block;
  font-size: 3vw;
  font-weight: bold;
  color: white;
}
.logo_0 .logo-text {
  font-size: 5vw;
}
.logo_1 .logo-text {
  width: 15vw;
}
.logo_0 {
  width: 35vw;
}
.logo_1 {
  width: 25vw;
}
.logo-image {
  height: 72px;
  display: inline-block;
}
.logo_1 .logo-image {
  height: 100px;
  display: inline-block;
}

.logo a {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  position: relative;
}
@media screen and (max-width: 1100px) {
  .logo_1 .logo-image {
    height: 72px;
  }
  .logo_0 .logo-image {
    height: 70px;
  }
}
</style>
