<template>
<div class="model">
 <div class="container text-center">
   <div class="mt-lg-5">
     <star class="icon"></star>
     <h3 class="text-white mt-5  ">نحن نسعى دائما لإرضاء عملاؤنا</h3>
   </div>

   <div class="row">
     <h3 class="text-white mt-5 col-8">ماهو تقييمك ؟</h3>
     <div class="col-4"></div>
   </div>
   <div class="row">
     <div class="col-8">
       <star class="icon2"></star>
       <star class="icon2"></star>
       <star class="icon2"></star>
       <star class="icon2"></star>
       <star class="icon2"></star>
     </div>
     <div class="col-4"></div>
   </div>

   <input class="model-content mt-3" placeholder="اضف تعليق"/>
   <button class="customButton  mt-5" @click="closeModel">اضف تقييمك</button>
 </div>
</div>
</template>

<script>
import star from '../assets/icons/star-solid.svg'
export default {
  name: "Model",
  components:{
    star
  },
  props:["modelMessage"],
  data(){
    return{

    }
  },
  methods:{
    closeModel(){
      this.$emit("close-model");
    }
  }
}
</script>

<style lang="scss" scoped>

.model{
  display: block;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 60%;
  background-color: rgba(0, 0, 0, 0.64);
  @media (max-width: 767px) {
    top: 0;

  }


  .model-content{
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 600px;
    padding: 40px 30px;
    background-color: white;
    border: none;
    outline: none;
    margin: auto;
    display: block;
    @media (max-width: 767px) {
      width: 300px;

    }




    p{
      text-align: center;

    }

    button{
      align-self: center;
    }
  }

}
.customButton{
  width: 236px;
  height: 82px;
  background: #F9F9F9 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  border: none;
  font-weight: bold;


}



.icon{
  fill: #FFCC00;
  border-radius: 50% ;
  padding:8px;
  border-right-color: white;
  background-color: white;
  width: 108px;
  @media (max-width: 767px) {
    width: 64px;

  }
}
.icon2{
  fill: #FFCC00;
  width: 32px;
}

</style>
