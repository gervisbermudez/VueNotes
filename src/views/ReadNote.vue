<template>
  <div class="container">
    <h1>Read Notes</h1>
    ID: {{ $route.params.id }}
  </div>
</template>

<script>
import Router from "vue-router";
import { store } from "@/store.js";
import { mapState, mapGetters } from "vuex";

export default {
  name : "ReadNote",
  mounted: function () {

  }
};
</script>