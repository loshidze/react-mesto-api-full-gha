import React from "react";

function PopupWithForm({ title, name, children, buttonSubmit, isOpen, onClose, onSubmit, isLoading }) {
  return(
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <button onClick={onClose} aria-label="закрыть окно" type="button" className="popup__close"></button>
          <h2 className="popup__title">{title}</h2>
          <form className="popup__form" onSubmit={onSubmit} name={name} action="#">
            <fieldset className="popup__fieldset">
              {children}
              <button className="popup__button" type="submit">{isLoading ? 'Сохранение...' : buttonSubmit}</button>
            </fieldset>
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm;
