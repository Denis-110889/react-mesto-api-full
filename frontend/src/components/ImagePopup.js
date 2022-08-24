import Popup from "./Popup"

function ImagePopup({card, onClose}) {
    return (
        <Popup 
            onClose={onClose}
            isOpen={card.isOpen}
        >
            <div className="popup__container">
              <button 
                type="button" 
                className="popup__close-button link" 
                aria-label="Закрыть" 
                onClick={onClose}
              ></button>
              <figure 
                className="popup__content-container">
                <img 
                  className="popup__image-big" 
                  src={card && card.link} 
                  alt={card && card.name}
                />
                <figcaption 
                  className="popup__image-caption">
                  {card.name}
                </figcaption>
              </figure>
            </div>          
        </Popup>
    )
}

export default ImagePopup