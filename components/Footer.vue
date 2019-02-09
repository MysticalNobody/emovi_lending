<template>
  <div class="footer">
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
          text: "emovi ",
          href: "https://emovi.app"
        },
        { image: "/images/vk.svg", text: "" }
      ]
    };
  }
};
</script>
<style>
.footer {
  display: flex;
  padding-top: 3.8vh;
  height: 15.2vh;
  background: black;
  align-items: center;
  padding: 0 2.5vw;
  justify-content: space-between;
}
.logo-text {
  position: absolute;
  font-size: 50px;
  font-weight: bold;
  color: white;
}
.logo_0 .logo-text {
  width: 370px;
  left: 92px;
  top: -22px;
  font-size: 72px;
}
.logo-image {
  height: 72px;
}
.logo {
  position: relative;
}
</style>
