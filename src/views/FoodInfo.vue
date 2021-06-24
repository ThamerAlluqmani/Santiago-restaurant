<template>
  <div>
    <Model v-if="modelActive" :model-message="this.modelMessage" v-on:close-model="closeModel()"/>

    <div class="container mt-5">
      <h1 class="text-center mt-5">قائمة الطعام</h1>
      <p class="text-center mt-2 router">قائمة الطعام > الفطور > الفطور الصحي > بان تشيلي مع بطاطس</p>

      <div class="m-5">
        <img class="img-fluid  w-75" src="5/Mask.png" alt="">
      </div>


      <div class="row">
        <div id="right" class="col-sm-12 col-lg-6 col-md-6">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="row  mt-5">
                <h5 class="col text-end">بان تشيلي مع بطاطس
                  <div class="line"></div>
                </h5>
                <h5 class="col secondary text-start">20 ريال سعودي</h5>
              </div>

              <div>
                <p>الدجاج او اللحم او الجمبرى المطبوخ على المقلاة الصينى مضاف اليه صلصة الفلفل الحار او التوابل
                  الصينية</p>
              </div>

              <div class="row  mt-5">
                <h5 class="col text-end secondary">السعرات الحرارية</h5>
                <h5 class="col secondary text-start">( 70 سعرة حرارية )</h5>
              </div>

              <div>
                <div class="row mt-5">
                  <h5 class="col text-end ">إختيار من : (إختر 1 فقط)</h5>
                  <h5 class="col  text-start">
                    <arrow-down></arrow-down>
                  </h5>
                </div>

                <div class="lineBlock mt-sm-2">
                </div>

                <div class="row mt-5">


                  <div class="row col-12">

                    <label class="container2 col d-inline-flex">
                      <input type="radio" name="radio">
                      <span class="checkmark"></span>
                    </label>
                    <h6 class="col-4 d-inline-flex pt-2">
                      الحجم الوسط</h6>
                    <div class="w-25 d-inline-flex"></div>
                    <h6 class="col secondary col-4 pt-2">20 ريال سعودي</h6>
                  </div>

                  <div class="mt-4"></div>


                  <div class="row col-12">

                    <label class="container2 col d-inline-flex">
                      <input type="radio" name="radio">
                      <span class="checkmark"></span>
                    </label>
                    <h6 class="col-4 d-inline-flex pt-2">
                      الحجم الكبير</h6>
                    <div class="w-25 d-inline-flex"></div>
                    <h6 class="col secondary col-4 pt-2">35 ريال سعودي</h6>
                  </div>


                </div>

              </div>


              <div>
                <div class="row mt-5">
                  <h5 class="col text-end ">هل ترغب في اضافة شيء؟</h5>
                  <h5 class="col  text-start">
                    <arrow-down></arrow-down>
                  </h5>
                </div>

                <div class="lineBlock mt-sm-2">
                </div>
                <div class="row mt-5">


                  <div class="col-12">
                    <div class="checkbox_wrapper d-inline-flex">
                      <input type="checkbox"/>
                      <label></label>
                    </div>
                    <h6 class="d-inline-flex px-2 col-4" style="padding-right: 8px">اضافة جبنة موتزاريلا</h6>
                    <div class="w-25 d-inline-flex col-2"></div>
                    <h6 class=" secondary d-inline-flex col-3">+7 ريال سعودي</h6>
                  </div>

                  <div class="mt-3"></div>


                  <div class="col-12">
                    <div class="checkbox_wrapper d-inline-flex">
                      <input type="checkbox"/>
                      <label></label>
                    </div>
                    <h6 class="d-inline-flex col-4" style="padding-right: 8px">اضافة صوص الباربكيو</h6>
                    <div class="w-25 d-inline-flex col-2"></div>
                    <h6 class=" secondary d-inline-flex col-3">+10 ريال سعودي</h6>
                  </div>

                  <div class="mt-3"></div>


                  <div class="col-12">
                    <div class="checkbox_wrapper d-inline-flex">
                      <input type="checkbox"/>
                      <label></label>
                    </div>
                    <h6 class="d-inline-flex col-4" style="padding-right: 8px">اضافة سلطة طحينة</h6>
                    <div class="w-25 d-inline-flex col-2"></div>
                    <h6 class=" secondary d-inline-flex col-3">+5 ريال سعودي</h6>
                  </div>


                </div>

              </div>


              <div>
                <div class="row mt-5">
                  <h5 class="col text-end ">هل ترغب في ازالة شيء؟</h5>
                  <h5 class="col  text-start">
                    <arrow-down></arrow-down>
                  </h5>
                </div>

                <div class="lineBlock mt-sm-2">
                </div>
                <div class="row mt-5 row-cols-2">

                  <div class="col text-end mt-5">
                    <div class="checkbox_wrapper d-inline-flex">
                      <input type="checkbox"/>
                      <label></label>
                    </div>
                    <h6 class="d-inline-flex px-2">ازالة جبنة موتزاريلا</h6>
                  </div>


                  <div class="col text-end mt-5">
                    <div class="checkbox_wrapper d-inline-flex">
                      <input type="checkbox"/>
                      <label></label>
                    </div>
                    <h6 class="d-inline-flex px-2">ازالة جبنة موتزاريلا</h6>
                  </div>


                  <div class="col text-end mt-5">
                    <div class="checkbox_wrapper d-inline-flex">
                      <input type="checkbox"/>
                      <label></label>
                    </div>
                    <h6 class="d-inline-flex px-2">ازالة صوص الباربكيو</h6>
                  </div>


                  <div class="col text-end mt-5">
                    <div class="checkbox_wrapper d-inline-flex">
                      <input type="checkbox"/>
                      <label></label>
                    </div>
                    <h6 class="d-inline-flex px-2">ازالة صوص الباربكيو</h6>
                  </div>

                </div>

              </div>

              <div>
                <div class="row mt-5 form-group">
                  <h3 class="col text-end " style="font-weight: bold">ملاحظات</h3>
                  <textarea class="form-control" name="" id="" cols="20" rows="5" placeholder="اضف ملاحظة"></textarea>

                </div>
              </div>

              <div>
                <div class="row mt-5 ">
                  <button @click="runModel()" style="font-weight: bold" class="col btn btn-lg customBtn2 ml">
                    <bascket></bascket>
                    اضافة
                  </button>
                  <button :class="number === 0 ? 'disabled' : ''" style="font-weight: bold"
                          class="col btn btn-lg customBtn2  ">
                    <span @click="number--">-</span>
                    <span>{{ number }}</span>
                    <span @click="number++">+</span>
                  </button>
                </div>

              </div>

            </li>

          </ul>
        </div>


        <div id="left" class="col-sm-12 col-lg-6 col-md-6">
          <div class="boxShadow p-3">
            <div class="row mt-5">
              <h3 class="col text-end" >التقييمات</h3>
              <h3 class="col text-start" style="font-weight: bold">4.5</h3>
            </div>
            <div class="row">
              <div class="text-end"></div>
              <div class="text-start">
                <star class="star"></star>
                <star class="star "></star>
                <star class="star "></star>
                <star class="star "></star>
              </div>
            </div>

            <div class="lineBlock">
            </div>
           <div class="comment">
             <Comment></Comment>
             <Comment></Comment>
             <Comment></Comment>
             <button class="customBtn secondary mt-5 mb-5">اضف تقييمك</button>

           </div>


          </div>

        </div>
      </div>


      <div class="mt-5">
        <h3 style="font-weight: bold">الأفضل مبيعاً</h3>
        <div class="row mt-5 ">
          <div v-if="!this.mobile" class="col col-lg-1 pt-5 p-5">
            <Rarow class="icon3" />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 p-5">
            <img src="1/breakfast-4.png" alt="" class="card-img">
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 p-5">
            <img src="1/breakfast-2.png" alt="" class="card-img">
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 p-5">
            <img src="1/breakfast-3.png" alt="" class="card-img">
          </div>
          <div v-if="this.mobile" class="col-lg-3 col-md-6 col-sm-12 p-5">
            <img src="1/breakfast-3.png" alt="" class="card-img">
          </div>
          <div v-show="!mobile" class="col col-lg-1 pt-5 p-5">
            <Larow class="icon3"/>
          </div>


        </div>
      </div>


      <div class="text-center m-5 ">
        <router-link class="back text-center" :to="{name:'HealthyBreakfast'}">رجوع الى القائمة السابقة</router-link>
      </div>

    </div>

  </div>
