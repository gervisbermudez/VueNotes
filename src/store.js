import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    tags: []
  },
  getters: {
    getAllNotes: function (state) {
      return state.notes
    },
    getAllTags: function (state) {
      return state.tags
    },
    getNote: function (state, id) {
      return function (params) {
        for (let index = 0; index < state.notes.length; index++) {
          const element = state.notes[index]
          if (id === element.id) {
            return element
          }
        }
      }
    }
  },
  mutations: {
    // Notes Mutatios
    ADD_NOTE (state, note) {
      state.notes.push(note)
      localStorage.setItem('vuenotes', JSON.stringify(state.notes))
    },
    SET_NOTES (state, notes) {
      state.notes = notes
      localStorage.setItem('vuenotes', JSON.stringify(state.notes))
    },
    REMOVE_NOTE (state, ID) {
      for (let index = 0; index < state.notes.length; index++) {
        const element = state.notes[index]
        if (element.id === ID) {
          state.notes.splice(index, 1)
        }
      }
      localStorage.setItem('vuenotes', JSON.stringify(state.notes))
    },
    UPDATE_NOTE (state, note) {
      for (let index = 0; index < state.notes.length; index++) {
        const element = state.notes[index]
        if (element.id === note.id) {
          state.notes[index] = note
        }
      }
      localStorage.setItem('vuenotes', JSON.stringify(state.notes))
    },
    // Tags Mutations
    ADD_TAG (state, tag) {
      state.tags.push(tag)
      localStorage.setItem('vuenotes-tags', JSON.stringify(state.tags))
    },
    SET_TAG (state, tag) {
      state.tags = tag
      localStorage.setItem('vuenotes-tags', JSON.stringify(state.tags))
    },
    REMOVE_TAG (state, ID) {
      for (let index = 0; index < state.tags.length; index++) {
        const element = state.tags[index]
        if (element.id === ID) {
          state.tags.splice(index, 1)
        }
      }
      localStorage.setItem('vuenotes-tags', JSON.stringify(state.tags))
    },
    UPDATE_TAG (state, tag) {
      for (let index = 0; index < state.tags.length; index++) {
        const element = state.tags[index]
        if (element.id === tag.id) {
          state.tags[index] = tag
        }
      }
      localStorage.setItem('vuenotes-tags', JSON.stringify(state.tags))
    }

  },
  actions: {
    getLocalNotes ({
      commit
    }) {
      var notes = JSON.parse(localStorage.getItem('vuenotes') || '[]')
      commit('SET_NOTES', notes)
    },
    addNote ({
      commit,
      state
    }, note) {
      commit('ADD_NOTE', note)
    },
    removenote ({
      commit,
      state
    }, ID) {
      commit('REMOVE_NOTE', ID)
    },
    updateNote ({
      commit,
      state
    }, note) {
      commit('UPDATE_NOTE', note)
    }
  }
})
