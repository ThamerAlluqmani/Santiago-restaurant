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

    <div class="check-out mb-5">
      <div class="p-5">
        <table>
          <tr class="row">
            <th class="row col-4 p-5">
              <span @click="number1--" class="col-1">-</span>
              <span class="col-1 ">{{ number1 }}</span>
              <span @click="number1++" class="col-1 ">+</span>
            </th>
            <th class="col-8 row right">
              <div class="col-6 p-4">بان تشيلى مع بطاطس</div>
              <div class="col-6 secondary text-start p-4 fs-6">20 ريال سعودي</div>

            </th>
          </tr>
          <tr class="line"></tr>
          <tr class="row">
            <th class="row col-4 p-5">
              <span @click="number2--" class="col-1">-</span>
              <span class="col-1 ">{{ number2 }}</span>
              <span @click="number2++" class="col-1 ">+</span>
            </th>
            <th class="col-8 row right">
              <div class="col-6 p-4">بان تشيلى مع بطاطس</div>
              <div class="col-6 secondary text-start p-4 fs-6">20 ريال سعودي</div>

            </th>
          </tr>
          <tr class="line"></tr>
          <tr class="row">
            <th class="row col-4 p-5">
              <span @click="number3--" class="col-1">-</span>
              <span class="col-1 ">{{ number3 }}</span>
              <span @click="number3++" class="col-1 ">+</span>
            </th>
            <th class="col-8 row right">
              <div class="col-6 p-4">بان تشيلى مع بطاطس</div>
              <div class="col-6 secondary text-start p-4 fs-6">20 ريال سعودي</div>

            </th>
          </tr>
          <tr class="line"></tr>
          <tr class="row">
            <th class="row col-4 p-4">
              <div>المجموع</div>
            </th>
            <th class="col-8 row right">
              <div class="col-6 p-4"></div>
              <div class="col-6 text-black-50 text-start p-4 fs-6">60 ريال سعودي</div>

            </th>
          </tr>
          <tr class="line"></tr>
          <tr class="row">
            <th class="row col-3 p-4">
              <div>
                <input class="customInput" placeholder="رمز قسيمة الخصم" type="text">
              </div>
            </th>
            <th class="col-9 row">
              <div class="col-lg-6 col-md-4 col-sm-12 p-4"></div>
              <div class="col-lg-4 col-md-4 col-sm-12  text-black-50 p-4">
                <button class="customBtn">تفعيل القسيمة</button>
              </div>

            </th>
          </tr>
          <tr class="line"></tr>
          <tr class="row">
            <th class="row col-4 p-4">
              <div>الخصم</div>
            </th>
            <th class="col-8 row right">
              <div class="col-6 p-4"></div>
              <div class="col-6 text-black-50 text-start p-4 fs-6">10 ريال سعودي</div>

            </th>
          </tr>
          <tr class="line"></tr>
          <tr class="row">
            <th class="row col-4 p-4">
              <div>ضريبة القيمة المضافة</div>
            </th>
            <th class="col-8 row right">
              <div class="col-6 p-4"></div>
              <div class="col-6 text-start text-black-50 p-4 fs-6">70 ريال سعودي</div>
            </th>
          </tr>
          <tr class="line"></tr>
          <tr class="row mb-5">
            <th class="row col-4 p-4">
              <div>الإجمالي</div>
            </th>
            <th class="col-8 row right">
              <div class="col-6 p-4"></div>
              <div class="col-6 text-start text-black-50 p-4 fs-6">20 ريال سعودي</div>

            </th>
          </tr>


        </table>
      </div>
    </div>

    <div>
      <button @click="$router.push({name:'Order'})" class="text-white text-center btn d-inline  m-5"
              style="color: black;font-weight: bold; font-size: 24px">تنفيذ الطلب
      </button>
      <router-link :to="{name:'ViewOrder'}" class="text-decoration-none d-inline m-lg-5 back"
                   style="color: black;font-weight: bold; font-size: 24px">تعديل الطلب
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      mobile: null,
      number1: 1,
      number2: 1,
      number3: 1,

    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
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
* {
  font-weight: bold;

}

span {
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
}

.btn {
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: #333333;
  border-radius: 10px;
  padding: 8px 48px;
  width: 247px;
  height: 89px;
}

.back {
  @media(max-width: 600px) {
    margin: 96px!important;
  }
}

.customInput {
  background: #F9F9F9 0% 0% no-repeat padding-box;
  border-radius: 10px;
  border: none;
  outline: none;
  width: 243px;
  height: 89px;
  font-weight: lighter;
  font-size: 16px;

}

.customBtn {
  border: 1px solid #333333;
  border-radius: 10px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  font-weight: bold;
  font-size: 18px;
  width: 194px;
  height: 82px;
  flex: 1;
  @media (max-width: 800px) {

    margin-top: 48px;
    margin-left: 72px

  }
}

.check-out {
  font-size: 24px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  opacity: 1;
  @media(max-width: 800px) {
    font-size: 16px;
  }


  table {
    width: 100%;

  }

  .line {
    border-bottom: 1px solid;
    border-color: #00000029;
  }

  .right {
    border-right: 1px solid;
    border-color: #00000029;
    @media(max-width: 800px) {
      border-right: none;
    }
  }
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
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


  &.two {
    left: 280px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
  }

  &.three {
    left: 490px;
    background: #333333 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;

  }

  &.four {
    left: 700px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
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
</style>
