import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {

  const inputAvatar = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatar.current.value,
    });
  }

  return (
    <PopupWithForm name={'avatar'} title='Обновить аватар' buttonSubmit={'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isLoading={isLoading}>
      <input className="popup__input" ref={inputAvatar} id="avatarlink" type="url" name="avatarlink" placeholder="Ссылка на картинку" required/>
      <span className="avatarlink-error popup__input-text-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
