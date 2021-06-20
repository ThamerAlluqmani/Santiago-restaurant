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

    <div v-else class="right row">
      <div class="icon col">
        <menu-icon class="icon"></menu-icon>
      </div>


        <router-link class="col" :to="{name:'ViewOrder'}">
          <div class="icon col">
          <shopping-cart  class="icon"></shopping-cart>
          </div>
        </router-link>




      <router-link class="col" :to="{name:'Login'}">
        <div class="icon col">
          <user-icon class="icon"></user-icon>
        </div>
      </router-link>


    </div>

   <router-link :to="{name:'Home'}">
     <img src="../assets/logo.png" alt="">
   </router-link>
    <div class="dropdown left">
      <button class="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        <world class="icon"></world>
        العربية
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li><button class="dropdown-item" type="button">English</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import userIcon from '../assets/1/userIcon.svg'
import menuIcon from '../assets/1/menuIcon.svg'
import shoppingCart from '../assets/1/shoppingCart.svg'
import world from '../assets/1/world.svg'
import twitter from '../assets/icons/twitter-brands.svg'
import instagram from '../assets/icons/instagram-brands.svg'

export default {
  name: "Navigation",
  components: {
    userIcon, menuIcon, shoppingCart, world , twitter , instagram
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
  cursor: pointer;
}

.btn{
  color: #333333;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;

  &:hover{
    background-color: white;
    color: #333333;

  }
}

</style>
