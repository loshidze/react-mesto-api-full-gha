import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

  return(
    <main className="content">
        <section className="profile">
          <div className="profile__cover" onClick={onEditAvatar}><img className="profile__image" src={currentUser.avatar} alt="аватарка"/></div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button onClick={onEditProfile} aria-label="редактировать профиль" type="button" className="profile__button-info"></button>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button onClick={onAddPlace} aria-label="добавить картинку" type="button" className="profile__button-add"></button>
        </section>
        <section className="gallery" aria-label="галерея">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
          ))}

        </section>
      </main>
  )
}

export default Main
