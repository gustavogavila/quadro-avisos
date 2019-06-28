import React from "react";
import "./PostIt.css";

export default function(props) {
  return (
    <div className="borda">
      <p>
        Remetente: <span>{props.remetente}</span>
      </p>
      <p>
        Destinatário: <span>{props.destinatario}</span>
      </p>
      <p>
        Data de criação: <span>{props.dataCriacao}</span>
      </p>
      <p>
        Lido?: <span>{props.lido}</span>
      </p>
    </div>
  );
}
