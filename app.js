const todoInput = document.querySelector("#todo-input")
const todoButton = document.querySelector("#todo-button")
const todoList = document.querySelector("#todo-list")
const filterOption = document.querySelector("#filter-todo")

document.addEventListener("DOMContentLoaded", getTodos)
todoButton.addEventListener("click", addTodo)
filterOption.addEventListener("change", filterTodo)

function addTodo(event){
    event.preventDefault()
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    saveLocalTodos(todoInput.value)
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("btn-complete")
    completedButton.addEventListener("click", function checkTodo(){
        const todo = completedButton.parentElement
        todo.classList.toggle("completed")
        })    
    todoDiv.appendChild(completedButton)
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("btn-trash")
    trashButton.addEventListener("click", function deleteTodo(){
        const todo = trashButton.parentElement
          todo.classList.add("fall")
          todo.addEventListener("transitionend", function(){todo.remove()})
          })
    todoDiv.appendChild(trashButton)
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}

function filterTodo(event) {
    const todos = todoList.childNodes
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                     todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodos() {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    const newTodo = document.createElement("li")
    newTodo.innerText = todo
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("btn-complete")
    completedButton.addEventListener("click", function checkTodo(){
        const todo = completedButton.parentElement
        todo.classList.toggle("completed")
        })    
    todoDiv.appendChild(completedButton)
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("btn-trash")
    trashButton.addEventListener("click", function deleteTodo(){
        const todo = trashButton.parentElement
          todo.classList.add("fall")
          todo.addEventListener("transitionend", function(){todo.remove()})
          })
    todoDiv.appendChild(trashButton)
    todoList.appendChild(todoDiv)
    todoInput.value = ""
    })
}