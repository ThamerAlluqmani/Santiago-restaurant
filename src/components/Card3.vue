<template>
<div>
  <div id="card" class="boxShadow mb-3 p-5" style="max-width: 840px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="../assets/5/dinner-2.png" alt="...">
      </div>
      <div class="col-md-12 col-lg-8 ">
        <div class="card-body mb-3">
          <div class="row justify-content-between">
            <h5 class="card-title text-end col bold">بان تشيلى مع بطاطس
            <div class="line col-12"></div>
            </h5>
            <h5 class="card-title text-start col secondary">20 ريال سعودى</h5>
          </div>
          <div>
            <p class="card-text">الدجاج او اللحم او الجمبرى المطبوخ على المقلاة الصينى مضاف اليه صلصة الفلفل الحار او التوابل الصينية</p>
          </div>

          <div class="mt-5">
            <h5 class="third">ملاحظات</h5>
           <div class="row mt-3 edit">
             <textarea name="textarea" id="textarea" placeholder="ازالة الصوص الحار"></textarea>
             <label style="cursor: pointer" class="card-text text-muted col text-start pointer-event" for="textarea">
              <Edit class="icon"></Edit>تعديل
             </label>
           </div>
          </div>
        </div>
      </div>



      <div class="row">
        <div class="col-lg-6 col-md-4 col-sm-auto"></div>
        <button class="customBtn m-2 d-inline-flex justify-content-center align-content-center align-items-center">
          <Delete class="icon"></Delete>
          <span style="font-size: 20px;margin-right: 8px" @click="number=0">حذف</span>
        </button>


        <div class="customBtn m-2 d-inline-flex justify-content-center align-content-center align-items-center">
          <span style="font-size: 24px;margin-left: 8px" @click="number--">-</span>
          <span style="font-size: 24px"  class="px-2">{{number}}</span>
          <span style="font-size: 24px;margin-right: 8px" @click="number++" class="">+</span>
        </div>
      </div>





    </div>
  </div>
</div>
</template>

<script>
import Edit from '../assets/icons/edit-solid.svg'
import Delete from '../assets/icons/trash-solid.svg'
export default {
name: "Card3",
  data(){
  return{
    number:1
  }
  },
  components:{

  Edit, Delete
  },

}
</script>

<style lang="scss" scoped>

.line{
  border-bottom: 2px solid;
  width: 25%;
  padding-bottom: 16px;
}
.customBtn{
  border: 1px solid #333333;
  border-radius: 10px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  font-weight: bold;
  font-size: 18px;
  width: 124px;
  height: 64px;
  flex: 1;
}
span{
  cursor: pointer;
}
.icon{
  top: 0;
  width: 26px;
}

.edit{
  background: #F9F9F9 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  width: 100%;
  border-radius: 10px;
  resize: none;
  height: 81px;
}
textarea{
  outline: none;
  border: none;
  resize: none;
  background: #F9F9F9 0% 0% no-repeat padding-box;
  width: 50%;
}
</style>
