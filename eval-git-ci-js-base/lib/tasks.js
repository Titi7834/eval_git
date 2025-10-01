
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function toggleTask(id) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.done = !task.done;
    return true;
  }
  return false;
}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, toggleTask };
