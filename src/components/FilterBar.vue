<template>
  <div>
    <div v-for="item in filters" :key="item.key" :class="{active: item.key === filter}" @click="toggleFilter(item.key)">
      {{item.displayName}}
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
