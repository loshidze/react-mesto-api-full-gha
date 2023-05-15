import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace ({name, link});
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm name={'card'} title='Новое место' buttonSubmit={'Создать'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isLoading={isLoading}>
      <input className="popup__input" value={name} onChange={handleChangeName} id="cardname" type="text" name="cardname" placeholder="Название" minLength="2" maxLength="30" required/>
      <span className="cardname-error popup__input-text-error"></span>
      <input className="popup__input" value={link} onChange={handleChangeLink} id="link" type="url" name="link" placeholder="Ссылка на картинку" required/>
      <span className="link-error popup__input-text-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
