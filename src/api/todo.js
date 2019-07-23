import request from './baseRequest';

export const fetchAll = () => {
    return request.get('/todos')
}

export const addTodoItem = (todoItem) => {
    return request.post('/todos', todoItem)
}

export const toggleTodoItemFinished = (todoItem) => {
    return request.put(`/todos/${todoItem.id}/finished`)
}

export const updateTodoItem = (todoItem) => {
    return request.put(`/todos`, todoItem)
}