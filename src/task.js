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
    console.log(this);
  }
}

export {Task};
