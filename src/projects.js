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

const projectList = {

    list: [],

    createProject(name) {
    const newProject = new Project(name);
    this.list.push(newProject);
    return newProject;
    },

    deleteProject(name) {
        this.list.splice(this.list.indexOf(name,1));
    }
}

const inbox = new Project("Inbox");

inbox.addTask("eat");
inbox.addTask("sleep");
inbox.addTask("repeat");

export { projectList, inbox };