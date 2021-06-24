<template>
<div>
  <div id="card" class="card mb-3 p-5" style="max-width: 840px;">
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
               <span class="card-text text-muted col  text-end  ">ازالة الصوص الحار</span>
               <span class="card-text text-muted col text-start"><Edit class="icon"></Edit>تعديل</span>
           </div>
          </div>
        </div>
      </div>



      <div class="row">
        <div class="col-lg-7"></div>
        <button class="customBtn col-lg-2">
          <Delete class="icon"></Delete>
          <span @click="number=0">حذف</span>
        </button>
        <div class="customBtn col-lg-2 text-center p-2">
          <span @click="number--">-</span>
          <span class="px-2">{{number}}</span>
          <span @click="number++" class="">+</span>
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
  border: 1px solid;
  border-radius: 10px;
  background-color: white;
  margin: 32px 12px;
  font-weight: bold;
  font-size: 18px;
  height: 48px;




}
span{
  cursor: pointer;
}
.icon{
  width: 26px;
}

.edit{
  background: #F9F9F9 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  width: 100%;
  border-radius: 10px;
  resize: none;
  height: 102px;
}
</style>
