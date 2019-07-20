<template>
  <ol class="main-list">
    <li v-for="item in list" :key="item.id" class="list-item">
      <div class="item-wrapper">
        <input type="checkbox"
               name="toggle-done"
               v-model="item.finished"
        >
        <div contenteditable
             :class="{'finished': item.finished}"
             class="todo-item-content"
             v-text="item.value"
             @blur="(e) => handleTodoItemValueChange(item, e)"
             @keypress.enter="handleEnter">
        </div>
      </div>
    </li>
  </ol>
</template>

<script>
  export default {
    name: "TodoItemList",
    props: {
      list: {
        type: Array,
        default: () => [],
        require: true
      }
    },
    methods: {
      handleTodoItemValueChange(item, e) {
        item.value = e.target.innerText
      },
      handleEnter(e) {
        e.target.blur()
      }
    }
  }
</script>

<style>
  .finished {
    text-decoration: line-through;
  }
</style>
