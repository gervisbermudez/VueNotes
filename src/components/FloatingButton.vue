<template>
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large red" @click="action">
      <Icon :name="iconname"/>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  name: "FloatingButton",
  props: ["iconname", "action"],
  components: {
    Icon
  }
};
</script>