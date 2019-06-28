import React, {Component} from 'react';
import './PostIt.css';

export default class PostIt extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            remetente: '',
            destinatario: '',
            dataCriacao: '',
            cor: '',
            lido: false
        }
    }

    render() {
        return (
            <div className='borda'>
                <p>Remetente: <span>{this.state.remetente}</span></p>
                <p>Destinatário: <span>{this.state.remetente}</span></p>
                <p>Data de criação: <span>{this.state.remetente}</span></p>
                <p>Lido?: <span>{this.state.remetente ? 'SIM' : 'NÃO'}</span></p>
            </div>
        )
    }
}