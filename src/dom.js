import format from "date-fns/format";
import { Task, taskManager, editTask, doneUndone } from "./task";
import { projectFilter, dueToday, dueLater } from "./todo-app";
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
    getTasks();
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
  wrap.replaceChildren();
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

// Show today's todos button

const showToday = document.getElementById("today");
showToday.addEventListener("click", () => {
  getTasks();
  displayTodos(dueToday());
  projectTitle.textContent = "Today";
});

// Show upcoming todos button

const showUpcoming = document.getElementById("upcoming");
showUpcoming.addEventListener("click", () => {
  getTasks();
  displayTodos(dueLater());
  projectTitle.textContent = "Upcoming";
});

// Create select options from projects/category array

const generateSelectOptions = () => {
  const categorySelect = document.getElementById("category");
  categorySelect.replaceChildren();
  for (let i = 0; i < taskManager.categories.length; i++) {
    const el = document.createElement("option");
    el.textContent = taskManager.categories[i];
    el.value = taskManager.categories[i];
    categorySelect.appendChild(el);
  }
  
  return categorySelect;
};

// Create projects dom elements

const createProjectDiv = (project) => {
  const projectDiv = createElement("div", "project");
  const projectName = createElement("h3", "project-name", project)
  const deleteProjectButton = createElement("img","delete-project-button", "");
  deleteProjectButton.src = Delete;

  projectDiv.append(projectName, deleteProjectButton);
  projectWrap.appendChild(projectDiv);


  deleteProjectButton.addEventListener("click", () => {
    taskManager.deleteCategory(project);
    saveProjects();
    saveTasks();
    displayTodos(taskManager.list);
    generateSelectOptions();
    createProjectList();
  });

  projectName.addEventListener("click", () => {
    displayTodos(projectFilter(project));
    projectTitle.textContent = project;
  })

};

// Display list of projects from array

const createProjectList = () => {
  getProjects();
  projectWrap.replaceChildren();
  taskManager.categories.map((project) => createProjectDiv(project));
};

// Project form

const projectForm = document.getElementById("project-form");

projectForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(projectForm);
  const newProject = {};

  formData.forEach((value, key) => (newProject[key] = value));
  taskManager.categories.push(newProject.name);
  saveProjects();
  createProjectList();
  generateSelectOptions();
  projectForm.reset();
  projectForm.style.display = "none"
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

  if (newTodo.date !== "") {
    newTodo.date = format(new Date(newTodo.date), "dd LLL");
  }

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
