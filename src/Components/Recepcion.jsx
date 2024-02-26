import React from "react";
import imgRecepcion from "../assets/copas.svg";
import "../stylesheets/recepcion.css";
import Btn from "./Btn";
function Recepcion() {
  return (
    <div className="container col-md-6 col-sm-12 contenedor-recepcion">
      <figure>
        <img className="img-fluid" src={imgRecepcion} alt="Recepcion" />
        <h2>Recepción</h2>
        <p>Hacienda del centro</p>
        <p> C. 16 Pte. 518, Barrio de Santiago</p>
        <div className="btn-cont-recepcion">
          <p>10:00 pm</p>
          <Btn
            text="Como llegar"
            styleBtn="btnCeremonia"
            enlace="https://www.google.com/maps/dir//Templo+de+San+Bernardo,+20+de+Noviembre+33,+Centro+Hist%C3%B3rico+de+la+Cdad.+de+M%C3%A9xico,+Centro,+Cuauht%C3%A9moc,+06000+Ciudad+de+M%C3%A9xico,+CDMX/@19.4148162,-99.239119,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85d1fecd77279e07:0x3004a4fbe08d7f0b!2m2!1d-99.1337958!2d19.4308255?hl=es-419&entry=ttu"
          />
        </div>
      </figure>
    </div>
  );
}

export default Recepcion;
