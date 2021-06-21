<template>
<div class="model">
 <div class="container">
   <div class="center mt-lg-5">
     <star class="icon center"></star>
     <h3 class="text-white mt-5  ">نحن نسعى دائما لإرضاء عملاؤنا</h3>
   </div>

   <div class="center">
     <h3 class="text-white mt-5">ماهو تقييمك ؟</h3>
     <star class="icon2"></star>
     <star class="icon2"></star>
     <star class="icon2"></star>
     <star class="icon2"></star>
     <star class="icon2"></star>
   </div>

   <input class="model-content center mt-lg-5 mt-sm-2" placeholder="اضف تعليق"/>
   <button class="btn btn-lg customButton center mt-5" @click="closeModel">اضف تقييمك</button>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;
    background-color: white;
    @media (max-width: 767px) {


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
  background-color: white;
  border: 1px solid;
  border-radius: 15px;


}

.center{
  margin: 0 40%;
  @media (max-width: 767px) {
    margin: 0 ;

  }
}

.icon{
  fill: #FFCC00;
  border-radius: 50% ;
  border-right-color: white;
  background-color: white;
  width: 72px;
  @media (max-width: 767px) {
    width: 32px;

  }
}
.icon2{
  fill: #FFCC00;
  width: 32px;
  @media (max-width: 767px) {
    width: 10px;

  }
}

</style>
