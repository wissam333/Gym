<template>
  <div class="App">
    <div class="top_part">
      <AppNavbar></AppNavbar>
    </div>
    <div class="home_part">
      <router-view />
    </div>
  </div>
</template>
<script>
import AppNavbar from "./components/AppNavbar.vue";
export default {
  name: "App",
  components: {
    AppNavbar
  }
}
</script>
<style lang="scss">
.App {
  .top_part {
    width: 100%;
    position: absolute;
    z-index: 3;

    @media (max-width: 991px) {
      position: relative;
    }
  }
}
</style>
