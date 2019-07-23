import Vue from 'vue';
import Vuex from 'vuex';
import * as TodoApi from './api/todo'

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
    UPDATE_TODO_ITEM(state, newItem ) {
      const item = state.todoList.find(item => item.id === newItem.id);
      Object.assign(item, newItem)
    },
    SET_TODO_LIST(state, payload) {
      state.todoList = payload
    }
  },
  actions: {
    pushTodoItem({ commit }, payload) {
      TodoApi.addTodoItem(payload)
        .then(res => {
          commit("PUSH_TODO_ITEM", res)
        })
    },
    toggleTodoItemFinished({ commit }, payload) {
      TodoApi.toggleTodoItemFinished(payload)
        .then(res => {
          commit("UPDATE_TODO_ITEM", res)
        })
    },
    updateTodoItemText({ commit }, payload) {
      TodoApi.updateTodoItem(payload)
      .then(res => {
        commit("UPDATE_TODO_ITEM", res)
      })
    },
    updateFilter({ commit }, payload) {
      commit("UPDATE_FILTER", payload)
    },
    fetchTodoList({ commit }) {
      TodoApi.fetchAll()
        .then(res => {
          commit("SET_TODO_LIST", res)
        })
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
