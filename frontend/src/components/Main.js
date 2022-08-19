import React from "react";
import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardDelete,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="аватар пользователя"
        />

        <button
          type="button"
          className="openPopupBtn  profile__avatar-button"
          onClick={onEditAvatar}
        ></button>

        <div className="profile-info">
          <h1 className="profile-info__userName">{currentUser.name}</h1>
          <button
            type="button"
            className="openPopupBtn profile-info__edit-button"
            onClick={onEditProfile}
          ></button>
          <p className="profile-info__about-self">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="openPopupBtn profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="places">
        <ul className="elements" id="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
