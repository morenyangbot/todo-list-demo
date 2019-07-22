import Vue from 'vue'
import TodoApp from './TodoApp'
import './assets/stylesheets/style.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(TodoApp),
}).$mount('#app')
