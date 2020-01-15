<template>
  <div class="row">
    <div class="col s12 title">
      <input id="title" type="text" v-on:keyup="save" class="validate" v-model="note.title" placeholder="Titulo">
    </div>
    <div class="col s12 note">
      <textarea id="textarea1" v-on:keyup="save" placeholder="Nota" v-model="note.text" class="materialize-textarea"></textarea>
    </div>
    <!-- <div class="col s12" :class="selectedColor" v-for="(color, index) in colors" :key="index">
      <label>
        <input name="group1" v-model="note.color" type="radio" checked :value="color">
        <span>{{color | capitalize}}</span>
      </label>
    </div> -->
    <!-- <div class="col s12">
      <br>
      <a @click="save" class="waves-effect waves-light btn-small">
        <Icon name="save" class="material-icons left"/>Guardar
      </a>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NoteForm',
  data () {
    return {
      note: {
        title: '',
        text: '',
        color: '',
        id: null
      },
      editmode: false,
      colors: ['light-blue', 'light-green', 'red', 'orange', 'yellow']
    }
  },
  props: ['editnote'],
  computed: {
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
      if (this.validNote()) {
        if (this.editmode) {
          this.updateNote(this.note)
        } else {
          this.addNote(this.note)
          this.editmode = true
        }
        console.log(this.note)
      }
    },
    validNote () {
      let flag = false
      if (this.note.title.trim().length || this.note.text.trim().length) {
        var result = ''
        var characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var charactersLength = characters.length
        for (var i = 0; i < 10; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          )
        }
        if (!this.editmode) {
          this.note.id = result
        }
        flag = true
      }
      return flag
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

.title{
  label{
    font-size: 1.4rem;
  }
  input#title {
    border: 0;
    &:focus {
      border: 0 !important;
      box-shadow: none !important;
    }
  }
}

textarea#textarea1 {
    border: 0;
      &:focus {
      border: 0 !important;
      box-shadow: none !important;
    }
}

</style>
