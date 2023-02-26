class Task {
  constructor(name, category, dueDate, priority) {
    this.name = name;
    this.category = category;
    this.dueDate = dueDate;
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

const todoList = {
  list: [{name: "read"}, {name: "sleep"}],
  addTasks(task) {
    this.list.push(task);
  },
  removeTasks(task) {
    this.list.splice(this.list.indexOf(task), 1);
  }
};

const createNewTask = (taskName) => new Task(taskName);

export {todoList};
