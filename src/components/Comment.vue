<template>

  <div class="card mb-2">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <user-icon></user-icon>
          <span class="text-end" style="padding-right: 8px">عبدالله محمد</span>
        </div>
        <div class="col-lg-4 col-md-1 col-sm-1">

        </div>
        <div class="col-lg-4 col-md-5 col-sm-5">
          <span class="text-start  text-muted">منذ 3 اسابيع</span>
        </div>
      </div>
      <div class="mt-2">
        <star class="icon"></star>
        <star class="icon"></star>
        <star class="icon"></star>
        <star class="icon"></star>
        <star class="icon"></star>
      </div>

      <div class="mt-5">
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

</style>
