<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import userWidget from "./common/UserWidget";
export default {
  components: { userWidget },
  name: "HelloWorld",
  methods: {
    ...mapActions({
      fetchNotes: "fetchNotes",
    }),
  },
  computed: {
    ...mapGetters({
      notes: "getNotes",
    }),
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchNotes();
    });
  },
};
</script>

<template>
  <div class="container">
    <nav class="menu-left">
      <user-widget />
      <div class="menu-left-bottom">
        <router-link to="/new" class="dropdown-item">
          <button class="btn primary">+ Add Note</button>
        </router-link>
      </div>
    </nav>
    <div class="main-content">
      <router-view v-bind:notes="notes"></router-view>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.menu-left {
  width: calc(20% - 4rem);
  background-color: var(--graylight);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-content {
  width: calc(80% - 4rem);
  padding: 2rem;
}

.menu-left-bottom .btn {
  width: 100%;
  padding: 1rem;
}
</style>
