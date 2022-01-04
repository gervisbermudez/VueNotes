import { createStore } from "vuex";
import axios from "axios";


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
  actions: {
    fetchNotes({ commit }) {
      axios
        .get(process.env.VUE_APP_API_URL + "/api/v1/notes", {
          headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": localStorage.getItem("token"),
            "Accept": "application/json",
          },
        }).then(response => {
          commit(FETCH_NOTES, response.data.data)
          console.log(response)
        })
    },
    setUserdata({ commit }, payload) {
      commit(SET_USERDATA, {
        ...payload,
      });
    },
  },
});

export default store;
