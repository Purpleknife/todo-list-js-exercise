//Refactored the code using OOP logic (added 'this' and grouped all the functions in the object 'task' as methods):

const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    completeTask: function() {
      this.complete = true;
    },
  };
  return task;
};


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
//const tasks = [task1, task2];

task1.logTaskState();
task1.completeTask();
task2.logTaskState;
task2.completeTask();
