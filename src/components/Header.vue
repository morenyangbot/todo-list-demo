<template>
  <div>
    <input v-model="textValue" @keypress.enter="pushTodoItem"/>
    <button @click="pushTodoItem">Add</button>
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
        this.$emit('push', todoItem)
        this.textValue = ''
      }
    }
  }
</script>

<style scoped>

</style>
