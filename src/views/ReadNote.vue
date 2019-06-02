<template>
  <div class="container">
    <h2>{{read.title}}</h2>
    <p>{{read.text}}</p>
    ID: {{ $route.params.id }}
    <FloatingButton :iconname="'edit'" :action="buttonaction"/>
  </div>
</template>

<script>
import Router from "vue-router";
import { store } from "@/store.js";
import { mapState, mapGetters } from "vuex";
import FloatingButton from "@/components/FloatingButton.vue";

export default {
  name: "ReadNote",
  data() {
    return {
      read: {
        title: "",
        text: ""
      }
    };
  },
  components: {
    FloatingButton
  },
  methods: {
    buttonaction: function() {
      this.$router.push("/");
    }
  },
  props: {
    id: {
      required: true
    }
    // rest of the props if needed
  },
  created() {
    const readnote = this.$store.state.notes.find(note => {
      return note.id == this.id;
    });
    this.read = readnote;
  }
};
</script>