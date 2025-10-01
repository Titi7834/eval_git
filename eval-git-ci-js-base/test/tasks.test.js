const { getTasks, reset } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
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