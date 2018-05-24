import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    status: false,
  },
  getters: {
    counter(count) {
      return count;
    },
    count({ count }) {
      return count;
    },
    status({ status }) {
      return status;
    },
  },
  // actions: {
  // },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    changeStatus(state, payload) {
      state.status = Boolean(payload);
    },
  },

});

export default store;
