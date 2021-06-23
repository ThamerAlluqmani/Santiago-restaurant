<template>
<div id="footer" class="border-top">
 <div class="container mb-5">
   <footer class="row row-cols-2 mt-5">
     <div class="text-end">
       جميع حقوق النشر محفوظة @2020
     </div>
     <div class="text-start">
       مشغل بواسطة
       <logo class="icon"></logo>
     </div>
   </footer>
 </div>

</div>


</template>

<script>
import logo from '../assets/1/Layer 2.svg'
export default {
  name: "Footer",
  components:{
    logo
  }
}
</script>

<style scoped>
#footer{
  border-top: 50px #333333;
}
.icon{
  fill: #E2725A;
  width: 27px;
  height: 27px;
  margin-right: 5px;

}
</style>
