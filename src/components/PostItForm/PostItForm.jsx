import React, { Component } from "react";
import "./PostItForm.css";

export default class PostItForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      remetente: "",
      destinatario: "",
      dataCriacao: "",
      cor: "",
      lido: false
    };

    this.salvar.bind(this);
  }

  salvar() {
    console.log("Teste");
  }

  render() {
    return (
      <div className="postItForm">
        <label for="remetente">Remetente</label>
        <input
          class="form-control"
          type="text"
          id="remetente"
          name="remetente"
        />

        <label for="destinatario">Destinatário</label>
        <input
          class="form-control"
          type="text"
          id="destinatario"
          name="destinatario"
        />

        <label for="dataCriacao">Data de criação:</label>
        <input
          class="form-control"
          type="date"
          id="dataCriacao"
          name="dataCriacao"
        />

        <label for="cor">Escolha uma cor:</label>
        <input class="form-control" type="color" id="cor" name="cor" />

        <label for="lembrete">Lembrete:</label>
        <input class="form-control" type="text" id="lembrete" name="lembrete" />

        <button class="btn btn-primary" onClick={this.salvar}>
          Salvar
        </button>
      </div>
    );
  }
}
