import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  
  const [place, setPlace] = React.useState("");
  const [placeLink, setPlaceLink] = React.useState("");

  function handlePlaceChange(e) {
    setPlace(e.target.value);
  }

  function handlePlaceLinkChange(e) {
    setPlaceLink(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: place,
      link: placeLink,
    });
  }

  return (
    <PopupWithForm
      name="cardPopup"
      title="Новое место"
      btnText=" Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <fieldset className="form__input-container">
        <input
          type="text"
          name="place"
          className="form__input-area form__input-area_name"
          id="place"
          placeholder="Название"
          value={place}
          onChange={handlePlaceChange}
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error" id="error-place"></span>

        <input
          type="url"
          name="placeLink"
          className="form__input-area form__input-area_property"
          id="placeLink"
          placeholder="Введите ссылку"
          value={placeLink}
          onChange={handlePlaceLinkChange}
          required
        />
        <span className="popup__error" id="error-placeLink"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
