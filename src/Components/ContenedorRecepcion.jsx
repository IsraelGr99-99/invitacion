import React from 'react'
import '../stylesheets/contenedorRecepcion.css'
import Ceremonia from './Ceremonia';
import Recepcion from './Recepcion';
function ContenedorRecepion() {
  return (
    <div className='container-fluid principalRecepcion'>
      <Ceremonia />
      <Recepcion />
    </div>
  )
}

export default ContenedorRecepion;
