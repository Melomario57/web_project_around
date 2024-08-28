/* import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirm) {
    super(popupSelector);
    this._confirmButton = this._popupElement.querySelector(
      ".popup__form-button-confirm"
    );
  }
  open(handleConfirm) {
    super.open();
    this._handleConfirm = handleConfirm;
  }
  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", () => {
      this._handleConfirm();
      this.close();
    });
  }
}
 */
