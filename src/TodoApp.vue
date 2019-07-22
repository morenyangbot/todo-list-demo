<template>
  <div class="app-wrapper">
    <div class="container">
      <Header/>
      <List/>
      <FilterBar/>
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
    }
  }
</script>

<style>

</style>
