import React from 'react'

export const Label = (props) => {

  return (
    <label htmlFor={props.htmlFor}>{props.value}</label>
  )
}