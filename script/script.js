let popupEdit = document.querySelector(".popup");
let openEditButton = document.querySelector(".profile__edit-button");
let closeEditButton = document.querySelector(".popup__button-cross");

let formElement = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");
let inputName = document.getElementById("name");
let inputJob = document.getElementById("about");

/* Sección segundo formulario para las imágenes */

let popupAdd = document.getElementById("popupImage");
let openAddButton = document.querySelector(".profile__add-button");
let closeAddButton = document.getElementById("addCross");

/* Funcionalidad para las targetas */

const templateNode = document.querySelector(".template");
let cardsZone = document.querySelector(".cards__content");
let inputTitle = document.getElementById("title");
let inputLink = document.getElementById("link");
let formElement2 = document.getElementById("imageForm");

/* Popup para lo de las imágenes */

const popupCard = document.querySelector(".popup-image");
const popTitle = document.querySelector(".popup__image-title");
const popupOpenCard = document.querySelector(".popup__image-big");
const popupCloseCard = document.querySelector(".popup__image-button-cross");

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
  closeAllPopups();
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
    openPopup(popupCard);
    popupCard.querySelector(".popup__image-big").src = link;
    popupCard.querySelector(".popup__image-title").textContent = name;
    popupCard.querySelector(".popup__image-big").alt = `imagen de ${name} `;
  });

  return newNode;
}

/* Funcion para la tecla Esc */

function openPopup(popupParam) {
  popupParam.classList.toggle("popup_opened");
  document.addEventListener("keydown", escapeKeyHandler);
}
popupCloseCard.addEventListener("click", closeAllPopups);
popupOpenCard.addEventListener("click", () => {
  openPopup(popupCard);
  openEditButton.addEventListener("click", () => {
    openPopup(popup);
    closeEditButton.addEventListener("click", closeAllPopups);
    openAddButton.addEventListener("click", () => {
      openPopup(popupAdd);
      closeAddButton.addEventListener("click", closeAllPopups);
    });
  });
});

function closeAllPopups() {
  popupEdit.classList.remove("popup_opened");
  popupAdd.classList.remove("popup_opened");
  popupCard.classList.remove("popup_opened");

  document.removeEventListener("keydown", escapeKeyHandler);
}

function escapeKeyHandler(evt) {
  if (evt.key === "Escape") {
    closeAllPopups();
  }
}

function toggleForm(popupt) {
  openPopup(popupt);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

openEditButton.addEventListener("click", () => toggleForm(popupEdit));
closeEditButton.addEventListener("click", closeAllPopups);
openAddButton.addEventListener("click", () => toggleForm(popupAdd));
closeAddButton.addEventListener("click", closeAllPopups);
popupOpenCard.addEventListener("click", () => toggleForm(popupCard));
popupCloseCard.addEventListener("click", closeAllPopups);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameValue = inputName.value;
  let jobValue = inputJob.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;

  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  closeAllPopups();
}

formElement.addEventListener("submit", handleProfileFormSubmit);

/* Funcion para hacer cerrar al hacer click afuera de los formularios */

document.querySelectorAll(".popup").forEach((popupElement) => {
  popupElement.addEventListener("click", (evt) => {
    if (evt.target.matches(".popup")) {
      closeAllPopups();
    }
  });
});

/* Función para resetear el formulario */

/* const form = document.querySelector(".form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  resetForm(form);
});
 */
