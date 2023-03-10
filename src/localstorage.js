import { Task, taskManager } from "./task";

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(taskManager.list));
};

const saveProjects = () => {
  localStorage.setItem("projects", JSON.stringify(taskManager.categories));
};

const getTasks = () => {
  taskManager.list = JSON.parse(localStorage.getItem("tasks")); 
  
  taskManager.list.forEach(todo => Object.assign(
    new Task(), todo));
  return taskManager.list;
};

const getProjects = () => {
  taskManager.categories = JSON.parse(localStorage.getItem("projects"));
};

export { saveTasks, saveProjects, getTasks, getProjects };
