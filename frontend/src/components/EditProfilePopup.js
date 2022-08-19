import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      btnText=" Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleEditSubmit}
    >
      <fieldset className="form__input-container">
        <input
          type="text"
          name="userName"
          className="form__input-area form__input-area_name form__input-area_userName"
          id="userName"
          placeholder="Введите имя"
          value={name || " "}
          onChange={handleNameChange}
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error" id="error-userName"></span>

        <input
          type="text"
          name="aboutSelf"
          className="form__input-area form__input-area_property form__input-area_aboutSelf"
          id="about-self"
          placeholder="Введите род занятий"
          value={description || " "}
          onChange={handleDescriptionChange}
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error" id="error-about-self"></span>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
