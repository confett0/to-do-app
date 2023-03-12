import { Task, taskManager } from "./task";

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(taskManager.list));
};

const saveProjects = () => {
  localStorage.setItem("projects", JSON.stringify(taskManager.categories));
};

const getTasks = () => {
  if (localStorage.getItem("tasks") === null) {
    taskManager.list = [{name: "Welcome to my todo app!", category: "Demo project", id: 1}]
  } else {
  taskManager.list = JSON.parse(localStorage.getItem("tasks"));
}
};

const getProjects = () => {
  if (localStorage.getItem("projects") === null) {
    taskManager.categories = ["Demo project"];
  } else {
  taskManager.categories = JSON.parse(localStorage.getItem("projects"));
}
};

export { saveTasks, saveProjects, getTasks, getProjects };
