'use strict'

// fake data initialization
const init_value = () => {
    let todos = []
    const todos_text = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']
    todos_text.forEach((todo, index) => {
        var random_boolean = Math.random() >= 0.5;
        let obj = {
            text: todo,
            completed: random_boolean
        }
        todos.push(obj)
    })
    return todos
}

// Fetch existing todos from localStroage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos')
    try{
        return todoJSON ? JSON.parse(todoJSON) : []
    }catch(e){
        return []
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodo = (todos, filters) => {
    // show the incompeleted todos

    const filteredTodo = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    document.querySelector('#show-all-todos').appendChild(generateSummaryDOM(filteredTodo))

    filteredTodo.forEach((todo) => {
        document.querySelector('#show-all-todos').appendChild(generateTodoDOM(todo))
    })

    console.log(todos)
}

const removeTodo = (id) => {
    const indexId = todos.findIndex((todo) => todo.id === id)

    if(indexId > -1){
        todos.splice(indexId, 1)
    }
}

const toggleTodo =  (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo){
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    // set up root div
    const rootDiv = document.createElement('div')

    // set up check box
    const checkBox = document.createElement('input')
    checkBox.setAttribute("type","checkbox")
    checkBox.checked = todo.completed
    rootDiv.appendChild(checkBox)
    checkBox.addEventListener("change", (e) => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodo(todos, filters)
    })

    // set up todo text
    const todoText = document.createElement('span')
    todoText.textContent = todo.text
    rootDiv.appendChild(todoText)

    // set up button
    const button = document.createElement('button')
    button.textContent = "delete"
    rootDiv.appendChild(button)
    button.addEventListener('click', ()=>{
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodo(todos,filters)
    })

    return rootDiv
}

// Get the DOM elements for list summary
const generateSummaryDOM =  (filteredTodo) => {
    let incompeletedTodo = filteredTodo.filter((todo) => !todo.completed)
    
    document.querySelector('#show-all-todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompeletedTodo.length} todos left`
    return summary
}