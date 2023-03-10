import { Task, taskManager } from "./task";
import { projectFilter } from "./todo-app";
import { saveTasks, saveProjects, getTasks, getProjects } from "./localstorage";
import Edit from "./assets/edit.png";
import Delete from "./assets/delete.png";

const wrap = document.querySelector(".todo-wrap");
const projectWrap = document.querySelector(".project-list");
const projectTitle = document.querySelector(".project-title");

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

  // move event listeners somewhere for cleaner code
  checkbox.addEventListener("change", () => {
    todoName.classList.toggle("done");
    todo.doneUndone();
  });
  editButton.addEventListener("click", () => fillEditForm(todo));
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
  projectTitle.textContent = "All tasks";
});

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
};

const todoForm = document.querySelector(".task-form");

// Edit todo

const fillEditForm = (task) => {
  todoForm.style.display = "block";
  todoForm.setAttribute("id", task.id);
  document.getElementById("form-add-button").textContent = "Edit";
  document.getElementById("name").value = task.name;
  document.getElementById("category").value = task.category;
  document.getElementById("date").value = task.date;
};

// Add todo

todoForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(todoForm);
  const newTodo = {};

  formData.forEach((value, key) => (newTodo[key] = value));

  if (document.getElementById("form-add-button").textContent === "Edit") {
    const editTodo = taskManager.list.filter(
      (task) => task.id == e.target.id
    )[0];
    console.log(editTodo);
    console.log(e.target.id);
    editTodo.editTask(newTodo.name, newTodo.category, newTodo.date);
    
  
  } else {
    taskManager.addTask(newTodo.name, newTodo.category, newTodo.date);
  
  }

  displayTodos(taskManager.list);
  todoForm.reset();
  todoForm.style.display = "none";
};

// Add to do form modal

const openModal = document.getElementById("add-task-button");
const closeModal = document.getElementById("cancel-task");
openModal.addEventListener("click", () => {
  document.getElementById("form-add-button").textContent = "Add";
  todoForm.style.display = "block";
});
closeModal.addEventListener("click", () => (todoForm.style.display = "none"));

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
