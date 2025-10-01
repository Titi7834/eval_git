
// Simple in-memory task list
let tasks = [];
let nextId = 2;


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

function addTask(name) {
  const task = {
    id: nextId++,
    name: name.trim(),
    done: false
  };
  tasks.push(task);
  return task;

}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, addTask, toggleTask };
