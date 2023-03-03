import { displayTodos, createProjectList } from "./dom";
import { taskManager } from "./task";

displayTodos(taskManager.list);
createProjectList();