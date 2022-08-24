import {useState, useEffect, useContext} from "react"
import PopupWithForm from "./PopupWithForm"
import {CurrentUserContext} from "../contexts/CurrentUserContext"
import Popup from "./Popup"

function EditProfilePopup({loader, isOpen, onClose, onUpdateUser}) {
    const currentUser = useContext(CurrentUserContext)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        setName(currentUser.name || '');
        setDescription(currentUser.about || '');
    }, [currentUser, isOpen])

    function handleSubmit(evt) {
        evt.preventDefault()
        onUpdateUser({
            name,
            about: description
        })
    }

    return (
        <Popup
            onClose={onClose}
            isOpen={isOpen}
        >
            <PopupWithForm
                name="edit"
                title="Редактировать профиль"
                buttonText={loader ? "Сохранение..." : "Сохранить"}
                onClose={onClose}
                onSubmit={handleSubmit}
            >
                <label className="popup__form-field">
                    <input 
                        className="popup__input popup__input_value_name" 
                        id="name-input" 
                        type="text" 
                        ame="name" 
                        required 
                        minLength="2" 
                        maxLength="40" 
                        autoComplete="off" 
                        placeholder="Ваше имя" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <span className="popup__input-error name-input-error"></span>
                </label>
                <label className="popup__form-field">
                    <input 
                        className="popup__input popup__input_value_about" 
                        id="about-input" 
                        type="text" 
                        name="about" 
                        required minLength="2" 
                        maxLength="200" 
                        autoComplete="off" 
                        placeholder="О себе" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                    />
                    <span className="popup__input-error about-input-error"></span>
                </label>
            </PopupWithForm>
        </Popup>

    )
}

export default EditProfilePopup