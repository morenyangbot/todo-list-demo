import Vue from 'vue'
import TodoApp from './TodoApp'
import './assets/stylesheets/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(TodoApp),
}).$mount('#app')
