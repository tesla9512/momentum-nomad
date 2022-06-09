const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const KEY_TODO = "todo";

let todos = [];

function saveTodo() {
  localStorage.setItem(KEY_TODO, JSON.stringify(todos));
}

function delTodo(event) {
  const li = event.target.parentElement;

  todos = todos.filter((todo) => todo.id !== parseInt(li.id));

  li.remove();

  saveTodo();
}

function addTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const label = document.createElement("label");

  li.id = newTodo.id;
  li.className = "list";
  span.innerText = "✖";
  span.className = "todo_button";
  label.innerText = newTodo.text;
  label.className = "todo";

  span.addEventListener("click", delTodo);

  li.appendChild(span);
  li.appendChild(label);
  todoList.appendChild(li);
}

function handleSubmit(event) {
  const todo = { id: Date.now(), text: todoInput.value };

  todoInput.value = "";

  event.preventDefault();
  todos.push(todo);

  addTodo(todo);
  saveTodo();
}

todoInput.className = "align-center";
todoList.className = "align-center";
todoForm.addEventListener("submit", handleSubmit);

const loadedData = localStorage.getItem(KEY_TODO);

if (loadedData !== null) {
  todos = JSON.parse(loadedData);

  todos.forEach(addTodo);
}
