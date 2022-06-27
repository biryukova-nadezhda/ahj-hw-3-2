import Task from './Task';
import TextBlock from './TextBlock';

export default class Action {
  constructor(id) {
    this.id = id;
    this.storage = [];
    this.type = ['pinned', 'all_tasks'];
  }

  // Функция создания текстового поля
  createTextBlock(type) {
    this.name = 'createTextBlock';
    const block = new TextBlock(`${type}`);
    block.start();
  }

  // Функция добавления слушателя keyup на поле ввода по id
  addListenerInput() {
    const input = document.getElementById(`${this.id}`);
    input.addEventListener('keyup', (event) => {
      event.preventDefault();
      this.inputHandler(event, input);
    });
  }

  // Функция запуска действий, в зависимости от условий инпут
  // Если условия выполнены: то вызываем метод создания новой задачи
  // Если условия нарушены: запускаем блок выдачи текстового блока
  inputHandler(event, input) {
    const content = input.value.trim();
    const check = content.length !== 0;
    if (check && event.key === 'Enter') {
      this.createTask(input);
      this.checkList('all_tasks');
      this.removeBlock('top_tasks');
    }
    if (!check && event.key === 'Enter') {
      this.createTextBlock('top_tasks');
    }
  }

  // Функция создания новой задачи
  createTask(input) {
    const fieldInput = input;
    const content = fieldInput.value.trim();
    const task = new Task('all_tasks', content);
    task.start();
    fieldInput.value = '';
    this.storage.push(task);
  }

  // Функция добавления обработчика события клика по кнопке задачи
  addListenerList(type) {
    const list = document.querySelector(`.${type}_list`);
    list.addEventListener('click', (event) => {
      event.preventDefault();
      this.listHandler(event);
    });
  }

  // Функция обработчик события клика по кнопке задачи
  listHandler(event) {
    const { target } = event;
    let button; let task; let
      section;
    if (target.children.length === 0) {
      button = target;
      task = button.closest('li');
      section = task.closest('section');
    } else {
      task = target;
      button = task.querySelector('.btn');
      section = task.closest('section');
    }

    if (section.className.includes('all_tasks')) {
      button.textContent = 'V';
      this.insertList('pinned', task);
    }

    if (section.className.includes('pinned')) {
      button.textContent = '';
      this.insertList('all_tasks', task);
    }
  }

  insertList(type, task) {
    const list = document.querySelector(`.${type}_list`);
    list.append(task);
    this.checkList('pinned');
    this.checkList('all_tasks');
  }

  // Функция проверки наличия на странице текстового блока
  // Если блок есть - функция возвращает его. Если нет - false
  checkTextBlock(type) {
    this.name = 'checkTextBlock';
    const section = document.querySelector(`.${type}`);
    const p = section.querySelector(`.${type}_text`);
    if (p === null) {
      return false;
    }
    return p;
  }

  // Функция удаления текстового блока
  removeBlock(type) {
    const p = this.checkTextBlock(type);
    if (p) {
      p.remove();
    }
  }

  // Функция проверки списков на наличие задач
  checkList(type) {
    const list = document.querySelector(`.${type}_list`);
    const children = list.children.length;
    if (children === 0) {
      this.createTextBlock(type);
    } else {
      this.removeBlock(type);
    }
  }

  // Функция запуска работы класса
  start() {
    this.type.forEach((type) => {
      this.checkList(type);
      this.addListenerList(type);
    });
    this.addListenerInput();
  }

  //* ****************************************************/
  // Функция добаляет слушатель события input на поле ввода
  // и запускает обработчик события
  /* getInput() {
    const input = document.getElementById(`${this.id}`);
    input.addEventListener('input', () => {
      const value = input.value.trim().toLowerCase();
      this.serch(value);
      return value;
    });
  }

  serch(value) {
    this.storage.forEach((task) => {
      if (task.content === value) {
        return task;
      }
    });
  } */
}
