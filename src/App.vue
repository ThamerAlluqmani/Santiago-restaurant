<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation></Navigation>
      <router-view />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {Footer, Navigation},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;

}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.boxShadow{
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  margin: 32px 0px;

}
.line{
  border-bottom: 2px solid;
  width: 25%;
  padding-bottom: 12px;
}
.secondary{
  color:#85311B;
}
.third{
  color: #E2725A;
}
.bold{
  font-weight: bold;
}

.icon{
  width: 18px;
}

</style>
