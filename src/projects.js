import { Task } from "./task";

class Project {
    constructor(name) {
        this.name = name;
        this.list = [];
    }

    addTask(taskName, taskCategory, taskDate, taskPriority) {
        this.list.push(new Task(taskName, taskCategory, taskDate, taskPriority));
      }

    deleteTask(task) {
        this.list.splice(this.list.indexOf(task),1);
    }
}

const projectList = [];

const createProject = (name) => {
    const newProject = new Project(name);
    projectList.push(newProject);

    return newProject;
}

const inbox = createProject("Inbox");

inbox.addTask("eat");
inbox.addTask("sleep");
inbox.addTask("repeat");

export { createProject, inbox };