import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar-update"
      title="Обновить аватар"
      btnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__input-container">
        <input
          ref={avatarRef}
          type="url"
          name="avatar"
          className="form__input-area form__input-area_name form__input-area_avatar"
          id="avatarUpdate"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="popup__error" id="error-avatarUpdate"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
