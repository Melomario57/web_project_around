import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallBack) {
    super(popupSelector);

    this._submitCallback = submitCallBack;
  }
  _getInputValues() {
    const inputValues = {};

    const form = this._popupElement.querySelector("form");
    Array.from(form.querySelectorAll("input")).forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    const form = this._popupElement.querySelector("form");
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      form.querySelector(".popup__form-button").textContent = "Guardando...";
      this._submitCallback(this._getInputValues()).then(() => {
        form.querySelector(".popup__form-button").textContent = "Guardar";
        evt.target.reset();
        this.close();
      });
    });
  }
  close() {
    const form = this._popupElement.querySelector("form");
    super.close();
    form.reset();
  }
}
