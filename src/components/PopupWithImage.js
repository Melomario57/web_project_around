import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._popupElement = document.getElementById(popupSelector);
    this._popupImage = this._popupElement.querySelector(".popup__image-big");
    this._popupTitle = this._popupElement.querySelector(".popup__image-title");
  }

  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = `imagen de ${this._name} `;
    this._popupTitle.textContent = name;
    super.open();
  }
}
