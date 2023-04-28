import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard , setSelectedCard] = useState({});

  // const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(props) {
    setSelectedCard(props);
    setIsImagePopupOpen(true);
  }

  function closeAllPopup() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile = {handleEditProfileClick}
        onEditAvatar = {handleEditAvatarClick}
        onAddPlace = {handleAddPlaceClick}
        onCardClick ={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        textButton="Сохранить"
        isOpen={isEditProfilePopupOpen && "popup_opened"}
        onClose={closeAllPopup}
      >
        <input
          className="form__input form__input_form_edit-name"
          type="text"
          id="name"
          name="name"
          minLength="2"
          maxLength="40"
          required
          placeholder="Имя"
        />
        <span
          id="name-error"
          className="form__error form__error_visible form__error_name_error"
        ></span>
        <input
          className="form__input form__input_form_edit-job"
          type="text"
          name="about"
          id="about"
          minLength="2"
          maxLength="200"
          placeholder="Вид деятельности"
          required
        />
        <span
          id="about-error"
          className="form__error form__error_visible form__error_about_error"
        ></span>
      </PopupWithForm>

      <PopupWithForm 
        name="add" 
        title="Новое место" 
        textButton="Создать"
        isOpen = {isAddPlacePopupOpen && "popup_opened"}
        onClose={closeAllPopup}
        >
        <input
          className="form__input form__input_form_add-name"
          type="text"
          name="placename"
          id="placename"
          placeholder="Название картинки"
          tabIndex="1"
          minLength="2"
          maxLength="30"
          required
        />
        <span
          id="placename-error"
          className="form__error form__error_visible form__error_placename_error"
        ></span>
        <input
          className="form__input form__input_form_add-link"
          type="url"
          name="link"
          id="link"
          placeholder="Ссылка на картинку"
          tabIndex="2"
          required
        />
        <span
          id="link-error"
          className="form__error form__error_visible form__error_link_error"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар?"
        textButton="Сохранить"
        isOpen={isEditAvatarPopupOpen && "popup_opened"}
        onClose={closeAllPopup}
      >
        <input
          className="form__input form__input_form_avatar-link"
          type="url"
          name="avatar"
          id="avatar"
          placeholder="Ссылка на картинку"
          tabIndex="1"
          required
        />
        <span
          id="avatar-error"
          className="form__error form__error_visible form__error_avatar_error"
        ></span>
      </PopupWithForm>

      <PopupWithForm 
        name="delete" 
        title="Вы уверены?" 
        textButton="Да"  
        onClose={closeAllPopup}/>
      <ImagePopup 
        name="image" 
        card={selectedCard}
        isOpen={isImagePopupOpen && "popup_opened"}
        onClose={closeAllPopup}
      />

     
    </div>
  );
}

export default App;
