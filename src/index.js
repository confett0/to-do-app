import { displayTodos, createProjectList, generateSelectOptions } from "./dom";
import { taskManager } from "./task";
import { getTasks } from "./localstorage";


displayTodos(taskManager.list);
createProjectList();
generateSelectOptions();