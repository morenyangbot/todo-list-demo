<template>
  <li class="list-item">
    <div class="item-wrapper">
      <input
        type="checkbox"
        name="toggle-done"
        :checked="item.finished"
        @click="e => toggleFinished(item)"
      />
      <div
        contenteditable
        :class="{'finished': item.finished}"
        class="todo-item-content"
        v-text="item.value"
        @blur="(e) => handleTodoItemValueChange(item, e)"
        @keypress.enter="handleEnter"
      ></div>
      <div class="create-time">{{createDate}}</div>
      <div class="delete-item" @click="()=>handleDeleteItem(item)">×</div>
    </div>
  </li>
</template>

<script>
import moment from "moment";
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    createDate() {
      return moment(this.item.createTime).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  methods: {
    handleTodoItemValueChange(item, e) {
      this.$store.dispatch("updateTodoItemText", {
        ...item,
        value: e.target.innerText
      });
    },
    handleEnter(e) {
      e.target.blur();
    },
    toggleFinished(item) {
      this.$store.dispatch("toggleTodoItemFinished", item);
    },
    handleDeleteItem(item) {
      this.$store.dispatch("deleteTodoItem", item)
    }
  }
};
</script>
