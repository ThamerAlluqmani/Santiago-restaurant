<template>
 <header>
   <nav id="nav" class="mt-5">
     <div v-if="this.$route.name === 'HealthyBreakfast' && !this.mobile" class="right row">


       <div class="col"  v-show="!this.mobile">
         <span class="px-2">تابعنا : </span>
         <twitter class="icon2 mx-2"></twitter>
         <instagram class="icon2 mx-2"></instagram>

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
       <div class="dropdown">
         <button class="btn  dropdown-toggle border-white" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
           <world></world><span class="p-2">العربية</span>
         </button>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
           <li><button class="dropdown-item text-center" type="button">English</button></li>
         </ul>
       </div>
     </div>



     <close v-if="this.mobileNav" @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
     <menuIcon v-else @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>

     <transition name="mobile-nav">
       <ul class="mobile-nav" v-show="mobileNav" @click="toggleMobileNav">
         <router-link class="link" :to="{name: 'Home'}"><home-phone class="icon"></home-phone>
           الرئيسية</router-link>
         <router-link class="link" :to="{name: 'ViewOrder'}"><shopping-cart-phone class="icon"></shopping-cart-phone>
           سلة المشتريات</router-link>
         <router-link class="link" :to="{name: 'Login'}"><user-icon-phone class="icon"></user-icon-phone>
           تسجيل الدخول/التسجيل</router-link>
         <router-link class="link" :to="{name: 'Home'}">
           <world-phone class="icon"></world-phone>
           العربية / English</router-link>
       </ul>
     </transition>
   </nav>
 </header>

</template>

<script>
import userIcon from '../assets/1/userIcon.svg'
import userIconPhone from '../assets/icons/user.svg'
import menuIcon from '../assets/1/menuIcon.svg'
import shoppingCart from '../assets/1/shoppingCart.svg'
import world from '../assets/1/world.svg'
import twitter from '../assets/icons/twitter-brands.svg'
import instagram from '../assets/icons/instagram-brands.svg'
import close from '../assets/icons/times-solid.svg'
import worldPhone from '../assets/icons/globe-solid.svg'
import shoppingCartPhone from '../assets/icons/shopping-cart-solid.svg'
import homePhone from '../assets/icons/home-solid.svg'

export default {
  name: "Navigation",
  components: {
    shoppingCartPhone, homePhone,
    userIcon, menuIcon, shoppingCart, world , twitter , instagram ,close , worldPhone,userIconPhone
  },
  data(){
    return{
      mobile: null,
      mobileNav: null,
      windowWidth: null,

    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods:{
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1080){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      return;
    },

    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
      this.profileMenu = false;
    },

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
  width: 38px;
  border-radius: 50%;
  padding: 8px;
  box-shadow: 0px 0px 3px #00000029;
}
header {
  background-color: #fff;
  padding: 0 25px;
  z-index: 99;

  .link{
    font-weight: 500;
    padding: 0 8px;
    transition: .3s color ease;
    &:hover{
      color: #1eb8b8;
    }
  }

  nav{
    //display: flex;
    // make links right at the end of the page
    display: block;
    padding: 25px 0;
    .branding{
      display: flex;
      align-items: center;
      .header{
        font-weight: 600;
        font-size: 24px;
        color: black;
        text-decoration: none;
      }
    }


    .nav-links{
      position: relative;
      display: flex;
      flex:1;
      align-items: center;
      justify-content: flex-end;

      ul{
        margin-right: 32px;
        .link{
          margin-right: 32px;
        }
        .link:first-child{
          margin-right: 0;
        }

      }

      .profile{
        @media (max-width: 750px) {
          margin-left: 32px;
        }
        position: relative;
        cursor: pointer;
        display: flex;
        margin-right: 16px;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: white;
        background-color: #303030;

        span{
          pointer-events: none;
        }

        .profile-menu{
          position: absolute;
          top: 60px;
          left: 0;
          width: 250px;
          background-color: #303030;
          box-shadow: 0 4px 6px -1px rgba(0 , 0 ,0 ,0.1), 0 2px 4px -1px rgba(0, 0 , 0 , 0.06);


          .info{

            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid white;

            .initials{
              position: initial;
              margin-left: 5px;
              width: 40px;
              height: 40px;
              background-color: #ffffff;
              color: #303030;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }

            .right{
              flex: 1;
              margin-left: 24px;

              p:nth-child(1){
                font-size: 14px;
              }

              p:nth-child(2),p:nth-child(3){
                font-size: 12px;
              }

            }



          }

          .options{
            padding: 15px;
            .option{
              text-decoration: none;
              color: white;
              display: flex;
              align-items: center;
              margin-bottom: 12px;

              .icon{
                width: 18px;
                height: auto;
              }
              p{
                font-size: 14px;
                margin-right: 12px;

              }

              &:last-child{
                margin-bottom: 0;
              }

            }
          }

        }


      }


    }
  }

  .menu-icon{
    cursor: pointer;
    position: absolute;
    top: 32px;
    left: 25px;
    height: 25px;
    width: auto;
  }
  .icon{
    fill: white;
    height: 25px;
    width: auto;
    margin-left: 8px;
  }

  .mobile-nav{
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    right: 0;

    .link{
      padding: 15px 0 ;
      color: #fff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active{
    transition: all 1s ease;
  }
  .mobile-nav-enter{
    transform: translate(250px);
  }
  .mobile-nav-enter-to{
    transform: translate(0);
  }
  .mobile-nav-leave-to{
    transform: translate(250px);

  }

}
</style>
