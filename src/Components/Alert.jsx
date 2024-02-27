import React from 'react'
import Swal from 'sweetalert2'



function Alert({ title,icon, enlace, text }) {
  const showAlert =()=>{
    Swal.fire({
      title: `${title}`,
      icon : `${icon}`
    })
  }
  const renderLink = title && icon && (
    <a className='btnEnviar text-decoration-none' href={enlace} onClick={showAlert}>
      {text}
    </a>
  );

  return (
    <div>
      {renderLink}
    </div>
  )
}

export default Alert;
