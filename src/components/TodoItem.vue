<template>
  <li class="list-item">
    <div class="item-wrapper">
      <input type="checkbox" name="toggle-done" v-model="item.finished" />
      <div
        :contenteditable="contentEditable"
        :class="{'finished': item.finished}"
        class="todo-item-content"
        v-text="item.value"
        @blur="(e) => handleTodoItemValueChange(item, e)"
        @keypress.enter="handleEnter"
        @dblclick="handleDbClick"
      ></div>
      <div class="create-time">{{createDate}}</div>
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
  data(){
    return {
      contentEditable: false
    }
  },
  computed: {
    createDate() {
      return moment(this.item.createTime).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  methods: {
    handleTodoItemValueChange(item, e) {
      item.value = e.target.innerText;
      this.contentEditable = false;
    },
    handleEnter(e) {
      e.target.blur();
    },
    handleDbClick(e){
      this.contentEditable = true
      e.target.focus()
    }
  }
};
</script>
