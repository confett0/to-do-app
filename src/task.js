class Task {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = false;
    }

    checkTask() {
        if (this.done === false) {
            this.done = true;
        } else {
            this.done = false;
        }
    }

};