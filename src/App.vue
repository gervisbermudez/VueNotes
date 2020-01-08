<template>
  <div id="app">
    <Nav />
    <transition
        name="fade"
        mode="out-in"
      >
    <router-view />
    </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>