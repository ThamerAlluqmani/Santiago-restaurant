<template>
  <div class="container mt-5 center mb-5">
    <div v-show="!this.mobile" class="wrapper">
      <div class="margin-area">
        <div class="dot two"></div>
        <div class="dot three"></div>
        <div class="dot four"></div>
        <div class="progress-bar second"></div>
        <div class="progress-bar third"></div>
        <div class="message message-1">

          <div>
            <div class="message message-2">التنفيذ
              <div>
                <div class="message message-3">الفاتورة
                  <div>
                    <div class="message message-4">طلباتك
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Card3></Card3>
    <Card3></Card3>
    <Card3></Card3>

    <div>
      <button @click="$router.push({name:'Checkout'})" class="text-white text-center btn d-inline  m-5" style="font-weight: bold; font-size: 24px">التالي</button>
      <router-link :to="{name:'Home'}" class="text-decoration-none d-inline m-lg-5 back" style="color: black;font-weight: bold; font-size: 24px">العودة للقائمة</router-link>
    </div>


  </div>
</template>

<script>
import Card3 from "../components/Card3";
export default {
  name: "Breakfast",
  components:{
    Card3

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
.center{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.boxShadow {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  margin: 32px 0px;

}

.cardCenter {
  margin: auto auto;


}
.back{
  @media(max-width: 600px) {
    margin-right: 96px;
  }
}

.line {
  width: 25%;
  padding-bottom: 16px;
  border-bottom: 2px solid;
  margin: 0 auto;
}

label {
  font-weight: bold;
  font-size: 16px;
}

button {
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: #333333;
}

.secondary {
  color: #85311B;

  &:hover {
    color: #E2725A;
  }
}

.wrapper {
  background: #ffffff;
  width: 844px;
  height: 160px;
  margin-right: 15%;
}

.margin-area {
  position: relative;
  text-align: center;
  font-family: "Trebuchet", sans-serif;
  font-size: 14px;
  margin: 0 20px;
}

.dot {
  height: 30px;
  width: 30px;
  position: absolute;
  background: #333333;
  border-radius: 50%;
  top: 10px;
  color: #fff;
  line-height: 30px;
  z-index: 9999;

  &.one {
    left: 65px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
  }

  &.two {
    left: 280px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
  }

  &.three {
    left: 490px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
  }

  &.four {
    left: 700px;
    background: #333333 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
  }
}

.progress-bar {
  position: absolute;
  width: 25%;
  top: 25px;
  left: 10%;
  border: 1px solid #707070;

  &.first {
    background: #bbb;
  }

  &.second {
    left: 37%;
  }

  &.third {
    left: 64%;
  }
}

.message {
  position: absolute;
  height: 60px;
  width: 170px;
  padding: 10px;
  margin: 0;
  left: -8px;
  top: 0;
  color: #000;
  font-weight: bold;

  &.message-1 {
    top: 40px;
    color: #000;
  }

  &.message-2 {
    left: 210px;
  }

  &.message-3 {
    left: 210px;
    color: #000;
  }

  &.message-4 {
    left: 210px;
  }
}

.status {
  position: absolute;
  width: 700px;
  left: -600px;
  text-align: center;
  padding: 20px;
  color: black;

  &.code {
    top: 70px;
  }
}

a {
  color: #0C84D9;
  text-decoration: none;
  font-weight: bold;

  &:hover, &:focus {
    text-decoration: underline;
  }
}
.secondary {
  color: #85311B;

  &:hover {
    color: #ef9a83;
    cursor: pointer;
  }
}
img{
  width: 238px;
  height: 238px;
  margin-left: 5%;
}
.CustomBtn{
  background-color: white!important;
  color: #333333;
  border: 1px solid;
}
.btn{
  border-radius: 10px;
  padding: 8px 64px;
  width: 247px;
  height: 89px;
}
</style>
