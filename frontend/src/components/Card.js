import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const { card, onCardClick, onCardLike, onCardDelete } = props
    const currentUser = useContext(CurrentUserContext)
    const isOwn = card.owner === currentUser._id;
    const isLiked = card.likes.some(i => i === currentUser._id)

    const cardDeleteButtonClassName = (
        `element__trash 
        ${isOwn ?
            'element__trash_visible' :
            'element__trash_hidden'}`
    )

    const cardLikeButtonClassName = (
        `element__like
        ${isLiked ?
            'element__like_aktive' :
            ''}`
    );

    function handleDeleteClick() {
        onCardDelete(card)
    }

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    return (
        <article className="element">
            <div className="element__image-container">
                <button 
                    className={cardDeleteButtonClassName} 
                    type="button" 
                    aria-label="Удалить" 
                    onClick={handleDeleteClick}
                ></button>
                <img 
                    className="element__image" 
                    src={card.link} 
                    alt={card.name} 
                    onClick={handleClick}/>
            </div>
            <div className="element__info-container">
                <h2 className="element__name">{card.name}</h2>
                <div className="element__like-container">
                    <button 
                        className={cardLikeButtonClassName} 
                        type="button" 
                        aria-label="нравится" 
                        onClick={handleLikeClick}
                    ></button>
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card