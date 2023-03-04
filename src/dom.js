import { Task, taskManager } from "./task";
import { projectFilter } from "./todo-app";

const wrap = document.querySelector(".todo-wrap");
const projectWrap = document.querySelector(".project-list");

const createElement = (el, className, content) => {
  const element = document.createElement(el);
  element.setAttribute("class", className);
  element.textContent = content;
  return element;
};

const createTodoDiv = (todo) => {
  const todoDiv = createElement("div", "todo");
  todoDiv.id = taskManager.list.indexOf(todo);

  const checkbox = createElement("input", "checkbox");
  checkbox.setAttribute("type", "checkbox");

  const todoName = createElement("p", "todo-name", todo.name);

  const deleteTodo = createElement("div", "delete-button", "x");

  todoDiv.append(checkbox, todoName, deleteTodo);
  wrap.appendChild(todoDiv);

  // move event listeners somewhere for cleaner code
  checkbox.addEventListener("change", todo.doneUndone);
  deleteTodo.addEventListener("click", () => {
    taskManager.deleteTask(todo);
    wrap.removeChild(todoDiv);
  });

  return todoDiv;
};

const displayTodos = (list) => {
  wrap.innerHTML = "";
  list.map((todo) => createTodoDiv(todo));
};

// Sidebar

const showAll = document.getElementById("show-all");
showAll.addEventListener("click", () => {
  displayTodos(taskManager.list);
});

const createProjectLi = (project) => {
  const projectLi = createElement("li", "project", project);
  const idName = project.toLowerCase();
  projectLi.setAttribute("id", idName);

  projectWrap.appendChild(projectLi);

  projectLi.addEventListener("click", (e) => displayTodos(projectFilter(e.target.id)));
};

const createProjectList = () => {
  projectWrap.innerHTML = "";
  taskManager.categories.map((project) => createProjectLi(project));
};

// Todo form

// Create select options from category array

const generateSelectOptions = () => {

const categorySelect = document.getElementById("category");
categorySelect.innerHTML = "";
for (let i = 0; i < taskManager.categories.length; i++) {
  const el = document.createElement("option");
  el.textContent = taskManager.categories[i];
  el.value = taskManager.categories[i];
  categorySelect.appendChild(el);
}
  return categorySelect;
}

const todoForm = document.getElementById("task-form");

todoForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(todoForm);
  const newTodo = {};

  formData.forEach((value, key) => (newTodo[key] = value));

  taskManager.addTask(newTodo.name);
  displayTodos(taskManager.list);
  todoForm.reset();
};

// To do form modal

const openModal = document.getElementById("add-task-button");
openModal.addEventListener("click", () => todoForm.style.display = "block");

// Project form

const projectForm = document.getElementById("project-form");

projectForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(projectForm);
  const newProject = {};

  formData.forEach((value, key) => (newProject[key] = value));
  taskManager.categories.push(newProject.name);
  createProjectList();
  generateSelectOptions();
  projectForm.reset();
};


export { displayTodos, createProjectList, generateSelectOptions };
