<template>
  <!--start header-->
  <div class="home">
    <slider></slider>
    <classes></classes>
    <about></about>
    <OurFeatures></OurFeatures>
  </div>
  <!--end header-->
</template>
<script>
import slider from "../components/Slider.vue";
import classes from "./Classes.vue";
import about from "./About.vue";
import OurFeatures from "./OurFeatures.vue";
export default {
  name: "home",
  components: {
    slider,
    classes,
    about,
    OurFeatures,
  }
}
</script>
<style lang="scss" scoped>
.home {
  position: relative;
}
</style>