<template>
 <div id="card" class="col">
   <router-link class="link" :to="url">
     <div  class="card" style="width: 18rem;">
       <img :src="img" class="card-img-top" alt="...">
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
}
.link{
  text-decoration: none;
  color: black;
  &:hover{
    color: #D31512;
   }
}
</style>
