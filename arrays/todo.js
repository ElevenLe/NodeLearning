const todos_text = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']
let todos = []

todos_text.forEach(function(todo, index){
    var random_boolean = Math.random() >= 0.5;
    let obj = {
        text: todo,
        completed: random_boolean
    }
    todos.push(obj)
})

const deleteTodo = function(todos, text){
    let index = todos.findIndex(function (node, index) {
        return node.text.toLowerCase() === text.toLowerCase()
    })
    if(index !== -1){
        todos.splice(index, 1)
    }
}


const getThingsToDo = function(todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a,b) {
        if(!a.completed){
            return -1
        }
        else if(!b.completed){
            return 1
        }
        else{
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)