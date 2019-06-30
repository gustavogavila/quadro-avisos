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
      <div className="actions">
        <button style={{backgroundColor: props.cor}} className="btn" >
          <i className="fa fa-check"></i>
        </button>
        <button style={{backgroundColor: props.cor}} className="btn" >
          <i className='fa fa-trash' onClick={props.handleRemove} />
        </button>
      </div>
    </div>
  )
}
