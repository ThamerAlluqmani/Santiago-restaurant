<template>
 <div id="card" class="col-sm-12 col-lg-3 col-md-6">
   <router-link class="link" :to="url">
     <img :src="img" class="card-img-top" alt="...">
     <div  class="card">

       <div class="card-body">
         <h5 class="card-text text-center fw-bold">{{title}}</h5>
       </div>
     </div>
   </router-link>
 </div>

</template>

<script>
export default {
  name: "Card",
  props:['img' , 'title' , 'url']
}
</script>

<style lang="scss" scoped>
#card{
  cursor: pointer;
  padding-bottom: 32px;
  border-radius: 15px 15px 0px 0px;
  letter-spacing: 0px;
  color: #333333;
  text-transform: capitalize;
  opacity: 1;
  @media (max-width: 767px) {
   margin: 0 auto;

  }

  transition: .5s ease all;
  &:hover{
    transform: rotateZ(-1deg) scale(1.01);
  }


}
.link{
  text-decoration: none;
  color: black;
  &:hover{
    color: #D31512;
   }
}

.card{
  border-radius: 0 0px 15px 15px;
  box-shadow: 0px 3px 6px #00000029;
}
.card-body{
  padding: 32px;
}
</style>
