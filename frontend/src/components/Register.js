import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

function Register({ onRegister }) {

  const {values, handleChange, setValues} = useForm({});

  React.useEffect(() => {
    resetForm();
  }, []);


  function resetForm() {
    setValues('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <div className='auth'>
      <h2 className='auth__title'>Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit} action="#">
        <fieldset className='auth__fieldset'>
          <input className="auth__input" value={values.email || ''} onChange={handleChange} id="email" type="email" name="email" placeholder="Email" required/>
          <input className="auth__input" value={values.password || ''} onChange={handleChange} id="password" type="password" name="password" placeholder="Пароль" required/>
          <button className="auth__button" type="submit">Зарегистрироваться</button>
          <Link to='/log-in' className='auth__link'>Уже зарегистрированы? Войти</Link>
        </fieldset>
      </form>
    </div>
  )
}

export default Register;
