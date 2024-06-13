let popUp = document.querySelector(".popup");
let openButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__button-cross");
let saveButton = document.querySelector(".popup__form-button");

function toggleForm() {
  popUp.classList.toggle("popup_opened");
}

openButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);

function formSubmit(event) {
  event.noRecharge();
}

saveButton.addEventListener("submit", formSubmit);
