import React, {useState} from 'react';
import { generateTimestamp } from '../../utils/Utils';
import moment from 'moment'
import './PostItForm.css';

export default function PostItForm(props){

  const [remetente, setRemetente] = useState('')
  const [destinatario, setDestinatario] = useState('')
  const [dataCriacao, setDataCriacao] = useState(moment().format('YYYY-MM-DD'))
  const [cor, setCor] = useState('#ffee00')
  const [lembrete, setLembrete] = useState('')

  const reset = () => {
    setRemetente('')
    setDestinatario('')
    setDataCriacao(moment().format('YYYY-MM-DD'))
    setCor('#ffee00')
    setLembrete('')
  }

  return (
    <div role='form' className='postItForm'>
      <div className='col-md-2'>
        <input
          className='form-control'
          type='text'
          placeholder='Remetente'
          value={remetente}
          onChange={e => setRemetente(e.target.value)}
        />
      </div>
      <div className='col-md-2'>
        <input
          className='form-control'
          type='text'
          placeholder='Destinatário'
          value={destinatario}
          onChange={e => setDestinatario(e.target.value)}
        />
      </div>
      <div className='col-md-2'>
        <input
          className='form-control'
          type='date'
          value={dataCriacao}
          onChange={e => setDataCriacao(e.target.value)}
        />
      </div>
      <div className='col-md-1'>
        <input
          className='form-control'
          type='color'
          value={cor}
          onChange={e => setCor(e.target.value)}
        />
      </div>
      <div className='col-md-3'>
        <input
          className='form-control'
          type='text'
          placeholder='Lembrete...'
          value={lembrete}
          onChange={e=> setLembrete(e.target.value)}
        />
      </div>
      <div className='col-md-2'>
        <button className='btn btn-primary' onClick={() => {
          props.handleAdd({
            id: generateTimestamp(),
            remetente,
            destinatario,
            dataCriacao,
            cor,
            lembrete,
          })
          reset()
        }}>
          <i className='fa fa-plus' />
        </button>
      </div>
    </div>
  )
}
