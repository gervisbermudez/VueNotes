import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: []
  },
  getters: {
    getAllNotes: function (state) {
      return state.notes;
    }
  },
  mutations: {
    ADD_NOTE(state, note) {
      state.notes.push(note);
    },
    SET_NOTES(state, notes) {
      state.notes = notes;
    }
  },
  actions: {
    getLocalNotes({
      commit
    }) {
      var notes = JSON.parse(localStorage.getItem('vuenotes') || '[]')
      notes.forEach(function (note, index) {
        note.id = index
      });
      commit('SET_NOTES', notes);
    },
    addNote({
      commit
    }, note) {
      localStorage.setItem('vuenotes', JSON.stringify(state.notes));
      commit('ADD_NOTE', note);
    },
  }
})
