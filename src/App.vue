<template>
  <div id="app">
    <Nav />
    <transition
        name="fade"
        mode="out-in"
      >
    <router-view />
    </transition>
    <TagsComponent />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import TagsComponent from './components/TagsComponent'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Nav,
    TagsComponent
  },
  methods: {
    getnotes () {},
    ...mapActions['getLocalNotes']
  },
  mounted: function () {
    window.M.AutoInit()
    // let elems = document.querySelectorAll('.fixed-action-btn')
    // window.M.FloatingActionButton.init(elems)
    this.$store.dispatch('getLocalNotes')
  }
}
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
