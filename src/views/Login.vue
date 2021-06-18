<template>
<div class="mb-5 mt-5">
  <div class="container mt-5 mb-5">

      <div class="boxShadow cardCenter" style="max-width: 720px">
        <h3 class="text-center mt-5">تسجيل الدخول
          <div class="line text-center"></div></h3>
       <div class="card-body ">
          <div class="mt-5">
            <label style="font-weight: bold; cursor: pointer" for="phone">رقم الجوال</label>
            <input style="direction: ltr" id="phone" name="phone" type="tel" placeholder="+966" class="form-control mt-3">
          </div>

         <div v-show="displayItem" class="mt-5">
           <label style="font-weight: bold; cursor: pointer" for="check">رمز التحقق</label>
           <input style="direction: ltr" id="check" name="phone" type="tel"  class="form-control mt-3">
         </div>
         <h5 v-show="displayItem" class="text-center mt-5">اعادة الإرسال بعد 00:23</h5>
         <button @click="displayHidden()" class="btn btn-lg  text-white mt-5">{{button}}</button>
         <router-link :to="{name:'Register'}" class="secondary text-decoration-none" style="font-size: 16px; font-weight: bold">ليس لديك حساب ؟</router-link>
       </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      button:"الدخول",
      displayItem: false,
    }
  },
  methods:{
    displayHidden(){
      this.button = "التحقق"
      this.displayItem = true;

    }
  }
}
</script>

<style lang="scss" scoped>

.boxShadow {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  margin: 32px 0px;

}
.cardCenter{
  margin: auto auto;


}
.line {
  width: 10%;
  padding-bottom: 16px;
  border-bottom: 2px solid;
  margin: 0 auto;
}
label{
  font-weight: bold;
  font-size: 16px;
}
button{
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: #333333;
}
.secondary{
  color: #85311B;
&:hover{
   color: #E2725A;
 }
}
</style>
