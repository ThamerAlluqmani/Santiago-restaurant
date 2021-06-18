<template>
  <div class="boxShadow">
    <router-link :to="url" class="link">
      <div class="image" :style="{backgroundImage: `url(${img})`}"></div>
      <div class="card-body" style="max-height: 230px">
        <div class="row">
          <h5 class="col text-end">{{ title }}
            <div class="line"></div>
          </h5>
          <h5 class="col secondary text-start">{{ price }}</h5>
        </div>
        <div>
          <p>{{ body }}</p>
        </div>

        <div class="row">
          <h5 class="col text-end">السعرات الحرارية</h5>
          <h5 class="col secondary text-start">{{ cals }}</h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card2",
  props: ['img', 'title', 'price', 'body', 'cals' , 'url']
}
</script>

<style lang="scss" scoped>
.secondary {
  color: #85311B;

  &:hover {
    color: #ef9a83;
    cursor: pointer;
  }
}

.line {
  width: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid;
}

.image {
  height: 323px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.boxShadow {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  margin: 32px 0px;


}
.link{
  text-decoration: none;
  color: black;
}

</style>
