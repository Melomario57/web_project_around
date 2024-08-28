import "./pages/index.css";

import FormValidator from "./components/FormValidate.js";
import Card from "./components/Card.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
/* import PopupWithConfirmation from "./components/PopupWithConfirmation.js"; */
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";

import api from "./utils/Api.js";
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
  imageAvatar,
  buttonAvatar,
  formAvatar,
  popupFormAvatar,
  avatarInput,
  saveButton,
} from "./utils/utils.js";
import { data } from "autoprefixer";

const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_invalid",
  errorClass: "form__error-active",
};
const avatarNode = document.querySelector(".profile__image");
const initialCards = null;
let currentUser = null;

api.getUserInfo().then((user) => {
  currentUser = user;
  userInfo.setUserInfo({ username: user.name, job: user.about });
  avatarNode.src = user.avatar;
});
api
  .getInitialCards()
  .then((initialCards) => {
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
  })
  .catch((err) => {
    console.log(err);
  });

const popupImage = new PopupWithImage("popupCard");

const popupAddButton = new PopupWithForm("popupImage", (inputValues) => {
  api.addCard(inputValues.title, inputValues.link).then((res) => {
    const card = new Card(res.name, res.link, ".template", {
      handleCardClick: () => {
        popupImage.open(res.title, res.link);
      },
    });
    cardsZone.prepend(card.generateCard());
  });
});

openAddButton.addEventListener("click", () => {
  popupAddButton.open();
});

/* Instanciar información de usuario */

const userInfo = new UserInfo({
  usernameSelector: ".profile__title",
  jobSelector: ".profile__subtitle",
});

const popupProfile = new PopupWithForm("editProfile", (inputValues) => {
  api.updateUser(inputValues.name, inputValues.about).then((user) => {
    userInfo.setUserInfo({ username: user.name, job: user.about });

    popupProfile.close();
  });
});

openEditButton.addEventListener("click", () => {
  popupProfile.open();
  const userData = userInfo.getUserInfo();
  inputName.value = userData.username;
  inputAbout.value = userData.job;
});
/* Popup avatar */

const popupAvatar = new PopupWithForm("popupAvatar", (inputValues) => {
  api.updateAvatar(inputValues.avatar).then((res) => {
    imageAvatar.src = res.avatar;
    imageAvatar.alt = "Avatar";
    avatarInput.value = "";

    popupAvatar.close();
  });
});

buttonAvatar.addEventListener("click", () => {
  popupAvatar.open();
});

/* instanciar formulario */
const formValidatorProfile = new FormValidator(formConfig, ".popup__form");
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(formConfig, "#imageForm");
formValidatorCard.enableValidation();
const formValidatorAvatar = new FormValidator(formConfig, "#avatarForm");
formValidatorAvatar.enableValidation();
/* Instanciar las targetas  */
