<template>
  <div class="col">
    <router-link class="link " :to="{name:url}">
      <h6>{{ title }}
      </h6>

    </router-link>
  </div>
</template>

<script>
export default {
  name: "Router",
  props: ['url', 'title']
}
</script>

<style lang="scss" scoped>
* {
  font-weight: bold;
}

h6 {
  h6:hover {
    padding-bottom: 16px;
    border-bottom: 2px solid green;
  }
}

.link{
  display: inline-flex;
  text-decoration: none;
  color: black;
  align-items: center;
  margin-top: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid transparent;
  transition: .5s ease-in all;

  &:hover{
    border-bottom-color:  #D31512;

  }
}

.router-link-active {
  color: #D31512;
  padding-bottom: 16px;
  border-bottom: 2px solid;
}

</style>
