<template>
 <div id="card" class="col-sm-12 col-lg-4 col-md-6">
   <router-link class="link" :to="url">
     <img :src="img" class="card-img-top" alt="...">
     <div  class="card">

       <div class="card-body">
         <p class="card-text text-center">{{title}}</p>
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

}
.link{
  text-decoration: none;
  color: black;
  &:hover{
    color: #D31512;
   }
}
p{
  align-items: center;
  margin-top: 12px;
  padding-bottom: 16px;
  border-bottom: 2px solid transparent;
  transition: .5s ease-in all;
  &:hover{
    border-bottom-color:  #D31512;
  }
}

#card{
  transition: .5s ease all;
  &:hover{
    transform: rotateZ(-1deg) scale(1.01);
  }
}

</style>
