import FormValidator from "./FormValidate.js";
import Card from "./Card.js";
import { initialCards, formConfig } from "./utils.js";

/* Instanciar targetas */

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, ".template");
  const cardElement = card.generateCard();
  document.querySelector(".cards__content").append(cardElement);
});

/* instanciar formulario */
const formValidatorProfile = new FormValidator(formConfig, ".popup__form");
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(formConfig, "#imageForm");
formValidatorCard.enableValidation();
