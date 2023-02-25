class Project {
    constructor(name) {
        this.name = name;
        this.tasks = []
    }
    
    addTasks(task) {
        this.tasks.push(task);
    }

    removeTasks(task) {
        this.tasks.splice(this.tasks.indexOf(task),1);
    }
    
}

const Work = new Project("Work");
Work.addTasks("write email");
console.log(Work.tasks);