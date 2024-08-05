import FormValidator from "../components/FormValidate.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
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

/* Instanciar targetas */

/* instanciar formulario */
const formValidatorProfile = new FormValidator(formConfig, ".popup__form");
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(formConfig, "#imageForm");
formValidatorCard.enableValidation();
/* Renderizar las targetas  */
const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const card = new Card(element.name, element.link, ".template");
      sectionCards.addItem(card.generateCard());
    },
  },
  ".cards__content"
);
sectionCards.renderer();
