<template>
<div>
  <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/1/Mask5.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/2/Mask5.png" class="d-block w-100" alt="...">
      </div>

      <div class="carousel-item">
        <img src="../assets/3/Mask5.png" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "Carousel"
}
</script>

<style scoped>

</style>
