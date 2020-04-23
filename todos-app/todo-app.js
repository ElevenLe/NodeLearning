'use strict'

let todos = getSavedTodos()

// filters
const filters = {
    searchText : '',
    hideCompleted: false
}

renderTodo(todos,filters)

// listen for todo text change
document.querySelector("#search-todo-input").addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodo(todos, filters)
})

document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.toDoText.value,
        completed: false
    })
    saveTodos(todos)
    renderTodo(todos,filters)
    e.target.elements.toDoText.value = ''
})

document.querySelector('#hideCompleted').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodo(todos,filters)
})

