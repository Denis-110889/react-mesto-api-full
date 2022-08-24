import {useState, useEffect} from "react"
import PopupWithForm from "./PopupWithForm"
import Popup from "./Popup"

function AddPlacePopup({loader, isOpen, onClose, onAddPlace}) {
    const [name, setName] = useState('')
    const [link, setLink] = useState('')

    function handleSubmit(evt) {
        evt.preventDefault()
        onAddPlace({
            name,
            link
        })
    }

    useEffect(() => {
        setName('')
        setLink('')
    }, [isOpen])

    return (
        <Popup
            onClose={onClose}
            isOpen={isOpen}
        >
            <PopupWithForm
                name="add"
                title="Новое место"
                buttonText={loader ? "Сохранение..." : "Создать"}
                onClose={onClose}
                onSubmit={handleSubmit}
            >
                <label className="popup__form-field">
                    <input 
                        className="popup__input popup__input_value_name" 
                        id="title-input" 
                        type="text" 
                        name="name" 
                        placeholder="Название" 
                        required minLength="2" 
                        maxLength="30" 
                        autoComplete="off" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <span className="popup__input-error title-input-error"></span>
                </label>
                <label className="popup__form-field">
                    <input 
                        className="popup__input popup__input_value_link" 
                        id="link-input" 
                        type="url" 
                        name="link" 
                        placeholder="Ссылка на картинку" 
                        required 
                        value={link} 
                        onChange={e => setLink(e.target.value)}
                    />
                    <span className="popup__input-error link-input-error"></span>
                </label>
            </PopupWithForm>
        </Popup>
    )
}

export default AddPlacePopup