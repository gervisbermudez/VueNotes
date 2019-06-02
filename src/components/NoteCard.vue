<template>
  <div class="card" :class="note.color +' '+ textColor">
    <div class="card-content" @click="viewNote">
      <span class="card-title">{{note.title}}</span>
      <p v-if="note.text">{{note.text}}</p>
    </div>
    <div class="card-action">
      <a href="#" class="black-text" @click="remove(note.id)">Delete Note</a>
    </div>
  </div>
</template>

<script>
import Router from "vue-router";
import { mapActions } from "vuex";

export default {
  name: "NoteCard",
  computed: {
    textColor: function() {
      return this.note.color ? "white-text" : "";
    }
  },
  props: ["note"],
  methods: {
    viewNote() {
      this.$router.push("noteview/" + this.note.id);
    },
    remove(ID) {
      this.removenote(ID);
    },
    ...mapActions(["removenote"])
  }
};
</script>

<style>
</style>
