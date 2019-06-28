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

    this.salvar = this.salvar.bind(this);
  }

  salvar() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="postItForm">
        <div className="row">
          <div className="col-md-2">
            <input
              placeholder="Remetente"
              className="form-control"
              type="text"
              id="remetente"
              name="remetente"
              onChange={remetente =>
                this.setState({ remetente: remetente.target.value })
              }
            />
          </div>

          <div className="col-md-2">
            <input
              placeholder="Destinatario"
              className="form-control"
              type="text"
              id="destinatario"
              name="destinatario"
              onChange={destinatario =>
                this.setState({ destinatario: destinatario.target.value })
              }
            />
          </div>

          <div className="col-md-2">
            <input
              className="form-control"
              type="date"
              id="dataCriacao"
              name="dataCriacao"
              onChange={dataCriacao =>
                this.setState({ dataCriacao: dataCriacao.target.value })
              }
            />
          </div>

          <div className="col-md-1">
            <input
              className="form-control"
              type="color"
              id="cor"
              name="cor"
              onChange={cor => this.setState({ cor: cor.target.value })}
            />
          </div>

          <div className="col-md-3">
            <input
              placeholder="Lembrete..."
              className="form-control"
              type="text"
              id="lembrete"
              name="lembrete"
              onChange={lembrete =>
                this.setState({ lembrete: lembrete.target.value })
              }
            />
          </div>

          <div className="col-md-2">
            <button className="btn btn-primary" onClick={this.salvar}>
              Salvar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
