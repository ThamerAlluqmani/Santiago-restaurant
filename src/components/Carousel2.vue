<template>
  <div class="container text-center my-3">
    <div class="row mx-auto my-auto justify-content-center">
      <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="col-lg-3 col-md-3 col-sm-12">
              <img src="../assets/5/breakfast-2.png" class="img-fluid">
            </div>
          </div>
          <div class="carousel-item">
            <div class="col-lg-3 col-md-3 col-sm-12">
              <img src="../assets/1/drink-1.png" class="img-fluid">
            </div>
          </div>
          <div class="carousel-item">
            <div class="col-lg-3 col-md-3 col-sm-12">
              <img src="../assets/1/dessert-1.png" class="img-fluid">
            </div>
          </div>
          <div class="carousel-item">
            <div class="col-lg-3 col-md-3 col-sm-12">
              <img src="../assets/1/breakfast-3.png" class="img-fluid">
            </div>
          </div>
        </div>
        <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Carousel2",
  mounted() {
    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i=1; i<minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
      }
    })
  }
}
</script>

<style scoped>
img{
  width: 226px;
  height: 226px;
}
@media (max-width: 767px) {
  .carousel-inner .carousel-item > div {
    display: none;
  }
  .carousel-inner .carousel-item > div:first-child {
    display: block;
  }
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
}

/* medium and up screens */
@media (min-width: 768px) {

  .carousel-inner .carousel-item-end.active,
  .carousel-inner .carousel-item-next {
    transform: translateX(25%);
  }

  .carousel-inner .carousel-item-start.active,
  .carousel-inner .carousel-item-prev {
    transform: translateX(-25%);
  }
}

.carousel-inner .carousel-item-end,
.carousel-inner .carousel-item-start {
  transform: translateX(0);
}

</style>
