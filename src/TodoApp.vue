<template>
  <div>
    <Header @push="pushItem"/>
    <List :list="filteredList"/>
    <FilterBar :filter="filter" @toggleFilter="toggleFilter"/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import List from './components/List'
  import FilterBar from "./components/FilterBar";
  import status from './enums/status'

  export default {
    name: "TodoApp",
    components: {
      Header,
      List,
      FilterBar
    },
    data() {
      return {
        list: [],
        filter: ''
      }
    },
    computed: {
      filteredList() {
        switch (this.filter) {
          case status.ACTIVE:
            return this.list.filter(i => !i.finished);
          case status.COMPLETE:
            return this.list.filter(i => i.finished);
          case status.ALL:
          default:
            return this.list
        }
      }
    },
    methods: {
      pushItem(todoItem) {
        this.list.push(todoItem)
      },
      toggleFilter(filter) {
        this.filter = filter
      }
    }
  }
</script>

<style>

</style>
