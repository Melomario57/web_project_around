export default class Card {
  constructor(
    name,
    link,
    { _id, owner, likes },
    template,
    currentUser,
    {
      handleCardClick,
      handleDeleteCard,
      handleLikeButtonClick,
      handleDeleteClick,
    }
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._owner = owner;
    this._likes = likes;
    this._template = template;
    this._currentUser = currentUser;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeButtonClick = handleLikeButtonClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content.querySelector(".cards__item")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();
    this._element.querySelector(".cards__image").src = this._link;
    this._element.querySelector(".cards__image-text").textContent = this._name;
    this._element.querySelector(
      ".cards__image"
    ).alt = `imagen de ${this._name} `;

    const trashButton = this._element.querySelector(".cards__trash-button");
    const likeButton = this._element.querySelector(".cards__hearth-button");

    if (this._currentUser._id !== this._owner._id) {
      trashButton.remove();
    }

    if (this._likes.some((like) => like._id === this._currentUser._id)) {
      likeButton.classList.add("cards__hearth-button_active");
    }
    const counter = this._element.querySelector(".cards__hearth-counter");
    counter.textContent = this._likes.length;

    return this._element;
  }
  _handlerLike() {
    const counter = this._element.querySelector(".cards__hearth-counter");
    if (this._likes.some((like) => like._id === this._currentUser._id)) {
      this._handleDeleteClick(this._id).then((card) => {
        this._element
          .querySelector(".cards__hearth-button")
          .classList.remove("cards__hearth-button_active");
        this._likes = card.likes;
        counter.textContent = this._likes.length;
      });
    } else {
      this._handleLikeButtonClick(this._id).then((card) => {
        this._element
          .querySelector(".cards__hearth-button")
          .classList.add("cards__hearth-button_active");
        this._likes = card.likes;
        counter.textContent = this._likes.length;
      });
    }
  }
  _handlerRemove() {
    this._handleDeleteCard(this._id, () => {
      this._removeCard = this._element.remove();
    });
  }
  _setEventListeners() {
    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
    this._element
      .querySelector(".cards__hearth-button")
      .addEventListener("click", () => {
        this._handlerLike();
      });

    this._element
      .querySelector(".cards__trash-button")
      .addEventListener("click", () => {
        this._handlerRemove();
      });
  }
}
