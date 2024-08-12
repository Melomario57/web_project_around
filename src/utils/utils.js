import Card from "../components/Card.js";
export const popupEdit = document.getElementById("editProfile");
export const openEditButton = document.querySelector(".profile__edit-button");
const closeEditButton = document.querySelector(".popup__button-cross");

export const formElementEdit = document.querySelector(".popup__form");
export const profileName = document.querySelector(".profile__title");
export const profileJob = document.querySelector(".profile__subtitle");
export const inputName = document.querySelector("#name");
export const inputAbout = document.querySelector("#about");

/* Sección segundo formulario para las imágenes */

export const popupAdd = document.getElementById("popupImage");
export const openAddButton = document.querySelector(".profile__add-button");
const closeAddButton = document.getElementById("addCross");

/* Funcionalidad para las targetas */

const templateNode = document.querySelector(".template");
export const cardsZone = document.querySelector(".cards__content");
const inputTitle = document.getElementById("title");
const inputLink = document.getElementById("link");
export const formElementAdd = document.getElementById("imageForm");

/* Popup para lo de las imágenes */

export const popupCard = document.getElementById("popupCard");
const popTitle = document.querySelector(".popup__image-title");
const popupOpenCard = document.querySelector(".popup__image-big");
const popupCloseCard = document.getElementById("imageCross");
