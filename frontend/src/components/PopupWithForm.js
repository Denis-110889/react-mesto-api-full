function PopupWithForm({
  children,
  title,
  name,
  btnText,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`popup  ${isOpen && "popup_opened"} popup_type_${name}`}>
      <div className="popup__container">
        <button
          type="reset"
          className="popup__close"
          onClick={onClose}
        ></button>
        <h3 className="popup__heading">{title}</h3>
        <form
          name={name}
          className={`form form_type_${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}

          <fieldset className="form__handlers">
            <button
              type="submit"
              name="sBtnAvatarUpdate"
              className="form__button form__button_avatar-update"
            >
              {btnText}
            </button>
            <button
              type="button"
              name="sBtnEditBlock"
              className="form__button form__button-dont-worry "
            >
              Сохранение ...
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
