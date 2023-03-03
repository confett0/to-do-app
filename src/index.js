import { displayTodos, createProjectList, generateSelectOptions } from "./dom";
import { taskManager } from "./task";

displayTodos(taskManager.list);
createProjectList();
generateSelectOptions();