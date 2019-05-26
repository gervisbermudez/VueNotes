<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Notes from "./components/Notes.vue";
import $ from "jquery";

export default {
  name: "App",
  components: {
    Nav
  },
  mounted: function() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  }
};
</script>


<style lang="scss">
</style>
