import { todoList } from "./task.js";

const wrap = document.querySelector(".todo-wrap");

const createTodoDiv = (todo) => {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.id = todoList.list.indexOf(todo);

  const todoName = document.createElement("p");
  todoName.textContent = todo.name;

  todoDiv.appendChild(todoName);
  wrap.appendChild(todoDiv);
}

const displayTodos = () => {

  todoList.list.map(todo => createTodoDiv(todo));
}

export { displayTodos };