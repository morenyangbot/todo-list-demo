<template>
  <div class="app-wrapper">
    <div class="container">
      <Header @push="pushItem"/>
      <List :list="filteredList"/>
      <FilterBar @toggleFilter="toggleFilter"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import List from './components/List'
  import FilterBar from "./components/FilterBar";

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
        filterMethod: () => true
      }
    },
    computed: {
      filteredList() {
        return this.list.filter(this.filterMethod)
      }
    },
    methods: {
      pushItem(todoItem) {
        this.list.push(todoItem)
      },
      toggleFilter(filterMethod) {
        this.filterMethod = filterMethod
      }
    }
  }
</script>

<style>

</style>
