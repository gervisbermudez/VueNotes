<template>
  <div class="container">
    <h1>Edit Note</h1>
    <NoteForm :editnote="note"/>
  </div>
</template>

<script>
import Router from 'vue-router'
import { store } from '@/store.js'
import { mapState, mapGetters } from 'vuex'
import NoteForm from '@/components/NoteForm'

export default {
  components: {
    NoteForm
  },
  data () {
    return {
      note: {}
    }
  },
  props: {
    id: {
      required: true
    }
    // rest of the props if needed
  },
  created () {
    const readnote = this.$store.state.notes.find(note => {
      return note.id == this.id
    })
    this.note = readnote
  },
  mounted () {
    M.updateTextFields()
    M.textareaAutoResize(document.getElementById('textarea1'))
  }
}
</script>
