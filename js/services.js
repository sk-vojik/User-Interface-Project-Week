class Button {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.content = document.querySelector(`.button-item[data-tab='${this.data}']`);
    this.element.addEventListener('click', () => {this.buttonClick()});
  }

  buttonClick () {
    document.querySelectorAll('.button-item').forEach(content => content.classList.remove('selected'));
    this.content.classList.add('selected');

    buttons.forEach((button) => button.classList.remove('button-selected'));

    this.element.classList.add('button-selected');
  }
}

let buttons = document.querySelectorAll('.button');
buttons.forEach(button => new Button(button));