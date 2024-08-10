export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.getElementById(popupSelector);
    this._handleEscCloseAux = this._handleEscClose.bind(this);
    this.setEventListeners();
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscCloseAux);
  }
  close() {
    this._popupElement.classList.remove("popup_opened");
    document.addEventListener("keydown", this._handleEscCloseAux);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    const popupCloseButton = this._popupElement.querySelector(
      ".popup__button-cross"
    );
    popupCloseButton.addEventListener("click", () => {
      this.close();
    });
    this._popupElement.addEventListener("click", (event) => {
      if (event.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
