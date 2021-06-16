var addBtn = document.getElementById("add-btn");
var todoList = document.getElementById("todo-list");
var inputTodo = document.getElementById("enter");

addBtn.addEventListener('click', function() {
    var addTodo = document.createElement("h2");
    addTodo.innerHTML = inputTodo.value;
    todoList.appendChild(addTodo);
    inputTodo.value= "";
    addTodo.addEventListener('click', function() {
        todoList.removeChild(addTodo);
    });
})