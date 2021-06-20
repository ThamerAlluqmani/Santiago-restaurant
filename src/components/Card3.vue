<template>
<div>
  <div class="card mb-3 p-5" style="max-width: 840px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="../assets/5/dinner-2.png" alt="...">
      </div>
      <div class="col-md-12 col-lg-8 boxShadow ">
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
           <div class="row mt-3">
             <p class="card-text text-muted  col-6 text-end">ازالة الصوص الحار</p>
             <p class="card-text text-muted col-6 text-start"><Edit class="icon"></Edit>تعديل</p>
           </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-7 col-md-6  col-sm-12"></div>
        <div class="col-lg-5 col-md-5 col-sm-auto">
          <div class="row">
            <button :class="number === 0 ? 'disabled' : ''" class="customBtn btn col">
              <Delete class="icon d-inline"></Delete>
              <span class="col">حذف</span>
            </button>
            <div :class="number === 0 ? 'disabled' : ''" class="customBtn btn btn-lg col-lg-6 col-sm-12 col-md-6">
              <span @click="number--" class="col-lg-4 col-md-4 col-sm-4">-</span>
              <span  class="col-lg-4 col-md-4 col-sm-4">{{number}}</span>
              <span @click="number++" class="col-lg-4 col-md-4 col-sm-4">+</span>
            </div>
          </div>
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
  }
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

  margin: 32px 12px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  height: 48px;
  width: 100%;




}
span{
  cursor: pointer;
}
.icon{
  width: 26px;
}
</style>
