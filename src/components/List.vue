<template>
  <ol class="main-list">
    <TodoItem v-for="item in list" :key="item.id" :item="item" />
  </ol>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoItemList",
  components: {
    TodoItem
  },
  props: {
    list: {
      type: Array,
      default: () => [],
      require: true
    }
  }
};
</script>

<style>
.finished {
  text-decoration: line-through;
}
</style>
