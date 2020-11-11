const todoInput = document.querySelector("#todo-input")
const todoButton = document.querySelector("#todo-button")
const todoList = document.querySelector("#todo-list")

todoButton.addEventListener("click", addTodo)

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
