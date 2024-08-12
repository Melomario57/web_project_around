import "./pages/index.css";

import FormValidator from "./components/FormValidate.js";
import Card from "./components/Card.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";

import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import {
  profileName,
  profileJob,
  popupEdit,
  popupAdd,
  openEditButton,
  openAddButton,
  inputName,
  inputAbout,
  popupCard,
  cardsZone,
} from "./utils/utils.js";

const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_invalid",
  errorClass: "form__error-active",
};
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

/* Insranciar para agregar imagenes con el handleCardClick */

const popupImage = new PopupWithImage("popupCard");

const popupAddButton = new PopupWithForm("popupImage", (inputValues) => {
  const card = new Card(inputValues.title, inputValues.link, ".template", {
    handleCardClick: () => {
      popupImage.open(inputValues.title, inputValues.link);
    },
  });
  cardsZone.prepend(card.generateCard());
});

/* Instanciar información de usuario */

const userInfo = new UserInfo({
  usernameSelector: ".profile__title",
  jobSelector: ".profile__subtitle",
});

const popupProfile = new PopupWithForm("editProfile", (inputValues) => {
  profileName.textContent = inputValues.name;
  profileJob.textContent = inputValues.about;
  popupProfile.close();
});
openEditButton.addEventListener("click", () => {
  popupProfile.open();
  const userData = userInfo.getUserInfo();
  inputName.value = userData.username;
  inputAbout.value = userData.job;
});

openAddButton.addEventListener("click", () => {
  popupAddButton.open();
});

/* instanciar formulario */
const formValidatorProfile = new FormValidator(formConfig, ".popup__form");
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(formConfig, "#imageForm");
formValidatorCard.enableValidation();
/* Instanciar las targetas  */
const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const card = new Card(element.name, element.link, ".template", {
        handleCardClick: () => {
          popupImage.open(element.name, element.link);
        },
      });
      sectionCards.addItem(card.generateCard());
    },
  },
  ".cards__content"
);
sectionCards.renderer();
