let popUp = document.querySelector(".popup");
let openButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__button-cross");
let saveButton = document.querySelector(".popup__form-button");
let likeButton = document.querySelector(".cards__hearth-button");

function toggleForm() {
  popUp.classList.toggle("popup_opened");
}

function toggleFormButton() {
  likeButton.classList.toggle("cards__hearth-button_active");
}

openButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);
saveButton.addEventListener("click", toggleForm);
likeButton.addEventListener("click", toggleFormButton);

/* Editar nombre y acerca de mi en el formulario */

let formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
}

let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");

let inputName = document.querySelector("#name").value;
let inputJob = document.querySelector("#about").value;

formElement.addEventListener("submit", handleProfileFormSubmit);
