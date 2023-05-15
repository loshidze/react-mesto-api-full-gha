import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }


  return (
    <PopupWithForm name={'profile'} title='Редактировать профиль' buttonSubmit={'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isLoading={isLoading}>
      <input className="popup__input" onChange={handleChangeName} value={name || ''} id="contentname" type="text" name="contentname" placeholder="Имя" minLength="2" maxLength="40" required/>
      <span className="contentname-error popup__input-text-error"></span>
      <input className="popup__input" onChange={handleChangeDescription} value={description || ''} id="occupation" type="text" name="occupation" placeholder="Вид деятельности" minLength="2" maxLength="200" required/>
      <span className="occupation-error popup__input-text-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup
