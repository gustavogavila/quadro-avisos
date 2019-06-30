import React, { Component } from 'react';
import moment from 'moment'

import './Main.css';
import PostItForm from '../PostItForm/PostItForm'
import Board from '../Board/Board'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            id: Math.round(Math.random() * 1000),
            remetente: '',
            destinatario: '',
            dataCriacao: moment().format('YYYY-MM-DD'),
            cor: '#ffee00',
            lembrete: '',
            list: []
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

    }

    componentWillMount() {
        this.getAllPostIts();
    }

    resetState() {
        this.setState({
            id: Math.round(Math.random() * 1000),
            remetente: '',
            destinatario: '',
            dataCriacao: moment().format('YYYY-MM-DD'),
            cor: '#ffee00',
            lembrete: ''
        })
    }

    getAllPostIts() {
        let values = [];
        let keys = Object.keys(localStorage);
        let i = keys.length;

        while( i-- ) {
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        this.setState({...this.state, list: values});
    }

    handleAdd() {
        const postIt = JSON.stringify(this.state);
        localStorage.setItem(`postIt${this.state.id}`, postIt);
        this.getAllPostIts();
        this.resetState();
    }

    handleChange(e) {
        if (e.target.id === 'remetente') {
            this.setState({
                ...this.state,
                remetente: e.target.value
            })
        }

        if (e.target.id === 'destinatario') {
            this.setState({
                ...this.state,
                destinatario: e.target.value
            })
        }

        if (e.target.id === 'dataCriacao') {
            this.setState({
                ...this.state,
                dataCriacao: e.target.value
            })
        }

        if (e.target.id === 'cor') {
            this.setState({
                ...this.state,
                cor: e.target.value
            })
        }

        if (e.target.id === 'lembrete') {
            this.setState({
                ...this.state,
                lembrete: e.target.value
            })
        }
    }

    handleRemove(postIt) {
        console.log(`postIt${postIt.id}`);
        const key = `postIt${postIt.id}`;
        localStorage.removeItem(key);
        this.getAllPostIts();
    }

    render() {
        return (
            <div className="main">
                <PostItForm 
                    remetente={this.state.remetente}
                    destinatario={this.state.destinatario}
                    dataCriacao={this.state.dataCriacao}
                    cor={this.state.cor}
                    lembrete={this.state.lembrete}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <Board list={this.state.list} handleRemove={this.handleRemove}/>
            </div>
        );
    }
}