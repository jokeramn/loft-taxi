import React from 'react'

export const Button = ({ className, type, value, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>{value}</button>
  )
}