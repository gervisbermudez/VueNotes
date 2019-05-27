<template>
  <div class="hello">
    <h1>Notes</h1>
    <div class="row">
      <div class="col m6" v-for="note in getAllNotes" v-bind:key="note.id">
        <NoteCard v-bind:note="note"/>
      </div>
    </div>
  </div>
</template>

<script>
import NoteCard from "@/components/NoteCard.vue";
import { store } from "@/store.js";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Notes",
  components: {
    NoteCard
  },
  methods: {},
  computed: {
    ...mapGetters(["getAllNotes"])
  }
};
</script>
