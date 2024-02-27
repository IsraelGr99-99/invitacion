import React from "react";
import Input from "./Input";
import ChecBox from "./CheckBox.jsx";
import Textarea from "./Textarea.jsx";
import Btn from './Btn.jsx';
import Alert from "./Alert.jsx";
import "../stylesheets/form.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'

function Form() {

  return (
    <div className="container-fluid cont-form">
      <h3>Confirma tu asistencia</h3>
      <form action="" className="form col-md-6">
        <Input type="text" placeholder="Nombre" styleInput="input" />
        <Input type="text" placeholder="Apellido" styleInput="input" />
        <ChecBox />
        <Textarea />
        <div className="cont-btn-form">
          <Alert text='Enviar' title='Confirmación enviada' icon='success'/>
          <Btn text='WhatsApp' styleBtn='btnWhatsApp' enlace='https://api.whatsapp.com/send?phone=522223738823&text=Hola,%20este%20es%20mi%20mensaje%20por%20WhatsApp'/>
        </div>
      </form>
    </div>
  );
}

export default Form;
