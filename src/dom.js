import { todoList } from "./task.js";

const wrap = document.querySelector(".todo-wrap");

const createElement = (el, className, content) => {
  const element = document.createElement(el);
  element.setAttribute("class", className);
  element.textContent = content;
  return element;
}

const createTodoDiv = (todo) => {
  const todoDiv = createElement("div", "todo");
  todoDiv.id = todoList.list.indexOf(todo);

  const checkbox = createElement("input");
  checkbox.setAttribute("type","checkbox");

  const todoName = createElement("p","todo-name", todo.name);

  todoDiv.append(checkbox, todoName);
  wrap.appendChild(todoDiv);
}

const displayTodos = () => {

  todoList.list.map(todo => createTodoDiv(todo));
}

export { displayTodos };