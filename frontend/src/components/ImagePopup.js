function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_poster 
          ${card.isOpen && "popup_opened"}`}>
      <div className="poster">
        <img className="poster__image" src={card.link} alt={card.name} />
        <h2 className="poster__name">{card.name}</h2>
        <button
          type="reset"
          className="popup__close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
