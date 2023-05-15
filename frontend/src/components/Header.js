import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import logo from '../images/header-logo.svg'

function Header({ userEmail, onLogout }) {
  return(
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип"/>
      <div className='header__menu'>
        {userEmail && <p className='header__title'>{userEmail}</p>}
        <Routes>
          <Route path='/sign-up' element={
              <Link className='header__link' to='/log-in'>Войти</Link>
            }/>
          <Route path='/log-in' element={
              <Link className='header__link' to='/sign-up'>Регистрация</Link>
            }/>
          <Route path='/' element={
            <Link className='header__link' onClick={onLogout} to='/log-in'>Выйти</Link>
          }/>
        </Routes>
      </div>
    </header>
  )
}

export default Header;
