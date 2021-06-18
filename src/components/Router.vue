<template>
 <div class="col">
     <router-link class="link " :to="{name:url}"><span>{{ title }}</span></router-link>
 </div>
</template>

<script>
export default {
  name: "Router",
  props:['url' , 'title']
}
</script>

<style lang="scss" scoped>
* {
  font-weight: bold;
}

span {
  padding-bottom: 16px;
}

span:hover {
  border-bottom: 2px solid;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;

  &:hover {
    color: #D31512;
  }

}
.router-link-active{
  color: #D31512;
  padding-bottom: 16px;
  border-bottom: 2px solid;
}
</style>
