<template>
  <div class="card blue-grey darken-1" @click="viewNote">
    <div class="card-content white-text">
      <span class="card-title">{{note.title}}</span>
      <p>{{note.text}}</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>
</template>

<script>
import Router from "vue-router";

export default {
  name: "NoteCard",
  props: ["note"],
  methods: {
    viewNote() {
      this.$router.push("about");
    }
  }
};
</script>

<style>
</style>
