<template>
  <div class="mb-5 mt-5">
    <div class="container mt-5 mb-5">

      <div class="box cardCenter" style="max-width: 720px">
        <h3 class="text-center mt-5 p-5">التسجيل لأول مره
          <div class="line text-center"></div>
        </h3>
        <div class="card-body ">
          <div class="mt-5 row row-cols-2">
            <div class="col">
              <label style="font-weight: bold; cursor: pointer" for="first">الاسم الاول</label>
              <div class="boxShadow">
                <user class="icon"></user>
                <input id="first" name="first" type="text"  class="customInput">
              </div>
            </div>
            <div class="col">
              <label style="font-weight: bold; cursor: pointer" for="second">الاسم الثاني</label>
              <div class="boxShadow">
                <users class="icon"></users>
                <input id="second" name="second" type="text"  class="customInput">
              </div>
            </div>
          </div>
          <div class="mt-5">
            <label style="font-weight: bold; cursor: pointer" for="email">البريد الإلكتروني</label>
            <div class="boxShadow">
              <email class="icon"></email>
              <input id="email" name="email" type="email"  class="customInput">
            </div>
          </div>


          <div class="mt-5 row row-cols-2">
            <div class="col">
              <label style="font-weight: bold; cursor: pointer" for="sex">الجنس</label>
              <div class="row boxShadow p-2">
                <div class="col">
                <div class="container">
                  <label class="container2 col d-inline-flex">
                    <input id="sex" type="radio" name="radio">
                    <span class="checkmark"></span>
                  </label>
                </div>
                 <div class="px-5">
                   <h6>ذكر</h6>
                 </div>
                </div>

                <div class="col">
                  <div class="container">
                    <label class="container2 col d-inline-flex">
                      <input id="sex" type="radio" name="radio">
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="px-5">
                    <h6>انثى</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <label style="font-weight: bold; cursor: pointer" for="phone">رقم الجوال</label>
              <div class="input-group mb-3 boxShadow">
                <input name="phone" id="phone" type="tel" class="customInput" aria-label="Text input with dropdown button">
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
          </div>


          <div v-show="displayItem" class="mt-5">
            <label style="font-weight: bold; cursor: pointer" for="check">رمز التحقق</label>
            <div class="boxShadow">

              <input id="check" name="check" type="text"  class="customInput">
            </div>
          </div>
          <h5 v-show="displayItem" class="text-center mt-5">اعادة الإرسال بعد 00:23</h5>
          <button @click="displayHidden()" class="register-button  mt-5 ">{{ button }}</button>
          <div class="login-link">
            <router-link :to="{name:'Login'}" class="secondary text-decoration-none"
                         style="font-size: 16px; font-weight: bold">مسجل مسبقاً ؟
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import user from '../assets/icons/user-solid.svg'
import users from '../assets/icons/user-friends-solid.svg'
import email from '../assets/icons/envelope-regular.svg'

export default {
  name: "Login",
  components: {
    users, user, email
  },
  data() {
    return {
      button: "التسجيل",
      displayItem: false,
    }
  },
  methods: {
    displayHidden() {
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

}

.cardCenter {
  margin: auto auto;


}

.line {
  width: 15%;
  padding-bottom: 16px;
  border-bottom: 2px solid;
  margin: 0 auto;
}

label {
  font-weight: bold;
  font-size: 16px;
}

.register-button{
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

.secondary {
  color: #85311B;

  &:hover {
    color: #E2725A;
  }
}

.icon {
  width: 32px;
  padding: 5px;
  display: inline;
}

input {
  border: none;
  font-weight: bold;


  &:focus {
    outline: none;
  }
}
.container2 {
  position: relative;
  cursor: pointer;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container2 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 50%;
}

.container2:hover input ~ .checkmark {
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
}

.container2 input:checked ~ .checkmark {
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container2 input:checked ~ .checkmark:after {
  display: block;
}

.container2 .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #E2725A;
}

.login-link{
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
  margin: 8px 0;
}
.customInput{
  display: inline;
  height: 68px;
  @media(max-width: 600px){
    height: 48px;
    width: 48px;
  }

}

</style>
