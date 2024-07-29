import { popTitle, popupCard, popupCloseCard, popupOpenCard } from "./utils.js";
export default class Card {
  constructor(name, link, template) {
    this._name = name;
    this._link = link;
    this._template = template;
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
    this._element.querySelector("img").addEventListener("click", () => {
      this.handlerOpenPop();
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
    popupCloseCard.addEventListener("click", () => {
      this._handlerClosePop();
    });

    popupCloseCard.addEventListener("click", () => this._handlerClosePop());
    document.addEventListener("keydown", this._handlerEscClose);
  }
  handlerOpenPop() {
    popupOpenCard.src = this._link;
    popupCard.classList.add("popup_opened");
    popupOpenCard.alt = this._name;
    popTitle.textContent = this._name;
    popupCard.classList.add("popup_opened");
    document.addEventListener("keydown", this._handlerEscClose);
  }
  _handlerEscClose(evt) {
    if (evt.key === "Escape") {
      popupCard.classList.remove("popup_opened");
    }
  }

  _handlerClosePop() {
    popupCard.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handlerEscClose);
  }
}
