export default function SafetyIssuePopup({ isOpen, onClose, onSafetyIssue }) {
  function handleSafetySubmit(e) {
    e.preventDefault();
    onSafetyIssue();
  }

  return (
    <div
      className={`popup  ${isOpen && "popup_opened"} popup_type_safety-issue`}
      name="popupSafetyIssue"
    >
      <div className="popup__container">
        <button
          type="reset"
          className="popup__close"
          onClick={onClose}
        ></button>
        <h3 className="popup__heading">Вы уверены?</h3>
        <form
          name="SafetyIssueForm"
          className="form form_type_safety-issue"
          onSubmit={handleSafetySubmit}
          noValidate
        >
          <fieldset className="form__handlers">
            <button
              type="submit"
              name="sBtnEditBlock"
              className="form__button form__button_safety-issue"
            >
              Да
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
