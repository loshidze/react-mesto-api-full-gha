import React from 'react';
import trueRegImage from '../images/reg-true.svg';
import falseRegImage from '../images/reg-false.svg'

function InfoTooltip({ isOpen, onClose, isRegistered }) {

  return (
    <div className={`popup popup_type_infotooltip ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <button onClick={onClose} aria-label="закрыть окно" type="button" className="popup__close"></button>
          <img className='popup__reg-icon'
            src={isRegistered ? trueRegImage : falseRegImage}
            alt={isRegistered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
          />
          <p className='popup__reg-text'>
            {isRegistered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
          </p>
        </div>
      </div>
  )
}

export default InfoTooltip;
