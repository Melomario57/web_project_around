let popUp = document.querySelector(".popup");
let openButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__button-cross");
let saveButton = document.querySelector(".popup__form-button");

let formElement = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");
let inputName = document.getElementById("name");
let inputJob = document.getElementById("about");

/* Sección segundo formulario para las imágenes */

let popupImage = document.getElementById("popupImage");
let openAddButton = document.querySelector(".profile__add-button");
let closeButtonAdd = document.getElementById("addCross");
let createButton = document.querySelector("popup__form-button-create");

/* Funcionalidad para las targetas */

const templateNode = document.querySelector(".template");
let cardsZone = document.querySelector(".cards__content");
let inputTitle = document.getElementById("title");
let inputLink = document.getElementById("link");
let formElement2 = document.getElementById("imageForm");

/* Popup para lo de las imágenes */

const popImage = document.querySelector(".popup__image");
const popTitle = document.querySelector(".popup__image-title");
const popOpenImage = document.querySelector(".popup__image-big");
const popCrossImage = document.querySelector(".popup__image-button-cross");

/* ------------------------------------------------------------------------ */
/* Funcionalidad para agregar, eliminar y dar likes a las targetas */
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

formElement2.addEventListener("submit", function (event) {
  event.preventDefault();
  const titleValue = inputTitle.value;
  const linkValue = inputLink.value;
  const newNode = createCard(titleValue, linkValue);
  cardsZone.prepend(newNode);
  formElement2.reset();
  popupImage.classList.toggle("popup_opened");
});

initialCards.forEach(function (item) {
  const newNode = createCard(item.name, item.link);
  cardsZone.append(newNode);
});

function createCard(name, link) {
  const newNode = templateNode.content
    .querySelector(".cards__item")
    .cloneNode(true);

  newNode.querySelector(".cards__image").src = link;
  newNode.querySelector(".cards__image-text").textContent = name;
  newNode.querySelector(".cards__image").alt = `imagen de ${name} `;
  newNode
    .querySelector(".cards__hearth-button")
    .addEventListener("click", function (event) {
      newNode;
      event.target.classList.toggle("cards__hearth-button_active");
    });

  newNode
    .querySelector(".cards__trash-button")
    .addEventListener("click", function () {
      newNode.remove();
    });
  /* Funcionalidad para hacer el popup de las imagenes */
  newNode.querySelector(".cards__image").addEventListener("click", function () {
    popImage.classList.toggle("popup_opened");
    popImage.querySelector(".popup__image-big").src = link;
    popImage.querySelector(".popup__image-title").textContent = name;
    popImage.querySelector(".popup__image-big").alt = `imagen de ${name} `;
  });

  return newNode;
}
function toggleCross() {
  popImage.classList.toggle("popup_opened");
}
popCrossImage.addEventListener("click", toggleCross);
function toggleForm2() {
  popupImage.classList.toggle("popup_opened");
}
openAddButton.addEventListener("click", toggleForm2);
closeButtonAdd.addEventListener("click", toggleForm2);

/* Extra modificación del mensaje predeterminado del atributo "required" */

/* -------------------------------------------------- */
/* Editar nombre y acerca de mi en el formulario */

function toggleForm() {
  popUp.classList.toggle("popup_opened");

  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}
openButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);

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

/*
function createCard() {
  //el texto
  //eventos
  //dentro de la tarjeta nueva buscas cada boton y le asignas el evento correspondiente
  //colocar la foto
}
*/
