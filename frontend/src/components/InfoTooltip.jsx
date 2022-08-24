import Popup from "./Popup";


function InfoTooltip({isOpen, onClose, isSuccessfully}) {
    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="popup__container">
                
                <button
                    className="popup__close-button"
                    type="button"
                    aria-label="Закрыть"
                    onClick={onClose}
                ></button>
                <div className="popup__form-container">
                    <div className={`popup__image ${isSuccessfully ? "popup__image_type_successfully" : "popup__image_type_error"}`}></div>
                    <p className="popup__message">{isSuccessfully ? "Вы успешно зарегистрировались!" : `Что-то пошло не так!`}</p>
                </div>
            </div>
        </Popup>
    )
}

export default InfoTooltip;