import { taskManager } from "./task";

const projectFilter = (project) => {
    const newArr = taskManager.list.filter(task => task.category === project);
    return newArr;
}

export {projectFilter};