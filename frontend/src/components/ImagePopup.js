import React from "react";

function ImagePopup({ card, onClose }) {
  return(
    <div className={`popup popup_type_image ${card.link ? "popup_opened" : ""}`}>
        <figure className="popup__image">
          <button onClick={onClose} className="popup__close" type="button" aria-label="закрыть окно"></button>
          <img className="popup__open-image" src={card.link} alt={card.name}/>
          <figcaption className="popup__image-title">{card.name}</figcaption>
        </figure>
      </div>
  )
}

export default ImagePopup