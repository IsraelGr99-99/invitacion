import React from 'react'
import Reproductor from './Reproductor';
import '../stylesheets/header.css'
function Header() {
  return (
    <div>
      <header>
        <div className="col-md-7 col-sm-12 contenedor-portada">
          <h1>Mauro & Alondra</h1>
          <p>Viernes 23 de Noviembre 2024</p>
          <Reproductor />
        </div>
      </header>
    </div>
  )
}
export default Header;