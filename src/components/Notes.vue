<template>
  <div class="app-wrap">
    <div class="parallaxefect">
      <div class="tags">
        <div class="tag-colections">
          <div
            class="chip"
            v-bind:class="{ active: (index == 3) }"
            v-for="(tag, index) in getAllTags"
            v-bind:key="tag.id"
          >{{tag.title}}</div>
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
    </div>
    <div class="app-container">
      <div class="notes">
        <div class="container">
          <masonry
            :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
            :gutter="{default: '30px', 700: '15px'}"
          >
            <div v-for="note in getAllNotes" v-bind:key="note.id">
              <NoteCard v-bind:note="note" />
            </div>
          </masonry>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import NoteCard from "@/components/NoteCard.vue";
import { mapGetters } from "vuex";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import VueMasonry from "vue-masonry-css";
Vue.use(VueMasonry);

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
  color: $primary;
  background: $on-primary;
  font-weight: 400;
  &.active {
    background: $primary;
    color: $on-primary;
  }
}
.hooper {
  @media all and (max-width: 768px) {
    height: 240px;
  }
  @media all and (max-width: 400px) {
    height: 250px;
  }
}
.hooper-slide {
  margin-top: 20px;
  .card {
    color: $background;
    margin: 10px;
    border-radius: 15px;
    background: $primary;
    .card-title {
      font-weight: 400;
    }
  }
}
.parallaxefect {
  position: fixed;
  top: 50px;
  z-index: 1;
}

.app-container {
  background: $on-primary;
  position: relative;
  z-index: 2;
  border-radius: 20px;
}

.notes {
  margin: 270px 0px 0px;
  .container {
    padding-top: 20px;
  }
}
</style>
