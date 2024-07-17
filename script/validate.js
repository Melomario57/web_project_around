/* Validación formularios */
const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  formConfig
) => {
  const errorElement = formElement.querySelector(
    `.form__error_${inputElement.name}`
  );
  inputElement.classList.add(formConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formConfig.errorClass);
};

const hideInputError = (formElement, inputElement, formConfig) => {
  const errorElement = formElement.querySelector(
    `.form__error_${inputElement.name}`
  );
  inputElement.classList.remove(formConfig.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(formConfig.errorClass);
};

const checkInputValidity = (formElement, inputElement, formConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      formConfig
    );
  } else {
    hideInputError(formElement, inputElement, formConfig);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, submitButton) => {
  if (hasInvalidInput(inputList)) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

const setEventListeners = (formElement, formConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(formConfig.inputSelector)
  );
  const submitButton = formElement.querySelector(
    formConfig.submitButtonSelector
  );
  toggleButtonState(inputList, submitButton);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, formConfig);
      toggleButtonState(inputList, submitButton);
    });
  });
};

const enableValidation = (formConfig) => {
  const formList = Array.from(
    document.querySelectorAll(formConfig.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, formConfig);
  });
};
/* const resetForm = (formElement, formConfig) => {
  formElement.reset();
  const submitButton = formElement.querySelector(
    formConfig.submitButtonSelector
  );
  const inputList = Array.from(
    formElement.querySelectorAll(formConfig.inputSelector)
  );
  toggleButtonState(inputList, submitButton, formConfig);
}; */
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_invalid",
  errorClass: "form__error-active",
});
