import React from 'react'
import '../stylesheets/textarea.css'
function Textarea() {
  return (
    <div className='cont-textea'>
      <textarea name="message" id="message" cols='110' placeholder='Dejanos un mensaje ❤️'/>
    </div>
  )
}

export default Textarea;
