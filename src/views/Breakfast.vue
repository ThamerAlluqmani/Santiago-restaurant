<template>
  <div class="container mt-5">
    <Carousel></Carousel>
    <h1 class="text-center mt-5">قائمة الطعام</h1>
    <p class="text-center mt-2 ">قائمة الطعام > الفطور</p>
   <div class="container">
     <div class="row mt-5">
       <Router :url="'Breakfast'" title="الفطور"></Router>
       <Router :url="'Lunch'" title="وجبات الغذاء"></Router>
       <Router :url="'Dinner'" title="وجبات العشاء"></Router>
       <Router :url="'Drinks'" title="المشروبات"></Router>
       <Router :url="'Disserts'" title="الحلويات"></Router>
       <Router :url="'Offers'" title="العروض"></Router>
       <Router :url="'Spicials'" title="الأكلات المميزة"></Router>
     </div>
   </div>

    <div class="row row-cols-3 mt-lg-5 mb-5">
      <Card :url="{name:'HealthyBreakfast'}" img="2/dinner-6.png" title="الفطور"></Card>
      <Card :url="{name:'HealthyBreakfast'}" img="2/dinner-1.png" title="فطور العائلات"></Card>
      <Card :url="{name:'HealthyBreakfast'}" img="2/dinner-2.png" title="فطور الأطفال"></Card>
      <Card :url="{name:'HealthyBreakfast'}" img="2/breakfast-4.png" title="الفطور الصحي"></Card>
    </div>

  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Router from "../components/Router";
export default {
  name: "Breakfast",
  components: {Router, Card, Carousel},
}
</script>

<style lang="scss" scoped>
p{
  color: #E2725A;
}

</style>
