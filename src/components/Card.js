export default class Card {
  constructor(name, link, template, { handleCardClick }) {
    this._name = name;
    this._link = link;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content.querySelector(".cards__item")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();
    this._element.querySelector(".cards__image").src = this._link;
    this._element.querySelector(".cards__image-text").textContent = this._name;
    this._element.querySelector(
      ".cards__image"
    ).alt = `imagen de ${this._name} `;

    return this._element;
  }
  _handlerLike() {
    this._element
      .querySelector(".cards__hearth-button")
      .classList.toggle("cards__hearth-button_active");
  }
  _handlerRemove() {
    this._removeCard = this._element.remove();
  }
  _setEventListeners() {
    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
    this._element
      .querySelector(".cards__hearth-button")
      .addEventListener("click", () => {
        this._handlerLike();
      });

    this._element
      .querySelector(".cards__trash-button")
      .addEventListener("click", () => {
        this._handlerRemove();
      });
  }
}
