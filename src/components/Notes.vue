<template>
  <div class="hello">
    <h1>Notes</h1>
    <div class="row">
      <div class="col m6" v-for="note in notes" v-bind:key="note.id">
        <NoteCard v-bind:note="note"/>
      </div>
    </div>
  </div>
</template>
<script>
import NoteCard from "@/components/NoteCard.vue";
export default {
  name: "Notes",
  components: {
    NoteCard
  },
  data() {
    return {
      notes: [
        {
          id: 1,
          title: "Card Title 1",
          text:
            "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        },
        {
          id: 2,
          title: "Card Title 2",
          text:
            "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        },
        {
          id: 3,
          title: "Card Title 3",
          text:
            "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        },
        {
          id: 4,
          title: "Card Title 4",
          text:
            "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        }
      ]
    };
  },
  props: {
    msg: String
  }
};
</script>