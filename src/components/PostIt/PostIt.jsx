import React, { Component } from "react";
import "./PostIt.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default class PostIt extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      remetente: "",
      destinatario: "",
      dataCriacao: "",
      lido: false
    };
  }

  render() {
    return (
      <div className={this.state.lido ? "borda lido" : "borda"}>
        <p>{this.state.remetente}</p>
        <p>{this.state.destinatario}</p>
        <p>{this.state.dataCriacao}</p>
        <p>{this.state.lido}</p>
        <button
          className="btn"
          onClick={() => {
            this.setState(prevState => ({ lido: !prevState.lido }));
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
    );
  }
}
