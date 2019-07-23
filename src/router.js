import Vue from 'vue'
import Router from 'vue-router'

import Home from './Home.vue';
import Index from './Index.vue'
import TodoApp from './TodoApp.vue'

Vue.use(Router)

const routes = [
    {
        path: "/",
        component: Index
    }, {
        path: '/app',
        component: Home,
        children: [
            {
                path: 'todos',
                component: TodoApp
            }
        ]
    }
]

const router = new Router({
    routes,
    mode: "history"
})

export default router
