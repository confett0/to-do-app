import { Task } from "./task";
import { projectList, inbox } from "./projects";

const wrap = document.querySelector(".todo-wrap");
const projectWrap = document.querySelector(".project-list");

const createElement = (el, className, content) => {
  const element = document.createElement(el);
  element.setAttribute("class", className);
  element.textContent = content;
  return element;
}

const createTodoDiv = (todo, project) => {
  const todoDiv = createElement("div", "todo");
  todoDiv.id = project.list.indexOf(todo);

  const checkbox = createElement("input", "checkbox");
  checkbox.setAttribute("type", "checkbox");

  const todoName = createElement("p", "todo-name", todo.name);

  const deleteTodo = createElement("div", "delete-button", "x");

  todoDiv.append(checkbox, todoName, deleteTodo);
  wrap.appendChild(todoDiv);
  // move event listeners somewhere for cleaner code
  checkbox.addEventListener("change", todo.doneUndone);
  deleteTodo.addEventListener("click", () => {
    project.deleteTask(todo);
    displayTodos(project);
  });
}

const displayTodos = (project) => {
  wrap.innerHTML = "";
  project.list.map(todo => createTodoDiv(todo, project));
}

const createProjectLi = (project) => {

  const projectLi = createElement("li", "project", project.name);

  projectWrap.appendChild(projectLi);
}

const createProjectList = () => {
  projectWrap.innerHTML = "";
  projectList.list.map(project => createProjectLi(project));
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
  displayTodos(inbox);
};

// Project form

const projectForm = document.getElementById("project-form");

projectForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(projectForm);
  const newProject = {};

  formData.forEach((value, key) => (newProject[key] = value));
  projectList.createProject(newProject.name);
  createProjectList();
  projectForm.reset();

}

export { displayTodos, createProjectList };