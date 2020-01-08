<template>
  <div class="home container">
    <Notes/>
    <FloatingButton :iconname="'add'" :action="buttonaction"/>
  </div>
</template>

<script>
import Notes from '@/components/Notes.vue'
import NoteCard from '@/components/NoteCard.vue'
import FloatingButton from '@/components/FloatingButton.vue'

export default {
  name: 'home',
  components: {
    Notes,
    NoteCard,
    FloatingButton
  },
  methods: {
    buttonaction () {
      this.$router.push('new')
    }
  }
}
</script>
