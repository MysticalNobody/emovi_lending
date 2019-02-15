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
  margin-top: 2.8vh;
  height: 9.2vh;
  width: 100%;
  padding-left: 80px;
  padding-right: 30px;
  justify-content: space-between;
}
.logo-text {
  display: inline-block;
  font-size: 3vw;
  font-weight: bold;
  color: white;
}
.logo_0 .logo-text {
  font-size: 72px;
}
.logo_1 .logo-text {
  line-height: 60px;
  width: 295px;
  font-size: 54px;
}
.logo_0 {
  width: 460px;
  height: 100%;
}
.logo_1 {
  width: 495px;
  height: 100%;
}
.logo-image {
  height: 72px;
  display: inline-block;
}
.logo_1 .logo-image {
  margin-left: 30px;
  margin-right: 17px;
  height: 145px;
  display: inline-block;
}

.logo a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.logo_1 a {
  justify-content: end;
}
.logo {
  position: relative;
}

@media screen and (max-width: 1600px) {
  .nav {
    display: flex;
    margin-top: 4.7vh;
    height: 9.2vh;
    width: 100%;
    padding-left: 44px;
    padding-right: 30px;
    justify-content: space-between;
  }
  .logo_0 {
    width: 249px;
  }
  .logo_0 .logo-image {
    height: 45px;
  }
  .logo_0 .logo-text {
    font-size: 36px;
  }
  .logo_1 {
    width: 245px;
  }
  .logo_1 .logo-image {
    height: 72px;
    margin-left: 30px;
    margin-right: 17px;
  }
  .logo_1 .logo-text {
    line-height: 38px;
    width: 228px;
    font-size: 25px;
  }
}
@media screen and (max-width: 730px) {
  .logo_1 .logo-image {
    height: 40px;
    margin-left: 19px;
    margin-right: 10px;
  }
  .logo_1 .logo-text {
    line-height: 38px;
    width: 100%;
    font-size: 18px;
  }
  .logo_1 {
    width: 245px;
  }
  .logo_0 {
    width: 125px;
  }
  .logo_0 .logo-image {
    height: 23px;
  }
  .logo_0 .logo-text {
    font-size: 18px;
  }
}

@media screen and (max-width: 500px) {
  .nav {
    display: flex;
    margin-top: 1.7vh;
    height: 7.2vh;
    flex-direction: column;
    width: 100%;
    padding-left: 20px;
    justify-content: space-between;
  }
  .logo_0,
  .logo_1 {
    width: 100%;
  }
  .logo a {
    display: flex;
    justify-content: initial;
    align-items: center;
    height: 100%;
  }
  .logo_0 .logo-image {
    height: 23px;
    margin-right: 20px;
  }
  .logo_0 .logo-text {
    font-size: 18px;
  }
  .logo_1 .logo-image {
    height: 40px;
    margin-left: -10px;
    margin-right: 14px;
  }
  .logo_1 .logo-text {
    line-height: 27px;
    width: 100%;
    font-size: 18px;
  }
}
</style>
