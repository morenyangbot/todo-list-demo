<template>
  <div class="title-bar">
    <h2 class="app-title">Vue Todo List</h2>
    <p><em>Simple Todo List with adding and filter by diff status.</em></p>
    <div>
      <input v-model="textValue" @keypress.enter="pushTodoItem" class="todo-input"/>
      {{' '}}<div @click="pushTodoItem" class="todo-input-btn">Add</div>
    </div>
  </div>
</template>

<script>
  let id = 0;
  const getId = () => {
    return id++;
  };
  export default {
    name: "TodoHeader",
    data() {
      return {
        textValue: ''
      }
    },
    methods: {
      pushTodoItem() {
        const todoItem = {
          id: getId(),
          value: this.textValue,
          finished: false,
          createTime: new Date()
        };
        this.$store.dispatch('pushTodoItem', todoItem)
        this.textValue = ''
      }
    }
  }
</script>

<style scoped>

</style>
