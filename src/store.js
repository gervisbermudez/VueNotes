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
      localStorage.setItem('vuenotes', JSON.stringify(state.notes));
    },
    SET_NOTES(state, notes) {
      state.notes = notes;
      localStorage.setItem('vuenotes', JSON.stringify(state.notes));
    },
    REMOVE_NOTE(state, ID) {
      for (let index = 0; index < state.notes.length; index++) {
        const element = state.notes[index];
        if (element.id == ID) {
          state.notes.splice(index, 1);
        }
      }
      localStorage.setItem('vuenotes', JSON.stringify(state.notes));
    }
  },
  actions: {
    getLocalNotes({
      commit
    }) {
      var notes = JSON.parse(localStorage.getItem('vuenotes') || '[]');
      commit('SET_NOTES', notes);
    },
    addNote({
      commit,
      state
    }, note) {
      commit('ADD_NOTE', note);
    },
    removenote({
      commit,
      state
    }, ID) {
      commit('REMOVE_NOTE', ID);
    }
  }
})
