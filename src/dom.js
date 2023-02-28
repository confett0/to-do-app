import { Task } from "./task";
import { createProject, inbox } from "./projects";

const wrap = document.querySelector(".todo-wrap");

const createElement = (el, className, content) => {
  const element = document.createElement(el);
  element.setAttribute("class", className);
  element.textContent = content;
  return element;
}

const createTodoDiv = (todo) => {
  const todoDiv = createElement("div", "todo");
  todoDiv.id = inbox.list.indexOf(todo);

  const checkbox = createElement("input", "checkbox");
  checkbox.setAttribute("type","checkbox");

  const todoName = createElement("p","todo-name", todo.name);

  const deleteTodo = createElement("div","delete-button","x");

  todoDiv.append(checkbox, todoName, deleteTodo);
  wrap.appendChild(todoDiv);
// move event listeners somewhere for cleaner code
  checkbox.addEventListener("change", todo.doneUndone);
  deleteTodo.addEventListener("click", () => {
    inbox.deleteTask(todo);
    displayTodos();
  });
}

const displayTodos = () => {
  wrap.innerHTML = "";
  inbox.list.map(todo => createTodoDiv(todo));
}

// Todo form

const todoForm = document.getElementById("new-todo");

todoForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(todoForm);
  const newTodo = {};

  formData.forEach((value, key) => (newTodo[key] = value));

  inbox.addTask(newTodo.name, newTodo.category, newTodo.priority);
  
  todoForm.reset();
  displayTodos();
};

// Project form

const projectForm = document.getElementById("project-form");

projectForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(projectForm);
  const newProject = {};

  formData.forEach((value, key) => (newProject[key] = value));
  createProject(newProject.name);

  projectForm.reset();

}

export { displayTodos };