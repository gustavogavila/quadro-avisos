import React from 'react';
import './PostItForm.css';

export default props => (
  <div role='form' className='postItForm'>
    <div className='col-md-2'>
      <input
        id='remetente'
        className='form-control'
        type='text'
        placeholder='Remetente'
        value={props.remetente}
        onChange={props.handleChange}
      />
    </div>
    <div className='col-md-2'>
      <input
        id='destinatario'
        className='form-control'
        type='text'
        placeholder='Destinatário'
        value={props.destinatario}
        onChange={props.handleChange}
      />
    </div>
    <div className='col-md-2'>
      <input
        id='dataCriacao'
        className='form-control'
        type='date'
        value={props.dataCriacao}
        onChange={props.handleChange}
      />
    </div>
    <div className='col-md-1'>
      <input
        id='cor'
        className='form-control'
        type='color'
        value={props.cor}
        onChange={props.handleChange}
      />
    </div>
    <div className='col-md-3'>
      <input
        id='lembrete'
        className='form-control'
        type='text'
        placeholder='Lembrete...'
        value={props.lembrete}
        onChange={props.handleChange}
      />
    </div>
    <div className='col-md-2'>
      <button className='btn btn-primary' onClick={props.handleAdd}>
        <i className='fa fa-plus' />
      </button>
    </div>
  </div>
);
