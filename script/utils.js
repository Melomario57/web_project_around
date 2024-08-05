import Card from "../components/Card.js";
const popupEdit = document.querySelector(".popup");
const openEditButton = document.querySelector(".profile__edit-button");
const closeEditButton = document.querySelector(".popup__button-cross");

const formElementEdit = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const inputName = document.getElementById("name");
const inputJob = document.getElementById("about");

/* Sección segundo formulario para las imágenes */

const popupAdd = document.getElementById("popupImage");
const openAddButton = document.querySelector(".profile__add-button");
const closeAddButton = document.getElementById("addCross");

/* Funcionalidad para las targetas */

const templateNode = document.querySelector(".template");
const cardsZone = document.querySelector(".cards__content");
const inputTitle = document.getElementById("title");
const inputLink = document.getElementById("link");
const formElementAdd = document.getElementById("imageForm");

/* Popup para lo de las imágenes */

const popupCard = document.querySelector(".popup-image");
const popTitle = document.querySelector(".popup__image-title");
const popupOpenCard = document.querySelector(".popup__image-big");
const popupCloseCard = document.querySelector(".popup__image-button-cross");

/* ------------------------------------------------------------------------ */
/* Funcionalidad para agregar, eliminar y dar likes a las targetas */

function openPopup(popupParam) {
  popupParam.classList.toggle("popup_opened");
  document.addEventListener("keydown", escapeKeyHandler);
}

popupOpenCard.addEventListener("click", () => {
  openPopup(popupCard);
  openEditButton.addEventListener("click", () => {
    openPopup(popupEdit);
    closeEditButton.addEventListener("click", closeAllPopups);
    openAddButton.addEventListener("click", () => {
      openPopup(popupAdd);
      closeAddButton.addEventListener("click", closeAllPopups);
    });
  });
});

openEditButton.addEventListener("click", () => toggleForm(popupEdit));
closeEditButton.addEventListener("click", closeAllPopups);
openAddButton.addEventListener("click", () => toggleForm(popupAdd));
closeAddButton.addEventListener("click", closeAllPopups);
popupOpenCard.addEventListener("click", () => toggleForm(popupCard));

formElementAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = event.target.elements.title.value;
  const linkValue = event.target.elements.link.value;
  const card = new Card(nameValue, linkValue, ".template");
  const cardElement = card.generateCard();
  document.querySelector(".cards__content").prepend(cardElement);
  formElementAdd.reset();
  // resetForm(event.target, formConfig);
  closeAllPopups();
});
formElementEdit.addEventListener("submit", handleProfileFormSubmit);

/* Funcion para hacer cerrar al hacer click afuera de los formularios */

document.querySelectorAll(".popup").forEach((popupElement) => {
  popupElement.addEventListener("click", (evt) => {
    if (evt.target.matches(".popup")) {
      closeAllPopups();
    }
  });
});
function closeAllPopups() {
  popupEdit.classList.remove("popup_opened");
  popupAdd.classList.remove("popup_opened");
  popupCard.classList.remove("popup_opened");

  document.removeEventListener("keydown", escapeKeyHandler);
}

/* Funcion para la tecla Esc */
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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = inputName.value;
  const jobValue = inputJob.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;

  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  // resetForm(evt.target, formConfig);
  closeAllPopups();
  formElementEdit.reset();
}
/* Exportar para que funcionen el popup de las targetas en la clase Card */
export function openImagePopup(name, link) {
  popupOpenCard.src = link;
  popupCard.classList.add("popup_opened");
  popupOpenCard.alt = name;
  popTitle.textContent = name;
  popupCloseCard.addEventListener("click", () => closeAllPopups);
  document.addEventListener("keydown", escapeKeyHandler);
}
