import Task from '../Task';

test('should return a new Task', () => {
  const expected = {
    type: 'pinned',
    content: 'new task',
    HTML: '',
  };

  const result = new Task('pinned', 'new task');
  expect(result).toEqual(expected);
});

/* test('', () => {
  const task = new Task('pinned', 'new task');
  const result = task.insertTask()
  expect(result).toEqual(expected);
}) */

/*
insertTask(task) {
    const section = document.querySelector(`.${this.type}`);
    const list = section.querySelector(`.${this.type}_list`);
    list.insertAdjacentHTML('beforeend', task);
  }

*/
