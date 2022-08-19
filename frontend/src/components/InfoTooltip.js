function InfoTooltip({ image, isOpen, onClose }) {
  return (
    <div
      className={`popup  ${isOpen && "popup_opened"} popup_type_tooltip`}
      name="popupTooltip"
    >
      <div className="popup__container">
        <button
          type="reset"
          className="popup__close"
          onClick={onClose}
        ></button>
        <img className="popup__image" src={image.symbol} alt='' />
        <p className="popup__message">{image.text}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
