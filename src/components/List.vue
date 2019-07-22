<template>
  <ol class="main-list">
    <TodoItem v-for="item in $store.getters.filteredTodoList" :key="item.id" :item="item" />
  </ol>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoItemList",
  components: {
    TodoItem
  }
};
</script>

<style>
.finished {
  text-decoration: line-through;
}
</style>
