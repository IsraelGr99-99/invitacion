import React from "react";
import "../stylesheets/bendiciones.css";
function Bendiciones() {
  return (
    <div className="container container-bendiciones">
      <h2>CON LA BENDICIÓN DE NUESTROS PADRES</h2>
      <div className="info-cont-bendiciones col-12">
        <div className="novia col-md-6">
          <p id="novios">Novia</p>
          <p>Ana Martínez</p>
          <p>Carlos García</p>
        </div>
        <div className="novio col-md-6">
          <p id="novios">Novio</p>
          <p>Laura Rodríguez</p>
          <p>Javier López</p>
        </div>
      </div>
    </div>
  );
}

export default Bendiciones;
