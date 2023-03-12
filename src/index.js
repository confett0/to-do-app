import { displayTodos, createProjectList, generateSelectOptions } from "./dom";
import { taskManager } from "./task";
import { getTasks, getProjects } from "./localstorage";
import { toggleNav } from "./collapsed-sidebar";

getTasks();
displayTodos(taskManager.list);
createProjectList();
generateSelectOptions();