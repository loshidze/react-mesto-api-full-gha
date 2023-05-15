import React from 'react';
import { useForm } from '../hooks/useForm';

function Login({ onLogin }) {

  const {values, handleChange, setValues} = useForm({});

  React.useEffect(() => {
    resetForm();
  }, []);


  function resetForm() {
    setValues('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <div className='auth'>
      <h2 className='auth__title'>Вход</h2>
      <form onSubmit={handleSubmit} className="auth__form" action="#">
        <fieldset className='auth__fieldset'>
          <input className="auth__input" value={values.email || ''} onChange={handleChange} id="email" type="email" name="email" placeholder="Email" required/>
          <input className="auth__input" value={values.password || ''} onChange={handleChange} id="password" type="password" name="password" placeholder="Пароль" required/>
          <button className="auth__button" type="submit">Войти</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Login;
