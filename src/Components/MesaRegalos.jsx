import React from 'react'
import Btn from './Btn.jsx'
import '../stylesheets/mesaRegalos.css'
function MesaRegalos() {
  return (
    <div className='container-fluid cont-mesa-regalos'>
      <h2>MESA DE REGALOS</h2>
      <h2 className='mt-5' id='liverpool'>Liverpool</h2>
      <div className="btn-mesa-regalos">
        <Btn 
        text='Ir a la Tienda'
        styleBtn='liverpool'
        enlace='https://www.liverpool.com.mx/tienda/home'
        />
      </div>
    </div>
  )
}

export default MesaRegalos;
