import React from 'react'
import './main.css'
import logo from "./logo.png";
import { Login } from '../login/login';

export const Main = () => {
  return (
    <div className='main'>
      <div className='logo'>
        <img className='logo--img' src={logo} alt={"logo"} />
      </div>
      <div className='enter'>
        <Login/>
      </div>
    </div>
  )
}