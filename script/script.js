let popUp = document.querySelector(".popup");
let openButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__button-cross");
let saveButton = document.querySelector(".popup__form-button");
let likeButton = document.querySelectorAll(".cards__hearth-button");

function toggleForm() {
  popUp.classList.toggle("popup_opened");
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

openButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);

/*
function save() {
  popUp.classList.toggle("popup_opened");
}

saveButton.addEventListener("click", save);
*/
/* Editar nombre y acerca de mi en el formulario */

let formElement = document.querySelector(".popup__form");

let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");

let inputName = document.getElementById("name");
let inputJob = document.getElementById("about");

inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameValue = inputName.value;
  let jobValue = inputJob.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;

  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popUp.classList.toggle("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);

/* Función para los likes */

document.querySelectorAll(".cards__hearth-button").forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.toggle("cards__hearth-button_active");
  });
});
/*
function createCard() {
  //el texto
  //eventos
  //dentro de la tarjeta nueva buscas cada boton y le asignas el evento correspondiente
  //colocar la foto
}
*/

/* Función para las 6 targetas iniciales */
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
