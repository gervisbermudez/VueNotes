<template>
  <div class="row">
    <div class="input-field col s12">
      <input id="title" type="text" class="validate" v-model="note.title">
      <label for="title">Titulo</label>
      <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
    </div>
    <div class="input-field col s12">
      <textarea id="textarea1" v-model="note.note" class="materialize-textarea"></textarea>
      <label for="textarea1">Nota</label>
    </div>
    <a @click="save" class="waves-effect waves-light btn-small">
      <Icon name="save" class="material-icons left"/>Guardar
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import { mapActions } from "vuex";

export default {
  name: "NoteForm",
  components: {
    Icon
  },
  data() {
    return {
      note: {
        title: null,
        note: null
      }
    };
  },
  computed: {
    validNote() {
      let flag = false;
      if (!!this.note.title || !!this.note.note) {
        flag = true;
      }
      return flag;
    }
  },
  methods: {
    save() {
      if (this.validNote) {
        this.addNote(this.note);
      }
    },
    ...mapActions(["addNote"])
  }
};
</script>
