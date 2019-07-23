<template>
  <div class="filters">
    <div v-for="item in filters"
         :key="item.displayName"
         class="filter-item"
         @click="toggleFilter(item)">
      <div class="filter-item-inner" :class="{active: item.filter === $store.getters.currentFilter}">{{item.displayName}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FilterBar",
    data() {
      return {
        filters: [
          {
            displayName: 'ALL',
            filter: () => true
          },
          {
            displayName: 'Active',
            filter: item => !item.finished
          },
          {
            displayName: 'Complete',
            filter: item => item.finished
          }
        ]
      }
    },
    methods: {
      toggleFilter(filter) {
        this.$store.dispatch('updateFilter', filter.filter)
      }
    }
  }
</script>

<style scoped>
</style>
