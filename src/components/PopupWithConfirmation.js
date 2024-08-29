import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(handleConfirm) {
    super.open();
    this._handleConfirm = handleConfirm;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form = this._popupElement.querySelector("form");
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleConfirm();
      this.close();
    });
  }
}
