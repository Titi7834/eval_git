const { getTasks, reset, coutnDone } = require('../lib/tasks');

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