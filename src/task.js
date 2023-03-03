class Task {
  constructor(name, category, priority) {
    this.name = name;
    this.category = category;
    // this.dueDate = dueDate; we'll had date later
    this.priority = priority;
    this.done = false;
  }

  doneUndone() {
    if (this.done === false) {
      this.done = true;
    } else {
      this.done = false;
    }
  }
}

const taskManager = {
  list: [],
  categories: ["home","work"],

  addTask(taskName, taskCategory, taskDate, taskPriority) {
    this.list.push(new Task(taskName, taskCategory, taskDate, taskPriority));
  },

  deleteTask(task) {
    this.list.splice(this.list.indexOf(task), 1);
  },
};

taskManager.addTask("eat", "home");
taskManager.addTask("sleep", "work");
taskManager.addTask("repeat", "home");

export { Task, taskManager };
