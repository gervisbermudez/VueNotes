<template>
  <main>
    <h1>My Notes</h1>
    <div class="bd-example">
      <div class="card-columns" v-show="showSpinner">
        <div class="card" v-for="note in notes" :key="note.note_id">
          {{ note.content }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Notes",
  props: ["notes"],
};
</script>

<style>
.bd-example {
  padding: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: 0.2rem;
}

.card-columns {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-gap: 1.25rem;
  -moz-column-gap: 1.25rem;
  column-gap: 1.25rem;
  orphans: 1;
  widows: 1;
}

.card {
  position: relative;
  display: -ms-flexbox;
  display: inline-block;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
  padding: 1rem;
}
</style>
