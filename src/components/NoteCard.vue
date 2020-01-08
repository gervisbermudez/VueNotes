<template>
  <div class="card" :class="note.color +' '+ textColor">
    <div class="card-content" @click="viewNote">
      <span class="card-title">{{note.title}}</span>
      <p v-if="note.text">{{note.text}}</p>
    </div>
    <div class="card-action">
      <a href="#" class="black-text" @click="remove(note.id)"><Icon :name="'delete'" /></a>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import Router from 'vue-router'
import { mapActions } from 'vuex'

export default {
  name: 'NoteCard',
  computed: {
    textColor: function () {
      return this.note.color ? 'white-text' : ''
    }
  },
  components: {
    Icon
  },
  props: ['note'],
  methods: {
    viewNote () {
      this.$router.push('view/' + this.note.id)
    },
    remove (ID) {
      this.removenote(ID)
    },
    ...mapActions(['removenote'])
  }
}
</script>

<style lang="scss" scoped>
  .card{
    border-radius: 15px;
    .card-action {
      border-radius: 15px !important;
      border: 0;
      i{
        visibility: hidden;
        font-size: 24px;
      }
    }
    &:hover{
      i{
        visibility: visible;
      }
    }
    @media all and (max-width: 768px) {
      i{
        visibility: visible;
        }
    }
  }
</style>
