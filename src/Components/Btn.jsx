import React from 'react'
import '../stylesheets/btn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Btn({ text, styleBtn, enlace }) {
  return (
    <div className='cont-btn'>
      <a className={`${styleBtn} text-decoration-none`} href={enlace} target="_blank"> {text} </a>
    </div>
  )
}

export default Btn;
