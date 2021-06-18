<template>
  <div class="container mt-5 center">
    <div class="wrapper">
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

    <div class="boxShadow row row-cols-2 m-5 w-75" >
      <img class="col" src="/2/dinner-2.png" alt="">
     <div class="col">
       <div class="card container ">
         <div class="card-title">
           <div class="row mt-5">
             <h5 class="col text-end">بان تشيلي مع بطاطس
               <div class="line"></div>
             </h5>
             <h5 class="col secondary text-start">20 ريال سعودي</h5>
           </div>
         </div>
         <div class="card-body">
           <p>الدجاج او اللحم او الجمبرى المطبوخ على المقلاة الصينى مضاف اليه صلصة الفلفل الحار او التوابل الصينية</p>

           <div class="row mt-5">
             <p class="col text-end">ازالة الصوص الحار</p>
             <p class="col text-start secondary">تعديل</p>
           </div>

         </div>

       </div>
       <div class="row mt-5">
         <button class="CustomBtn btn-lg  m-2 col  d-inline"><bascket></bascket> حذف</button>
         <button class="CustomBtn btn-lg  m-2 col d-inline ">-  1  +</button>

       </div>
     </div>


    </div>

    <div class="boxShadow row row-cols-2 m-5 w-75" >
      <img class="col" src="/2/dinner-2.png" alt="">
      <div class="col">
        <div class="card container ">
          <div class="card-title">
            <div class="row mt-5">
              <h5 class="col text-end">بان تشيلي مع بطاطس
                <div class="line"></div>
              </h5>
              <h5 class="col secondary text-start">20 ريال سعودي</h5>
            </div>
          </div>
          <div class="card-body">
            <p>الدجاج او اللحم او الجمبرى المطبوخ على المقلاة الصينى مضاف اليه صلصة الفلفل الحار او التوابل الصينية</p>

            <div class="row mt-5">
              <p class="col text-end">ازالة الصوص الحار</p>
              <p class="col text-start secondary">تعديل</p>
            </div>

          </div>

        </div>
        <div class="row mt-5">
          <button class="CustomBtn btn-lg  m-2 col  d-inline"><bascket></bascket> حذف</button>
          <button class="CustomBtn btn-lg  m-2 col d-inline ">-  1  +</button>

        </div>
      </div>


    </div>


    <div class="boxShadow row row-cols-2 m-5 w-75" >
      <img class="col" src="/2/dinner-2.png" alt="">
      <div class="col">
        <div class="card container ">
          <div class="card-title">
            <div class="row mt-5">
              <h5 class="col text-end">بان تشيلي مع بطاطس
                <div class="line"></div>
              </h5>
              <h5 class="col secondary text-start">20 ريال سعودي</h5>
            </div>
          </div>
          <div class="card-body">
            <p>الدجاج او اللحم او الجمبرى المطبوخ على المقلاة الصينى مضاف اليه صلصة الفلفل الحار او التوابل الصينية</p>

            <div class="row mt-5">
              <p class="col text-end">ازالة الصوص الحار</p>
              <p class="col text-start secondary">تعديل</p>
            </div>

          </div>

        </div>
        <div class="row mt-5">
          <button class="CustomBtn btn-lg  m-2 col  d-inline"><bascket></bascket> حذف</button>
          <button class="CustomBtn btn-lg  m-2 col d-inline ">-  1  +</button>

        </div>
      </div>


    </div>


    <div>
      <button class="text-white text-center btn d-inline  m-5" style="color: black;font-weight: bold; font-size: 24px">التالي</button>
      <router-link :to="{name:'Home'}" class="text-decoration-none d-inline m-5 " style="color: black;font-weight: bold; font-size: 24px">العودة للقائمة</router-link>
    </div>


  </div>
</template>

<script>
import bascket from '../assets/5/Icon material-add-shopping-cart.svg'
export default {
  name: "Breakfast",
  components:{
    bascket
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
  background: #000;
  border-radius: 50%;
  top: 10px;
  color: #fff;
  line-height: 30px;
  z-index: 9999;

  &.one {
    left: 65px;
    background: #bbb;
    color: #bbb;
  }

  &.two {
    left: 280px;
    background: #bbb;
    color: #bbb;
  }

  &.three {
    left: 490px;
    background: #bbb;
    color: #bbb;
  }

  &.four {
    left: 700px;
    background: #333333;
    color: #333333;
  }
}

.progress-bar {
  position: absolute;
  height: 10px;
  width: 25%;
  top: 20px;
  left: 10%;
  background: #bbb;

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
}
</style>
