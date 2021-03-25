import React from 'react'
import logo from './logo.png'

export const Header = ({ navigateTo }) => {
  return (
    <header className="header">
      <img src={logo} alt='{logo}' />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a onClick={() =>  navigateTo("map") }>Карта</a>
          </li>
          <li>
            <a onClick={() =>  navigateTo("profile") }>Профиль</a>
          </li>
          <li>
            <a onClick={() =>  navigateTo("login") }>Выйти</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}