import React, { Component } from 'react';
import moment from 'moment';

import './Main.css';
import PostItForm from '../PostItForm/PostItForm';
import Board from '../Board/Board';
import { getAll, add, remove, markedAsRead } from '../../services/PostItService';
import { generateTimestamp } from '../../utils/Utils';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      id: generateTimestamp(),
      remetente: '',
      destinatario: '',
      dataCriacao: moment().format('YYYY-MM-DD'),
      cor: '#ffee00',
      lembrete: '',
      lido: false,
      list: []
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleLido = this.handleLido.bind(this);
  }

  componentWillMount() {
    this.getAllPostIts();
  }

  resetState() {
    this.setState({
      id: generateTimestamp(),
      remetente: '',
      destinatario: '',
      dataCriacao: moment().format('YYYY-MM-DD'),
      cor: '#ffee00',
      lembrete: ''
    });
  }

  getAllPostIts() {
    const postIts = getAll();
    this.setState({ ...this.state, list: postIts });
  }

  handleAdd() {
    add(`postIt${this.state.id}`, this.state);
    this.getAllPostIts();
    this.resetState();
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
  }

  handleRemove(postIt) {
    const key = `postIt${postIt.id}`;
    remove(key);
    this.getAllPostIts();
  }

  handleLido(postIt) {
    markedAsRead(postIt);
    this.getAllPostIts();
  }

  render() {
    return (
      <div className='main'>
        <PostItForm
          remetente={this.state.remetente}
          destinatario={this.state.destinatario}
          dataCriacao={this.state.dataCriacao}
          cor={this.state.cor}
          lembrete={this.state.lembrete}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
        />
        <Board
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleLido={this.handleLido}
          lido={this.state.lido}
        />
      </div>
    );
  }
}
