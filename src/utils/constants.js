const formsConfig = {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button-save",
  inactiveButtonClass: "form__button-save_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

const popupFormEditBtnOpen = document.querySelector(".profile__btn-edit");
const popupFormEditContainer = document.querySelector(".popup_form-edit");

const popupFormAddContainer = document.querySelector(".popup_form-add");
const popupFormAddBtnOpen = document.querySelector(".profile__btn-add");

const nameInputFormEdit = document.querySelector(".form__input_form_edit-name");
const jobInputFormEdit = document.querySelector(".form__input_form_edit-job");

const popupImageContainer = document.querySelector(".popup_image");
const popupDeleteCardContainer = document.querySelector(".popup_form-delete");
const popupBtnDeleteCard = document.querySelector(".elements__btn-delete");

const popupFormAvatarBtnOpen = document.querySelector(
  ".profile__btn-avatar-edit"
);
const popupEditAvatarContainer = document.querySelector(".popup_form-avatar");

export {
  formsConfig,
  popupFormEditBtnOpen,
  popupFormEditContainer,
  popupFormAddContainer,
  popupFormAddBtnOpen,
  nameInputFormEdit,
  jobInputFormEdit,
  popupImageContainer,
  popupDeleteCardContainer,
  popupBtnDeleteCard,
  popupEditAvatarContainer,
  popupFormAvatarBtnOpen,
};

// const popupImageTitle = document.querySelector(".popup__image-title");
// const popupImagePic = document.querySelector(".popup__pic");
// const popupFormEditBtnClose = document.querySelector(
//   ".popup__button-close_form-edit"
// );
// const popupImageBtnClose = document.querySelector(".popup__button-close_image");
// const popupFormAddBtnClose = document.querySelector(
//   ".popup__button-close_form-add"
// );
// const elementFormEdit = document.querySelector(".form_edit");
// const profileName = document.querySelector(".profile__name");
// const profileJob = document.querySelector(".profile__job");
// const initialCardsList = document.querySelector(".elements");
// const elementFormAdd = document.querySelector(".form_add");
// const selectAllPopup = document.querySelectorAll(".popup");
// const formElement = document.querySelector(".popup__container");

// const disableAddButton = document.querySelector(".form__button-save_form-add");
// const enableEditButton = document.querySelector(".form__button-save_form-edit");
// const closeButtons = document.querySelectorAll(".popup__button-close");

// const templateSelector = document
//   .querySelector(".template")
//.content.querySelector(".elements__item");

// const nameImputFormAdd = document.querySelector(".form__input_form_add-name");
// const linkInputFormAdd = document.querySelector(".form__input_form_add-link");

// const initialCards = [
//   {
//     name: "Байкал",
//     link: "https://images.unsplash.com/photo-1551845041-63e8e76836ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80/",
//   },
//   {
//     name: "Карелия",
//     link: "https://images.unsplash.com/photo-1573156667506-115190c68737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
//   },
//   {
//     name: "Алания",
//     link: "https://images.unsplash.com/photo-1612719734820-81784b7e6573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     name: "Сахалин",
//     link: "https://images.unsplash.com/photo-1661680390126-ed81efd300b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
//   },
//   {
//     name: "Дербент",
//     link: "https://images.unsplash.com/photo-1625780248192-cfdc2d61a996?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     name: "Алтай",
//     link: "https://images.unsplash.com/photo-1620315431189-2bd22e95d97c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//   },
// ];
