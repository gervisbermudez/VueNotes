<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Notes from "./components/Notes.vue";
import $ from "jquery";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Nav
  },
  methods: {
    getnotes() {},
    ...mapActions["getLocalNotes"]
  },
  mounted: function() {
    M.AutoInit();
    this.$store.dispatch("getLocalNotes");
  }
};
</script>

<style lang="scss">
@import "./assets/scss/vars.scss";
body{
  background: $on-primary;
}
</style>