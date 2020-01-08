<template>
  <div class="app-container">
    <div class="tags">
      <div class="tag-colections">
        <div class="chip" v-for="(tag, index) in getAllTags" v-bind:key="index">{{tag}}</div>
      </div>
    </div>
    <div class="carrousel-container">
      <hooper ref="carousel" :itemsToShow="1.25" :centerMode="true">
        <slide>
          <div class="card">
            <div class="card-content">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.
              </p>
            </div>
          </div>
        </slide>
        <slide>
          <div class="card">
            <div class="card-content">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.
              </p>
            </div>
          </div>
        </slide>
        <slide>
          <div class="card">
            <div class="card-content">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.
              </p>
            </div>
          </div>
        </slide>
        <slide>
          <div class="card">
            <div class="card-content">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.
              </p>
            </div>
          </div>
        </slide>
        <slide>
          <div class="card">
            <div class="card-content">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.
              </p>
            </div>
          </div>
        </slide>
        <slide>
          <div class="card">
            <div class="card-content">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.
              </p>
            </div>
          </div>
        </slide>
      </hooper>
    </div>
    <div class="hello">
      <div class="row">
        <div class="col m6" v-for="note in getAllNotes" v-bind:key="note.id">
          <NoteCard v-bind:note="note" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteCard from "@/components/NoteCard.vue";
import { store } from "@/store.js";
import { mapState, mapGetters } from "vuex";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Notes",
  components: {
    NoteCard,
    Hooper,
    Slide
  },
  computed: {
    ...mapGetters(["getAllNotes"]),
    ...mapGetters(["getAllTags"])
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars.scss";

.tags {
  overflow: scroll;
  .tag-colections {
    width: 1200px;
  }
}
.chip {
  background: $primary;
  color: $white;
  font-weight: 400;
}
.hooper-slide {
  margin-top: 20px;
  .card {
    background: $background;
    margin: 10px;
    border-radius: 15px;
    color: $primary;
    .card-title{
      font-weight: 400
    }
  }
}
</style>