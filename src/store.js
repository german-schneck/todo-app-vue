// Dependencies
import Vue from 'vue';
import Vuex from 'vuex';

// Store
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    todoList: [],
  },
  mutations: {
    add(state, { description }) {
      const id = state.todoList.length + 1;
      return state.todoList.push({ id, description });
    },

    remove(state, { id }) {
      const newState = state.todoList.filter(e => e.id !== id);
      return state.todoList = newState;
    },

    check(state, { id }) {
      return Vue.set(state.todoList[id - 1], 'checked', true);
    },

    unCheck(state, { id }) {
      return Vue.set(state.todoList[id - 1], 'checked', false);
    },
  },
  actions: {
    add({ commit }, description) {
      commit('add', { description });
    },

    remove({ commit }, id) {
      commit('remove', { id });
    },

    check({ commit }, id) {
      commit('check', { id });
    },

    unCheck({ commit }, id) {
      commit('unCheck', { id });
    },
  },
});
