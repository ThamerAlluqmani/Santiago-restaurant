<template>

  <div class="border-top">
    <div class="pt-5">
      <div class="row">
        <div class="col col-lg-5 ">
          <user-icon></user-icon>
          <span class="text-end name">عبدالله محمد</span>
        </div>
        <div class="col col-lg-3">

        </div>
        <div class="col col-lg-4">
          <span class="text-start  text-muted">منذ 3 اسابيع</span>
        </div>
      </div>
      <div class="mt-2 stars">
        <star class="icon"></star>
        <star class="icon"></star>
        <star class="icon"></star>
        <star class="icon"></star>
        <star class="icon"></star>
      </div>

      <div class="mt-3 mb-5 mx-5" style="max-width: 269px">
        <p>طعم رائع و خدمة ممتازة لكم منى كل الشكر</p>
      </div>
    </div>
  </div>

</template>

<script>
import userIcon from '../assets/1/userIcon.svg'
import star from '../assets/icons/star-solid.svg'

export default {
  name: "Comment",
  components: {
    userIcon, star
  }
}
</script>

<style lang="scss" scoped>
.card {

}

span {
  font-weight: bold;

}

.icon {
  fill: #FFCC00;
  width: 16px;

}
.border-top{
  padding-top: 8px;
}
.stars{
  margin-right: 36px;
}
.name{
  padding-right: 8px;
  @media (max-width: 600px) {
    padding-right: 0px;
  }
}
</style>
