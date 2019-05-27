<template>
  <div class="row">
    <div class="input-field col s12">
      <input id="title" type="text" class="validate" v-model="note.title">
      <label for="title">Titulo</label>
      <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
    </div>
    <div class="input-field col s12">
      <textarea id="textarea1" v-model="note.text" class="materialize-textarea"></textarea>
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
import Router from "vue-router";

export default {
  name: "NoteForm",
  components: {
    Icon
  },
  data() {
    return {
      note: {
        title: null,
        text: null,
        id: null
      }
    };
  },
  computed: {
    validNote() {
      let flag = false;
      if (!!this.note.title || !!this.note.text) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < 10; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        this.note.id = result;
        flag = true;
      }
      return flag;
    }
  },
  methods: {
    save() {
      if (this.validNote) {
        this.addNote(this.note);
        this.$router.push("/");
      }
    },
    ...mapActions(["addNote"])
  }
};
</script>
