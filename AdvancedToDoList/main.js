const completeBtn = document.querySelector('.complete')
const editBtn = document.querySelector('.edit')
const deleteBtn = document.querySelector('.delete')

const addBtn = document.querySelector('.btn-add')
const errorInfo = document.querySelector('.error-info')
const todoList = document.querySelector('.todolist ul')
const todo_List = document.querySelector('.todo-list')
const todoInput = document.querySelector('.todo-input')
const todoTitle = document.querySelector('.todo-title')

const popup = document.querySelector('.popup')
const popupInfo = document.querySelector('.popup-info')
const popupInput = document.querySelector('.popup-input')
const acceptBtn = document.querySelector('.accept')
const cancelBtn = document.querySelector('.cancel')

let ID = [0]

const addTask = () => {
	if (todoInput.value !== '') {
		const newToDo = document.createElement('li')
		newToDo.textContent = todoInput.value
		todoList.append(newToDo)
		newToDo.setAttribute('id', ID)
		newToDo.innerHTML = `
        
        <p class="todo-title">${todoInput.value}</p>
        <div class="tools">
        <button class="complete" onclick="completeTask(${ID})"><i class="fas fa-check"></i></button>
        <button class="edit" onclick="editTask(${ID})">Edit</i></button>
        <button class="delete" onclick="deleteTask(${ID})"><i class="fas fa-times"></i></button>
        </div>
        
        `
		ID++
		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

const deleteTask = id => {
    const AllTodos = todoList.querySelectorAll('li')
    if (AllTodos.length !== 0) {
    let taskToDelete = document.getElementById(id)
    todoList.removeChild(taskToDelete)
    errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Brak zadań na liście.'
    }
}

const completeTask = id => {
    let taskToComplete = document.getElementById(id)
    console.log(taskToComplete);
    taskToComplete.classList.toggle('completed')
}

const editTodo = () => {
    popup.style.display = 'flex'
    // some things to do here
}

const changeTodoText = () => {
    // and here too
}

const closePopup = () => {
    popup.style.display = 'none'
	popupInfo.textContent = ''
}


addBtn.addEventListener('click', addTask)
deleteBtn.addEventListener('click', deleteTask)
completeBtn.addEventListener('click', completeTask)
editBtn.addEventListener('click', editTodo)
acceptBtn.addEventListener('click', changeTodoText)
cancelBtn.addEventListener('click', closePopup)
