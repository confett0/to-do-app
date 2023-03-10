import { displayTodos, createProjectList, generateSelectOptions } from "./dom";
import { taskManager } from "./task";
import { getTasks, getProjects } from "./localstorage";

getTasks();
displayTodos(taskManager.list);
createProjectList();
generateSelectOptions();