<template>
  <div class="home">
    <Notes></Notes>
  </div>
</template>

<script>
// @ is an alias to /src
import Notes from "@/components/Notes.vue";
import NoteCard from "@/components/NoteCard.vue";

export default {
  name: "home",
  components: {
    Notes,
    NoteCard
  }
};
</script>
