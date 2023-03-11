import { Task, taskManager } from "./task";

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(taskManager.list));
};

const saveProjects = () => {
  localStorage.setItem("projects", JSON.stringify(taskManager.categories));
};

const getTasks = () => {
  if (localStorage.getItem("tasks") === null) {
    taskManager.list = [{name: "eat", category: "home", id: 1}, {name: "sleep", category: "work", id: 2}, {name: "repeat", category: "home", id: 3}]
  } else {
  taskManager.list = JSON.parse(localStorage.getItem("tasks"));
}
};

const getProjects = () => {
  if (localStorage.getItem("projects") === null) {
    taskManager.categories = ["work", "home"];
  } else {
  taskManager.categories = JSON.parse(localStorage.getItem("projects"));
}
};

export { saveTasks, saveProjects, getTasks, getProjects };
