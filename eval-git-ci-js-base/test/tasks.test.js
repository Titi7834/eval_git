const { getTasks, reset, countDone, addTask, toggleTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

// Tests for countDone
test('should count completed tasks', () => {
  getTasks().push(
    { id: 1, name: "Task 1", done: true },
    { id: 2, name: "Task 2", done: false },
    { id: 3, name: "Task 3", done: true }
  );
  
  expect(countDone()).toBe(2);
});

test('should return 0 when no tasks are completed', () => {
  getTasks().push(
    { id: 1, name: "Task 1", done: false },
    { id: 2, name: "Task 2", done: false }
  );
  
  expect(countDone()).toBe(0);
});

// Tests for toggleTask
test('should toggle task status', () => {
  const task = { id: 1, name: 'Test Task', done: false };
  getTasks().push(task);
  expect(task.done).toBe(false);
  
  toggleTask(task.id);
  expect(getTasks()[0].done).toBe(true);
  
  toggleTask(task.id);
  expect(getTasks()[0].done).toBe(false);
});

test('should return false when toggling non-existent task', () => {
  expect(toggleTask(999)).toBe(false);
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