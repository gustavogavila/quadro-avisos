import React from 'react';
import './Board.css';
import PostIt from '../PostIt/PostIt';

export default props => {
  const renderPostIts = () => {
    const list = props.list || [];

    return list.map(p => (
      <div key={p.id} className='inline'>
        <PostIt
          remetente={p.remetente}
          destinatario={p.destinatario}
          dataCriacao={p.dataCriacao}
          lembrete={p.lembrete}
          cor={p.cor}
        />
      </div>
    ));
  };

  return <div className='board'>{renderPostIts()}</div>;
};
