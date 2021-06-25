<template>
<div class="mb-5 mt-5">
  <div class="container mt-5 mb-5">

      <div class="box cardCenter">
        <div class="m-5">
          <h3 class="text-center fw-bold p-5">تسجيل الدخول
            <div class="line text-center"></div></h3>
          <div class="card-body ">
            <div class="mt-5">
              <label style="font-weight: bold; cursor: pointer" for="phone">رقم الجوال</label>
              <div class="input-group mb-3 boxShadow">
                <input name="phone" dir="ltr" id="phone" type="text" class="form-control" aria-label="Text input with dropdown button">
                <button class=" btn bg-white dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">+966</button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </div>

            <div v-show="displayItem" class="mt-5">
              <label style="font-weight: bold; cursor: pointer" for="check">رمز التحقق</label>
              <div class="boxShadow">
                <input id="check" name="phone" type="tel"  class="form-control mt-3">
              </div>
            </div>
            <h5 v-show="displayItem" class="text-center mt-5">اعادة الإرسال بعد 00:23</h5>
            <button @click="displayHidden()" class="btn btn-lg  text-white mt-5">{{button}}</button>
            <div class="register-link">
              <router-link :to="{name:'Register'}" class="secondary  text-decoration-none">ليس لديك حساب ؟</router-link>
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
button{
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 183px;
  height: 86px;
  @media(max-width: 600px){
    width: 115px;
    height: 62px;
  }
  color: #FFFFFF;
  background: #333333 0% 0% no-repeat padding-box;
  border-radius: 15px;
}
.secondary{
  color: #85311B;
&:hover{
   color: #E2725A;
 }
}

input {
  border: none;
  font-weight: bold;

  &:focus {
    outline: none;
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
.form-control{
  height: 102px;
  @media(max-width: 600px){
    height: 51px;
  }
}
</style>
