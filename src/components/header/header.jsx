import React from 'react'

export const Header = ({navigate}) => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav--list">
          <li className="nav--item">
            <a onClick={() => {navigate("map") }}>Карта</a>
          </li>
          <li>
            <a onClick={() => {navigate("profile") }}>Профиль</a>
          </li>
          <li>
            <a onClick={() => {navigate("main") }}>Выйти</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}