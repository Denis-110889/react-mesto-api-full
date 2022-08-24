function PopupWithForm({name, onClose, title, onSubmit, children, buttonText}) {

    return (
        <div className="popup__container">
              <button 
                type="button" 
                className="popup__close-button link" 
                aria-label="Закрыть" 
                onClick={onClose}
              ></button>
              <form 
                  className="popup__form-container" 
                  action="#"
                  name={name}
                  onSubmit={onSubmit}
              >
                <fieldset className="popup__form-fieldset">
                    <h3 className="popup__title">{title}</h3>
                    
                    {children}
                    
                    <button 
                          type="submit" 
                          className="popup__submit-button popup__submit-button_edit-form">
                          {buttonText}
                      </button>
                  </fieldset>
          </form>
        </div>       
  )
}

export default PopupWithForm