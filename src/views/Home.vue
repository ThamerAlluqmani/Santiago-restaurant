<template>
<div class="container mt-5">
<Carousel></Carousel>
  <h1 class="text-center mt-5">قائمة الطعام</h1>
  <div class="row row-cols-3 mt-lg-5 mb-5">
   <Card :url="{name:'Breakfast'}" img="1/breakfast-4.png" title="الفطور"></Card>
   <Card :url="{name:'Lunch'}" img="1/breakfast-3.png" title="وجبات مميزة"></Card>
   <Card :url="{name:'Dinner'}" img="1/breakfast-2.png" title="وجبات العشاء"></Card>
   <Card :url="{name:'Drinks'}" img="1/drink-1.png" title="المشروبات"></Card>
   <Card :url="{name:'Disserts'}" img="1/dessert-1.png" title="الحلويات"></Card>
   <Card :url="{name:'Spicials'}" img="1/lunch-3.png" title="الأكلات المميزة"></Card>
   <Card :url="{name:'Offers'}" img="1/dinner-1.png" title="العروض"></Card>
   <Card :url="{name:'Disserts'}" img="1/dessert-2.png" title="الحلويات الجديدة"></Card>
   <Card :url="{name:'Lunch'}" img="1/breakfast-7.png" title="الوجبات الرئيسية"></Card>
  </div>

</div>
</template>

<script>
import Carousel from "../components/Carousel";
import Card from "../components/Card";
export default {
  name: "Home",
  components: { Card, Carousel},
};
</script>
