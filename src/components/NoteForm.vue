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
    <div class="col s12" :class="selectedColor" v-for="(color, index) in colors" :key="index">
      <label>
        <input name="group1" v-model="note.color" type="radio" checked :value="color">
        <span>{{color | capitalize}}</span>
      </label>
    </div>
    <div class="col s12">
      <br>
      <a @click="save" class="waves-effect waves-light btn-small">
        <Icon name="save" class="material-icons left"/>Guardar
      </a>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import { mapActions } from 'vuex'
import Router from 'vue-router'

export default {
  name: 'NoteForm',
  components: {
    Icon
  },
  data () {
    return {
      note: {
        title: null,
        text: null,
        color: '',
        id: null
      },
      editmode: false,
      colors: ['light-blue', 'light-green', 'red', 'orange', 'yellow']
    }
  },
  props: ['editnote'],
  computed: {
    validNote () {
      let flag = false
      if (!!this.note.title || !!this.note.text) {
        var result = ''
        var characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var charactersLength = characters.length
        for (var i = 0; i < 10; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          )
        }
        this.editmode ? '' : (this.note.id = result)
        flag = true
      }
      return flag
    },
    selectedColor: function () {
      return `note` + this.note.color
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    save () {
      if (this.validNote) {
        if (this.editmode) {
          this.updateNote(this.note)
        } else {
          this.addNote(this.note)
        }
        console.log(this.note)
        this.$router.push('/')
      }
    },
    ...mapActions(['addNote', 'updateNote'])
  },
  created () {},
  mounted () {
    if (this.editnote) {
      this.note = this.editnote
      this.editmode = true
    }
  }
}
</script>

<style lang="scss" scoped>
$colors: (
  light-green: #00a87b,
  yellow: #ffeb3b,
  red: #f44336,
  orange: #ff9800,
  light-blue: #436fb6,
  white: #ffffff,
  black: #000000
);

@each $name, $color in $colors {
  .note#{$name} [type="radio"]:checked + span:after {
    background-color: $color !important;
    border-color: $color !important;
  }
}
</style>
