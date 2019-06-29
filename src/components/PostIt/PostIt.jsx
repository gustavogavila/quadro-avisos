import React from "react";
import "./PostIt.css";

export default props => {

  return (
    <div style={{backgroundColor: props.cor}} className="borda">
      <p><strong>De:</strong> {props.remetente}</p>
      <p><strong>Para:</strong> {props.destinatario}</p>
      <p><strong>Data:</strong> {props.dataCriacao}</p>
      <p>{props.lido}</p>
      <p><em>{props.lembrete}</em></p>
      {/* <button className="btn">
        <i className='fa fa-check' />
      </button> */}
    </div>
  )
}
