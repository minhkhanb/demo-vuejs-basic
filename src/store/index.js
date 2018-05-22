import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    status: false,
  },
  getters: {
    count() {
      return store.state.count;
    },
    status() {
      return store.state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    changeStatus(state) {
      state.status = Boolean(!status);
    },
  },
});

export default store;
