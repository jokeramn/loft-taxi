import React from 'react'

export const Input = (props) => {
  return (
    <input value={props.value} id={props.id} className={props.className} name={props.name} type ={props.type} />
  )
}

