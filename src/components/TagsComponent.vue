<template>
  <div>
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Agregar nuevo tag</h4>
        <div>
          <br />
          <div class="input-field">
            <input
              placeholder="Placeholder"
              v-model="tag.title"
              id="first_name"
              type="text"
              class="validate"
            />
            <label for="first_name">First Name</label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a @click="save" class="modal-close waves-effect waves-green btn-flat">Guardar</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TagsComponent',
  data () {
    return {
      tag: {
        title: null,
        date: null,
        id: null
      }
    }
  },
  methods: {
    reloadData () {
      this.tag.title = null
      this.tag.date = null
      this.tag.id = null
    },
    save () {
      this.tag.date = new Date()
      this.tag.id =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)
      this.addTag({
        title: this.tag.title,
        date: this.tag.date,
        id: this.tag.id
      })
      this.reloadData()
    },
    ...mapActions(['addTag'])
  }
}
</script>

<style lang="scss" scoped>
    @import "../assets/scss/vars.scss";
    a.btn-flat{
        background: $primary;
        color: $on-primary;
    }
</style>