import React from 'react'
import "./button.css"

function Button({onClick}) {
  return (
  
        <button className='button' onClick={onClick}> Login </button>
    
  )
}

export default Button