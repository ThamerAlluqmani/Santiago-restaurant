<template>
  <div id="nav" class="mt-5">
    <div v-if="this.$route.name === 'HealthyBreakfast'" class="right">
    <div class="row"  v-show="!this.mobile">
      <div class="icon  col-lg-4 col-md-6 col-sm-12">تابعنا
      </div>

      <div class="icon2 col-lg-4 col-md-6 col-sm-12">
        <twitter class="icon2"></twitter>
      </div>



      <div class="icon2  col-lg-4 col-md-6 col-sm-12 ">
        <instagram class="icon2"></instagram>
      </div>

    </div>


    </div>

    <div v-else class="right row"   v-show="!this.mobile">
      <router-link class="col" :to="{name:'Home'}">
        <div class="icon col">
          <menu-icon  class=""></menu-icon>
        </div>
      </router-link>


        <router-link class="col" :to="{name:'ViewOrder'}">
          <div class="icon col">
          <shopping-cart  class=""></shopping-cart>
          </div>
        </router-link>




      <router-link class="col" :to="{name:'Login'}">
        <div class="icon col">
          <user-icon class=""></user-icon>
        </div>
      </router-link>


    </div>

   <router-link :to="{name:'Home'}">
     <img src="../assets/logo.png" alt="">
   </router-link>
    <div class="left"  v-show="!this.mobile">
      <div class="btn">
        <world class=""></world>
        <select class="p-2">
          <option class="" value="">
            العربية
          </option>
          <option class="" value="">
            English
          </option>
        </select>
      </div>



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
  },
  data(){
    return{
      mobile:null

    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods:{
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  justify-content: center;
}

.right {
  cursor: pointer;
  @media (min-width: 700px) {
    margin-left: 25%;

  }


}

.left {

  @media (min-width: 700px) {
    margin-right: 25%;

  }
  @media (max-width: 600px) {


  }


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
select{
  font-family: 'FontAwesome', 'sans-serif'!important;
  border: none;
}
.icon2{
  width: 27px;
}
</style>
