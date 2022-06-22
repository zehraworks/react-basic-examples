import React from 'react'
import "./input.css"

function Input({type, placeHolder, onChange}) {
  return (
    <input className='input' type={type} placeholder={placeHolder} onChange={onChange}></input>
  )
}

export default Input