import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    filter: () => true,
    todoList: [],
    user: {
      username: "",
      phone: undefined
    }
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
    },
    SET_USERNAME(state, username) {
      state.user.username = username
    },
    SET_USER_PHONE(state, phone) {
      state.user.phone = phone
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
    },
    setUsername({ commit }, username) {
      commit("SET_USERNAME", username)
    },
    setUserPhone({ commit }, phone) {
      commit("SET_USER_PHONE", phone)
    },
    setUser({ commit }, { username, phone }) {
      commit("SET_USERNAME", username);
      commit("SET_USER_PHONE", phone)
    }
  },
  getters: {
    filteredTodoList(state) {
      const { todoList, filter } = state;
      return todoList.filter(filter)
    },
    currentFilter(state) {
      return state.filter
    },
    user(state) {
      return state.user
    }
  }
})

export default store;
