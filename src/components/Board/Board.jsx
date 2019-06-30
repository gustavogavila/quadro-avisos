import React from 'react';
import './Board.css';
import PostIt from '../PostIt/PostIt';

export default props => {
  const renderPostIts = () => {
    const list = props.list || [];

    return list.map(p => (
      <div key={p.id}>
        <PostIt
          remetente={p.remetente}
          destinatario={p.destinatario}
          dataCriacao={p.dataCriacao}
          lembrete={p.lembrete}
          cor={p.cor}
          lido={p.lido}
          handleRemove={() => props.handleRemove(p)}
          handleLido={() => props.handleLido(p)}
        />
      </div>
    ));
  };

  return <div className='board'>{renderPostIts()}</div>;
};
