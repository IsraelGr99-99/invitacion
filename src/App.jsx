import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ContenedorRecepion from './Components/ContenedorRecepcion'
import Weather from './Components/Weather'
import ContainerFoto from './Components/ContainerFoto'
import Bendiciones from './Components/Bendiciones'
import MesaRegalos from './Components/MesaRegalos'
import Frase from './Components/Frase'
import Form from './Components/Form'
import Footer from './Components/Footer'
import Contacto from './Components/Contacto'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
function App() {

  return (
    <>
      <Header />
      <ContenedorRecepion />
      <Weather />
      <ContainerFoto />
      <Bendiciones />
      <Frase />
      <MesaRegalos />
      <Form />
      <Footer />
      <Contacto />
    </>
  )
}

export default App
