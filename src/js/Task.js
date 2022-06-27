export default class Task {
  constructor(type, content) {
    this.type = type;
    this.content = content;
    this.HTML = '';
  }

  // Функция создания блока задачи
  createTask() {
    const task = `<li class="list_item ${this.type}_item">${this.content}<button class="btn btn_${this.type}"></button></li>`;
    this.HTML = task;
    return task;
  }

  // Функция вставки задачи в поле
  insertTask(task) {
    const section = document.querySelector(`.${this.type}`);
    const list = section.querySelector(`.${this.type}_list`);
    list.insertAdjacentHTML('beforeend', task);
  }

  // Функция запуска класса
  start() {
    const task = this.createTask();
    this.insertTask(task);
    return task;
  }
}
