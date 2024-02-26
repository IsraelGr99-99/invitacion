import React from "react";
import "../stylesheets/containerFoto.css";
import DivArea from "./DivArea";
function ContainerFoto() {
  return (
    <div className="container-foto">
      <div className="grid-cont">
        <DivArea area='1'/>
        <DivArea area='2'/>
        <DivArea area='3'/>
        <DivArea area='4'/>
        <DivArea area='5'/>
        <DivArea area='6'/>
        <DivArea area='7'/>
        <DivArea area='8'/>
        <DivArea area='9'/>
      </div>
    </div>
  );
}

export default ContainerFoto;
