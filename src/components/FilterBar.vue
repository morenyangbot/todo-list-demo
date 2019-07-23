<template>
  <div class="filters">
    <div v-for="item in filters"
         :key="item.key"
         class="filter-item"
         @click="toggleFilter(item)">
      <div class="filter-item-inner" :class="{active: item.key === filter}">{{item.displayName}}</div>
    </div>
  </div>
</template>

<script>
  import status from '../enums/status'

  export default {
    name: "FilterBar",
    data() {
      return {
        filter: 'ALL',
        filters: [
          {
            key: status.ALL,
            displayName: 'ALL',
            filter: () => true
          },
          {
            key: status.ACTIVE,
            displayName: 'Active',
            filter: item => !item.finished
          },
          {
            key: status.COMPLETE,
            displayName: 'Complete',
            filter: item => item.finished
          }
        ]
      }
    },
    methods: {
      toggleFilter(filter) {
        console.log(filter.filter)
        this.filter = filter.key
        this.$emit('toggleFilter', filter.filter)
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red
  }
</style>
