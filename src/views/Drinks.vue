<template>
  <div class="container mt-5">
    <Carousel></Carousel>
    <h1 class="text-center mt-5">قائمة الطعام</h1>
    <p class="text-center mt-2 ">قائمة الطعام > المشروبات</p>
    <div class="container">
      <div class="row mt-5 container">
        <Router :url="'Breakfast'" title="الفطور"></Router>
        <Router :url="'Lunch'" title="وجبات الغذاء"></Router>
        <Router :url="'Dinner'" title="وجبات العشاء"></Router>
        <Router :url="'Drinks'" title="المشروبات"></Router>
        <Router :url="'Disserts'" title="الحلويات"></Router>
        <Router :url="'Offers'" title="العروض"></Router>
        <Router :url="'Spicials'" title="الأكلات المميزة"></Router>
      </div>
    </div>
    <div class="row mt-5 mb-5">
     <Card :url="{name:'Drinks'}" img="2/dinner-6.png" title="الفطور"></Card>
     <Card :url="{name:'Drinks'}" img="1/breakfast-3.png" title="وجبات مميزة"></Card>
     <Card :url="{name:'Drinks'}" img="1/breakfast-2.png" title="وجبات العشاء"></Card>
     <Card :url="{name:'Drinks'}" img="1/drink-1.png" title="المشروبات"></Card>
     <Card :url="{name:'Drinks'}" img="1/dessert-1.png" title="الحلويات"></Card>
     <Card :url="{name:'Drinks'}" img="1/lunch-3.png" title="الأكلات المميزة"></Card>
     <Card :url="{name:'Drinks'}" img="1/dinner-1.png" title="العروض"></Card>
     <Card :url="{name:'Drinks'}" img="1/dessert-2.png" title="الحلويات الجديدة"></Card>
     <Card :url="{name:'Drinks'}" img="1/breakfast-7.png" title="الوجبات الرئيسية"></Card>
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
