import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    filter: () => true,
    todoList: []
  },
  mutations: {
    PUSH_TODO_ITEM(state, payload) {
      state.todoList.push(payload)
    },
    UPDATE_FILTER(state, payload) {
      state.filter = payload;
    },
    TOGGLE_TODO_ITEM_FINISHED(state, id) {
      const item = state.todoList.find(item => item.id === id)
      item && (item.finished = !item.finished)
    },
    UPDATE_TODO_ITEM_TEXT(state, { id, value }) {
      const item = state.todoList.find(item => item.id === id)
      item && (item.value = value)
    }
  },
  actions: {
    pushTodoItem({ commit }, payload) {
      commit("PUSH_TODO_ITEM", payload)
    },
    toggleTodoItemFinished({ commit }, payload) {
      commit("TOGGLE_TODO_ITEM_FINISHED", payload)
    },
    updateTodoItemText({ commit }, payload) {
      commit("UPDATE_TODO_ITEM_TEXT", payload)
    },
    updateFilter({ commit }, payload) {
      commit("UPDATE_FILTER", payload)
    }
  },
  getters: {
    filteredTodoList(state) {
      const { todoList, filter } = state;
      return todoList.filter(filter)
    },
    currentFilter(state) {
      return state.filter
    }
  }
})

export default store;
