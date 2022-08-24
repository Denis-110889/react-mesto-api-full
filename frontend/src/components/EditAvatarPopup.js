import { useRef, useEffect } from "react"
import PopupWithForm from "./PopupWithForm"
import Popup from "./Popup"

function EditAvatarPopup(props) {
    const { loader, isOpen, onClose, onUpdateAvatar } = props

    const avatarLink = useRef()

    function handleSubmit(evt) {
        evt.preventDefault()
        onUpdateAvatar({
            avatar: avatarLink.current.value
        })
    }

    useEffect(() => {
        avatarLink.current.value = ''
    }, [isOpen])

    return (
        <Popup
            onClose={onClose}
            isOpen={isOpen}
        >
            <PopupWithForm
                name="avatar"
                title="Обновить аватар"
                buttonText={loader ? "Сохранение..." : "Сохранить"}
                onClose={onClose}
                onSubmit={handleSubmit}
            >
                <label className="popup__form-field">
                    <input 
                        ref={avatarLink} 
                        className="popup__input popup__input_value_link" 
                        id="link-avatar" 
                        type="url" 
                        name="avatar" 
                        placeholder="Ссылка на аватар" 
                        required/>
                    <span className="popup__input-error link-avatar-error"></span>
                </label>
            </PopupWithForm>
        </Popup>
    )
}

export default EditAvatarPopup