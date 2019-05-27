<template>
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large red" @click="buttonaction">
      <Icon name="add"/>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  name: "FloatingButton",
  methods: {
    buttonaction() {
      this.$router.push("about");
    }
  },
  components: {
    Icon
  }
};
</script>