const { getTasks, reset } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

// Tests for addTask
test('should add a task with trimmed name', () => {
  const task = addTask("  Test Task  ");
  expect(task.name).toBe("Test Task");
  expect(task.done).toBe(false);
  expect(task.id).toBe(1);
});

test('should increment id for each new task', () => {
  const task1 = addTask("Task 1");
  const task2 = addTask("Task 2");
  expect(task1.id).toBe(1);
  expect(task2.id).toBe(2);
});