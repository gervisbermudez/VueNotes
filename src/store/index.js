import { createStore } from "vuex";

const SET_USERDATA = "SET_USERDATA";

const store = createStore({
  state() {
    return {
      userdata: {},
    };
  },
  mutations: {
    [SET_USERDATA](state, payload) {
      state.userdata = payload;
    },
  },
  actions: {
    setUserdata({ commit }, payload) {
      commit(SET_USERDATA, {
        ...payload,
      });
    },
  },
});

export default store;
