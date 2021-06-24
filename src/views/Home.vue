<template>
<div class="container mt-5">
<Carousel></Carousel>

  <div class="row mt-5 mb-5">
    <h1 class="text-center mt-5   mb-5">قائمة الطعام</h1>
   <Card class="col-lg-4" :url="{name:'Breakfast'}" img="1/breakfast-4.png" title="الفطور"></Card>
   <Card class="col-lg-4" :url="{name:'Lunch'}" img="1/breakfast-3.png" title="وجبات مميزة"></Card>
   <Card class="col-lg-4" :url="{name:'Dinner'}" img="1/breakfast-2.png" title="وجبات العشاء"></Card>
   <Card class="col-lg-4" :url="{name:'Drinks'}" img="1/drink-1.png" title="المشروبات"></Card>
   <Card class="col-lg-4" :url="{name:'Disserts'}" img="1/dessert-1.png" title="الحلويات"></Card>
   <Card class="col-lg-4" :url="{name:'Spicials'}" img="1/lunch-3.png" title="الأكلات المميزة"></Card>
   <Card class="col-lg-4" :url="{name:'Offers'}" img="1/dinner-1.png" title="العروض"></Card>
   <Card class="col-lg-4" :url="{name:'Disserts'}" img="1/dessert-2.png" title="الحلويات الجديدة"></Card>
   <Card class="col-lg-4" :url="{name:'Lunch'}" img="1/breakfast-7.png" title="الوجبات الرئيسية"></Card>
  </div>

</div>
</template>

<script>
import Carousel from "../components/Carousel";
import Card from "../components/Card";
export default {
  name: "Home",
  components: { Card, Carousel},
  data(){
    return{
      windowScreen: null
    }
  },

};
</script>
<style lang="scss" scoped>
.col-centered {
  float: none!important;
  margin-right: auto!important;
  margin-left: auto!important;
}

</style>
