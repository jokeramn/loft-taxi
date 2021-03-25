import React from 'react'

export const Label = ({htmlFor, className, value}) => {

  return (
    <label htmlFor={htmlFor} className={className}>{value}</label>
  )
}