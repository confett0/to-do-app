class Task {
  constructor(name, category, date) {
    this.name = name;
    this.category = category;
    this.date = date;
    this.done = false;
    this.id = Math.floor(Math.random() * 10000);
  }
}

const editTask = (todo, newName,newCategory,newDate) => {
  todo.name = newName;
  todo.category = newCategory;
  todo.date = newDate;
}

const doneUndone = (todo) => {
  if (todo.done === false) {
    todo.done = true;
  } else {
    todo.done = false;
  }
}

const taskManager = {
  list: [],
  categories: ["home","work"],

  addTask(taskName, taskCategory, taskDate) {
    this.list.push(new Task(taskName, taskCategory, taskDate));
  },

  deleteTask(task) {
    this.list.splice(this.list.indexOf(task), 1);
  },

  deleteCategory(category) {
    this.categories.splice(this.categories.indexOf(category),1);
  }
};

taskManager.addTask("eat", "home");
taskManager.addTask("sleep", "work");
taskManager.addTask("repeat", "home");

export { Task, taskManager, editTask, doneUndone };