</template>

<script>
import arrowDown from '../assets/1/arrowDown.svg'
import Comment from "../components/Comment";
import bascket from '../assets/5/Icon material-add-shopping-cart.svg'
import Model from "../components/Model";
import star from '../assets/icons/star-solid.svg'
import Larow from '../assets/icons/angle-left-solid.svg'
import Rarow from '../assets/icons/angle-right-solid.svg'

export default {
  name: "FoodInfo",
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      modelActive: false,
      modelMessage: "test",
      number: 1
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  components: {
    Model,
    Comment,
    arrowDown, bascket, star , Rarow , Larow
  },
  methods: {
    closeModel() {
      this.modelActive = !this.modelActive;
      this.email = "";
      this.$router.push({name: "ViewOrder"})
    },
    runModel() {
      this.modelActive = true;
      window.scrollTo(0, 0);

    },


    checkScreen(){
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1080){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      return;
    },
  },

}
</script>

<style lang="scss" scoped>

.router {
  color: #E2725A;
}

img {
  display: block;
  margin: 0 auto;
}


.secondary {
  color: #85311B;

  &:hover {
    color: #ef9a83;
    cursor: pointer;
  }
}

.line {
  width: 64px;
  padding-bottom: 16px;
  border-bottom: 2px solid;
}

