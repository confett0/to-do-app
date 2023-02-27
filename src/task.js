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
  addTask(taskName, taskCategory, taskDate, taskPriority) {
    this.list.push(new Task(taskName, taskCategory, taskDate, taskPriority));
  },
  removeTask(task) {
    this.list.splice(this.list.indexOf(task), 1);
  }
};


export {todoList};