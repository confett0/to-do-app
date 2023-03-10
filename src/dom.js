import { Task, taskManager, editTask, doneUndone } from "./task";
import { projectFilter } from "./todo-app";
import { saveTasks, saveProjects, getTasks, getProjects } from "./localstorage";
import Edit from "./assets/edit.png";
import Delete from "./assets/delete.png";

const wrap = document.querySelector(".todo-wrap");
const projectWrap = document.querySelector(".project-list");
const projectTitle = document.querySelector(".project-title");

// Helper functions for creating dom elements

const createElement = (el, className, content) => {
  const element = document.createElement(el);
  element.setAttribute("class", className);
  element.textContent = content;
  return element;
};

// Create todo dom elements with event listeners

const createTodoDiv = (todo) => {
  const todoDiv = createElement("div", "todo");
  todoDiv.id = taskManager.list.indexOf(todo);

  const checkbox = createElement("input", "checkbox");
  checkbox.setAttribute("type", "checkbox");

  const todoName = createElement("p", "todo-name", todo.name);

  if (todo.done === true) {
    todoName.classList.add("done");
    checkbox.checked = true;
  } else if (todo.done === false) {
    todoName.classList.remove("done");
    checkbox.checked = false;
  }

  const todoCategory = createElement("p", "todo-category", todo.category);
  const todoDate = createElement("p", "todo-date", todo.date);

  const editButton = createElement("img", "edit-button");
  const deleteTodo = createElement("img", "delete-button");

  editButton.src = Edit;
  deleteTodo.src = Delete;

  todoDiv.append(
    checkbox,
    todoName,
    todoCategory,
    todoDate,
    editButton,
    deleteTodo
  );
  wrap.appendChild(todoDiv);

  checkbox.addEventListener("change", () => {
    todoName.classList.toggle("done");
    doneUndone(todo);
    saveTasks();
  });
  editButton.addEventListener("click", () => fillEditForm(todo));
  deleteTodo.addEventListener("click", () => {
    taskManager.deleteTask(todo);
    wrap.removeChild(todoDiv);
    saveTasks();
  });

  return todoDiv;
};

// Render todos

const displayTodos = (list) => {
  wrap.innerHTML = "";
  list.map((todo) => createTodoDiv(todo));
};

// Sidebar

// Show all todos button

const showAll = document.getElementById("show-all");
showAll.addEventListener("click", () => {
  getTasks();
  displayTodos(taskManager.list);
  projectTitle.textContent = "All tasks";
});

// Create projects dom elements

const createProjectLi = (project) => {
  const projectLi = createElement("li", "project", project);
  const idName = project.toLowerCase();
  projectLi.setAttribute("id", idName);

  projectWrap.appendChild(projectLi);

  projectLi.addEventListener("click", (e) => {
    displayTodos(projectFilter(e.target.id));
    projectTitle.textContent = e.target.id;
  })
};

// Display list of projects from array

const createProjectList = () => {
  projectWrap.innerHTML = "";
  taskManager.categories.map((project) => createProjectLi(project));
};

// Create select options from projects/category array

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
};

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

// Open & close project form modal

const addProjectButton = document.getElementById("add-project-button");
const closeProjectModal = document.getElementById("cancel-project");
addProjectButton.addEventListener("click", () => projectForm.style.display = "block");
closeProjectModal.addEventListener("click", () => projectForm.style.display = "none");

// Todo form

const todoForm = document.querySelector(".task-form");

// Fill out todo form when editing todos

const fillEditForm = (task) => {
  todoForm.style.display = "block";
  todoForm.setAttribute("id", task.id);
  document.getElementById("form-add-button").textContent = "Edit";
  document.getElementById("name").value = task.name;
  document.getElementById("category").value = task.category;
  document.getElementById("date").value = task.date;
};

// Add/edit todo form

todoForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(todoForm);
  const newTodo = {};

  formData.forEach((value, key) => (newTodo[key] = value));

  if (document.getElementById("form-add-button").textContent === "Edit") {
    const editTodo = taskManager.list.filter(
      (task) => task.id == e.target.id
    )[0];
    editTask(editTodo, newTodo.name, newTodo.category, newTodo.date);
  
  } else {
    taskManager.addTask(newTodo.name, newTodo.category, newTodo.date);
  
  }
  saveTasks();
  getTasks();
  displayTodos(taskManager.list);
  todoForm.reset();
  todoForm.style.display = "none";
};

// Open & close to do form modal

const addTodoButton = document.getElementById("add-task-button");
const closeTodoModal = document.getElementById("cancel-task");
addTodoButton.addEventListener("click", () => {
  document.getElementById("form-add-button").textContent = "Add";
  todoForm.style.display = "block";
});
closeTodoModal.addEventListener("click", () => (todoForm.style.display = "none"));


export { displayTodos, createProjectList, generateSelectOptions };