.image {
  height: 323px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.boxShadow {
  background: #FBFBFB 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  margin: 32px 0px;


}

.link {
  text-decoration: none;
  color: black;
}

.lineBlock {
  color: #00000029;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 2px solid;
}

.customBtn {
  width: 236px;
  height: 82px;
  border: none;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-weight: bold;
}

.customBtn2 {
  border: 1px solid;
  border-radius: 10px;
  margin: 32px 0px;
  width: 337px;
  height: 98px;
  font-size: 28px;
}

.ml {
  margin-left: 32px;
}

.back {
  color: #E2725A;
  font-size: 24px;

}

.star {
  fill: #FFCC00;
  width: 32px;

}

span {
  margin: 5%;
}

.card-img {
  max-width: 250px;
}

.checkbox_wrapper {
  position: relative;
  height: 27px;
  width: 27px;

}

input[type="checkbox"] {
  opacity: 0;
  height: 16px;
  width: 17px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
}

input[type="checkbox"] + label {


  height: 27px;
  width: 27px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

}

input[type="checkbox"]:checked + label {
  background-image: url(../assets/checkBox.png);
  border: none;
  background-repeat: no-repeat;
  background-size: auto;
  fill: black;
  display: inline-block;
  padding: 0 0 0 0px;
}

h6 {
  font-weight: bold;
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
textarea{
  border: none;
  background: #F9F9F9 0% 0% no-repeat padding-box;
  border-radius: 15px;
}
.comment{
  padding: 0 24px 24px 24px;

}
h5{
  font-weight: bold;
}
.icon3{
  fill: #C2C2C2;
  width: 72px;
  height: 128px;
  padding-top: 68px;
  cursor: pointer;
  &:hover{
    fill: rgba(64, 64, 64, 0.73);
  }
  @media (max-width: 1080px) {
    width: 48px;
    height: 108px;
    padding-top: 58px;
  }
}
</style>
