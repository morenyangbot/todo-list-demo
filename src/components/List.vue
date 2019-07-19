<template>
  <div>
    <ol>
      <li v-for="item in list" :key="item.id">
        <input type="checkbox"
               name="toggle-done"
               v-model="item.finished"
        >
        <div contenteditable
             :class="{'finished': item.finished}"
             v-text="item.value"
             @blur="(e) => handleTodoItemValueChange(item, e)"
             @keyprss.enter="handleEnter">
        </div>
      </li>
    </ol>
  </div>
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
