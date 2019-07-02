import React from 'react';
import './PostIt.css';

export default function PostIt(props) {
  const { handleLido, handleRemove, postIt } = props
  const { remetente, destinatario, dataCriacao, lembrete, cor, lido } = postIt
  
  return (
    <div
      style={{ backgroundColor: !lido ? cor : '#cccccc' }}
      className='borda'
    >
      <p><strong>De:</strong> {remetente}</p>
      <p><strong>Para:</strong> {destinatario}</p>
      <p><strong>Data:</strong> {dataCriacao}</p>
      <p><em>{lembrete}</em></p>
      <div className='actions'>
        <button
          style={{ backgroundColor: !lido ? cor : '#cccccc' }}
          className='btn'
          onClick={() => handleLido(postIt)}
        >
          <i className={lido ? 'fa fa-undo' : 'fa fa-check'} />
        </button>
        <button
          style={{ backgroundColor: !lido ? cor : '#cccccc' }}
          className='btn'
          onClick={() => handleRemove(postIt)}
        >
          <i className='fa fa-trash' />
        </button>
      </div>
    </div>
  )
}