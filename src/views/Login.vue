<template>
<div class="mb-5 mt-5">
  <div class="container mt-5 mb-5">
      <div class="box cardCenter">
        <div class="m-5">
          <h3 class="text-center fw-bold p-3">تسجيل الدخول
            <div class="line text-center"></div></h3>
          <div class="card-body ">
            <div>
              <label style="font-weight: bold; cursor: pointer" for="phone">رقم الجوال</label>
              <vue-tel-input class="customInput mb-3 boxShadow" dir="ltr" v-model="phone"></vue-tel-input>
            </div>

            <div v-show="displayItem" class="mt-5">
              <label style="font-weight: bold; cursor: pointer" for="check">رمز التحقق</label>
              <div class="boxShadow">
                <input id="check" name="phone" type="tel"  class="form-control mt-3">
              </div>
            </div>
            <h5 v-show="displayItem" class="text-center mt-5">اعادة الإرسال بعد 00:23</h5>
            <button @click="displayHidden()" class="btn btn-lg  text-white mt-5 customBtn">{{button}}</button>
            <div class="register-link text-center mt-5">
              <router-link :to="{name:'Register'}" class="secondary  text-decoration-none ">ليس لديك حساب ؟</router-link>
            </div>
          </div>
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

.box {
  background: #F9F9F9 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 25px;
  margin: 32px 0px;
  max-width: 720px;

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
.customBtn{
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 143px;
  height: 62px;
  @media(max-width: 600px){
    width: 96px;
    height: 48px;
  }
  background: #333333 0% 0% no-repeat padding-box;
  border-radius: 15px;
}
.secondary{
  color: #85311B;
&:hover{
   color: #E2725A;
 }
}

.register-link{
  font-size: 16px;
  font-weight: bold;
  @media(max-width: 600px){
    margin: 36px;
  }
}
.boxShadow{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
}
.customInput{
  font-weight: bold;
  outline: none;
  border: none;
  height: 72px;
  @media(max-width: 600px){
    height: 51px;
  }
}
</style>
