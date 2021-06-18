<template>
  <div id="nav" class="mt-5">
    <div v-if="this.$route.name === 'HealthyBreakfast'" class="right">
      <div class="icon ms-4">
        تابعنا :
      </div>

      <div class="icon ms-4">
        <twitter class="icon2"></twitter>
      </div>



      <div class="icon ms-4">
       <instagram class="icon2"></instagram>
      </div>


    </div>

    <div v-else class="right">
      <div class="icon ms-4">
        <menu-icon class="icon"></menu-icon>
      </div>


        <router-link :to="{name:'ViewOrder'}">
          <div class="icon ms-4">
          <shopping-cart  class="icon"></shopping-cart>
          </div>
        </router-link>




      <router-link :to="{name:'Login'}">
        <div class="icon ms-4">
          <user-icon class="icon"></user-icon>
        </div>
      </router-link>


    </div>

   <router-link :to="{name:'Home'}">
     <img src="../assets/logo.png" alt="">
   </router-link>
    <div class="btn left">
        <world class="icon"></world>
        <span>  العربية  </span>
        <arrow-down class="icon"></arrow-down>

    </div>
  </div>
</template>

<script>
import userIcon from '../assets/1/userIcon.svg'
import menuIcon from '../assets/1/menuIcon.svg'
import shoppingCart from '../assets/1/shoppingCart.svg'
import world from '../assets/1/world.svg'
import arrowDown from '../assets/1/arrowDown.svg'
import twitter from '../assets/icons/twitter-brands.svg'
import instagram from '../assets/icons/instagram-brands.svg'

export default {
  name: "Navigation",
  components: {
    userIcon, menuIcon, shoppingCart, world, arrowDown , twitter , instagram
  }
}
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  justify-content: center;
}

.right {
  margin-left: 25%;
  cursor: pointer;


}

.left {
  margin-right: 25%;
  width: 155px;
  height: 48px;
  box-shadow: 0px 3px 6px #0000001A;
  cursor: pointer;
}
.icon{
  display: inline-flex;
}
.icon2{
  display: inline-flex;
  width: 32px;
  height: 24px;

}


</style>
