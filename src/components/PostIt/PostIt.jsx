import React from 'react';
import './PostIt.css';

export default props => {
  return (
    <div
      style={{ backgroundColor: !props.lido ? props.cor : '#cccccc' }}
      className='borda'
    >
      <p>
        <strong>De:</strong> {props.remetente}
      </p>
      <p>
        <strong>Para:</strong> {props.destinatario}
      </p>
      <p>
        <strong>Data:</strong> {props.dataCriacao}
      </p>
      <p>
        <em>{props.lembrete}</em>
      </p>
      <div className='actions'>
        <button
          style={{ backgroundColor: !props.lido ? props.cor : '#cccccc' }}
          className='btn'
          onClick={props.handleLido}
        >
          <i className={props.lido ? 'fa fa-undo' : 'fa fa-check'} />
        </button>
        <button
          style={{ backgroundColor: !props.lido ? props.cor : '#cccccc' }}
          className='btn'
          onClick={props.handleRemove}
        >
          <i className='fa fa-trash' />
        </button>
      </div>
    </div>
  );
};
