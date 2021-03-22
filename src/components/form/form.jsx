import React from 'react'
import { Button } from '../button/button'
import { Input } from '../input/input'
import { Label } from '../label/label'



export const Form = () => {
  return (
    <form>
      <Label htmlFor="email" value='Email:' />
      <Input id='email' name='email' type='email' />
      <Label htmlFor="password" value='Пароль:' />
      <Input id='password' name='password' type='password' />
      <Button class='btn' value='Войти' />
    </form >
  )
}