import React from 'react'
import { Button } from '../button/button'
import { Input } from '../input/input'
import { Label } from '../label/label'



export const Login = ({ navigateTo }) => {
  return (
    <>
      <h2 className='login__title'>Войти</h2>
      <form className='login'>
        <Label htmlFor="email" className='login__label' value='Email:' />
        <Input id='email' name='email' placeholder='Введите email' type='email' />
        <Label htmlFor="password" className='login__label' value='Пароль:' />
        <Input id='password' name='password' placeholder='Введите пароль' type='password' />
        <span className='login__reset-password'>Забыли пароль?</span>
        <Button className='login__submit' type='submit' value='Войти' onClick={() => navigateTo("map")} />
        <div className='login__signup-wrapper'>
          <span className='login__new-user'>Новый пользователь?</span>
          <span className='login__reg' onClick={() => navigateTo("registration")}>Регистрация</span>
        </div>
      </form >
    </>
  )
}