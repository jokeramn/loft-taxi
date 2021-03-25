import React from 'react'

export const Input = ({value, id, className, name, placeholder, type}) => {
  return (
    <input value={value} id={id} className={className} name={name} placeholder={placeholder} type ={type} />
  )
}

