<template>

  <div class="card">
    <div class="card-body">
      <div>
        <user-icon></user-icon>
      </div>
      <div class="row">
        <span class="text-end col">عبدالله محمد</span>
        <span class="text-start col text-muted">منذ 3 اسابيع</span>
      </div>
      <div>
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

<style scoped>
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
