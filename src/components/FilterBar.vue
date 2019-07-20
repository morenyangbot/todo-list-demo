<template>
  <div class="filters">
    <div v-for="item in filters"
         :key="item.key"
         class="filter-item"
         @click="toggleFilter(item.key)">
      <div class="filter-item-inner" :class="{active: item.key === filter}">{{item.displayName}}</div>
    </div>
  </div>
</template>

<script>
  import status from '../enums/status'

  export default {
    name: "FilterBar",
    props: {
      filter: {
        default: ''
      }
    },
    data() {
      return {
        filters: [
          {
            key: status.ALL,
            displayName: 'ALL'
          },
          {
            key: status.ACTIVE,
            displayName: 'Active'
          },
          {
            key: status.COMPLETE,
            displayName: 'Complete'
          }
        ]
      }
    },
    methods: {
      toggleFilter(filter) {
        this.$emit('toggleFilter', filter)
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red
  }
</style>
