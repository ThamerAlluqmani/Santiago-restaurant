<template>
  <div class="container mt-5">
    <Carousel></Carousel>
    <h1 class="text-center mt-5">قائمة الطعام</h1>
    <p class="text-center mt-2 ">قائمة الطعام > الفطور > الفطور الصحي</p>
   <div class="container">
     <div class="row mt-5">
       <Router :url="'Breakfast'" title="الفطور"></Router>
       <Router :url="'HealthyBreakfast'" title="الفطور الصحي"></Router>
       <Router :url="'Breakfast'" title="الفطور المميز"></Router>
       <Router :url="'Breakfast'" title="العروض"></Router>

     </div>
   </div>

    <div class="row mt-5 mb-5">

      <Card2 :url="{name:'FoodInfo'}" title="بان تشيلي مع بطاطس" img="3/dinner-2.png" price="20 ريال سعودي" cals="(70 سعرة حرارية)" body="الدجاج او اللحم او الجمبرى المطبوخ على المقلاة الصينى مضاف اليه صلصة الفلفل الحار او التوابل الصينية" ></Card2>
      <Card2 :url="{name:'FoodInfo'}" title="بان تشيلي مع بطاطس" img="1/breakfast-2.png" price="20 ريال سعودي" cals="(70 سعرة حرارية)" body="الدجاج او اللحم او الجمبرى المطبوخ على المقلاة الصينى مضاف اليه صلصة الفلفل الحار او التوابل الصينية"></Card2>
      <Card2 :url="{name:'FoodInfo'}" title="بان تشيلي مع بطاطس" img="1/breakfast-4.png" price="20 ريال سعودي" cals="(70 سعرة حرارية)" body="الدجاج او اللحم او الجمبرى المطبوخ على المقلاة الصينى مضاف اليه صلصة الفلفل الحار او التوابل الصينية"></Card2>
      <Card2 :url="{name:'FoodInfo'}" title="بان تشيلي مع بطاطس" img="2/drink-2.png" price="20 ريال سعودي" cals="(70 سعرة حرارية)" body="الدجاج او اللحم او الجمبرى المطبوخ على المقلاة الصينى مضاف اليه صلصة الفلفل الحار او التوابل الصينية"></Card2>
      <Card2 :url="{name:'FoodInfo'}" title="بان تشيلي مع بطاطس" img="1/dessert-2.png" price="20 ريال سعودي" cals="(70 سعرة حرارية)" body="الدجاج او اللحم او الجمبرى المطبوخ على المقلاة الصينى مضاف اليه صلصة الفلفل الحار او التوابل الصينية"></Card2>
    </div>

  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import Router from "../components/Router";
import Card2 from "../components/Card2";
export default {
  name: "Breakfast",
  components: {Card2, Router, Carousel},
}
</script>

<style lang="scss" scoped>
p{
  color: #E2725A;
}

</style>
