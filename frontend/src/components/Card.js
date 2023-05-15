import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `gallery__button-like ${isLiked && 'gallery__button-like_active'}`
  );;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <figure className="gallery__item">
      <img onClick={handleClick} className="gallery__image" src={card.link} alt={card.name}/>
      {isOwn && <button className="gallery__button-delete" aria-label="удалить" type="button" onClick={handleDeleteClick}></button>}
      <figcaption className="gallery__caption">
        <p className="gallery__item-title">{card.name}</p>
        <div className="gallery__likes-container">
          <button aria-label="оценить" type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="gallery__likes-quantity">{card.likes.length}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card
