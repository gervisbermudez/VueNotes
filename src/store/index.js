import { createStore } from "vuex";

const SET_USERDATA = "SET_USERDATA";
const FETCH_NOTES = "FETCH_NOTES";

const store = createStore({
  state() {
    return {
      userdata: {},
      notes: []
    };
  },
  mutations: {
    [SET_USERDATA](state, payload) {
      state.userdata = payload;
    },
    [FETCH_NOTES](state, payload) {
      state.notes = payload;
    },
  },
  getters: {
    getNotes: state => {
      return state.notes;
    }
  },
  actions: {
    fetchNotes({commit}) {
      fetch(process.env.VUE_APP_API_URL + "/api/v1/notes").then(response => response.json()).then(response => {
        commit(FETCH_NOTES, {
          ...response.data
        })
      });
      return;
    },
    setUserdata({ commit }, payload) {
      commit(SET_USERDATA, {
        ...payload,
      });
    },
  },
});

export default store;
