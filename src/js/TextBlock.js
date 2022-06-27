export default class TextBlock {
  constructor(type) {
    this.type = type;
  }

  // Функция выдачи контекста для текстового блока
  getContent(type) {
    this.name = 'getContent';
    let content;
    switch (type) {
      case 'all_tasks':
        content = 'Нет задач!';
        break;
      case 'pinned':
        content = 'Нет закрепленных задач!';
        break;
      case 'top_tasks':
        content = 'Задача не может быть пустой!';
        break;
      default:
        content = 'Неожиданный тип';
    }
    return content;
  }

  // Функция создания текстового блока
  createTextBlock(type) {
    const p = document.createElement('p');
    const content = this.getContent(type);
    p.className = `section_text ${type}_text`;
    p.textContent = content;
    return p;
  }

  // Функция нахождения секции для вставки блока
  getSection(type) {
    this.name = ' getSection';
    const section = document.querySelector(`.${type}`);
    return section;
  }

  // Функция вставки текстового блока на поле
  insertBlockText(type) {
    const section = this.getSection(type);
    const p = this.createTextBlock(type);
    section.append(p);
  }

  // Функция запуска работы класса
  start() {
    this.insertBlockText(this.type);
  }
}
