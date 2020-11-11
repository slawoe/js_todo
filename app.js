const todoInput = document.querySelector("#todo-input")
const todoButton = document.querySelector("#todo-button")
const todoList = document.querySelector("#todo-list")

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)

function addTodo(event){
    event.preventDefault()
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("btn-complete")
    todoDiv.appendChild(completedButton)
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("btn-trash")
    todoDiv.appendChild(trashButton)
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}

function deleteCheck(event){
const item = event.target
if(item.classList[0] === "btn-trash"){
const todo = item.parentElement
todo.remove()
} else if(item.classList[0] === "btn-complete"){
    const todo = item.parentElement
    todo.classList.toggle("completed")
}
}