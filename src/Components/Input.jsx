import React from 'react'
import '../stylesheets/input.css'
function Input({type, placeholder, styleInput}) {
  return (
    <div className={`col-md-12 ${styleInput}`}>
      <input className={`form-control `} type={type} placeholder={placeholder} required/>
    </div>
  )
}

export default Input;
