import format from "date-fns/format";
import { taskManager } from "./task";

const projectFilter = (project) => {
    const newArr = taskManager.list.filter(task => task.category === project);
    return newArr;
}

const dueToday = () => {
    const today = format(new Date(), "dd LLL");
    const arr = taskManager.list.filter(task => task.date === today);
    return arr;
}

const dueLater = () => {
    const today = format(new Date(), "dd LLL");
    const arr = taskManager.list.filter(task => task.date !== today);
    return arr;
}

export { projectFilter, dueToday, dueLater };