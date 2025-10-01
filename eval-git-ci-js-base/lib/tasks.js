
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function countDone() {
  return tasks.filter(task => task.done).length;
}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, countDone };
