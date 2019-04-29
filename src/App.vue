<template>
  <div id="my-app" class="page-wrapper">

    <transition name="page-transition" mode="out-in" appear>
      <div class="site-content">
        <router-view></router-view>
      </div>
    </transition>

    <app-footer/>

  </div>
</template>

<script>
import Footer from "./components/partials/Footer.vue";

export default {
  components: {
    appFooter: Footer
  },
}
</script>
