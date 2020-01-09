<template>
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large" @click="action">
      <Icon :name="iconname" />
    </a>
    <ul>
      <li>
        <a href="#modal1" class="btn-floating red modal-trigger">
          <i class="material-icons">label</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'FloatingButton',
  props: ['iconname', 'action'],
  components: {
    Icon
  },
  mounted: function () {
    let elems = document.querySelectorAll('.fixed-action-btn')
    window.M.FloatingActionButton.init(elems)
    console.log('FloatingButton: mounted')
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars.scss";
.btn-floating {
  background: $primary;
  cursor: pointer;
}
</style>
