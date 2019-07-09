import moment from 'moment'
import { CLICK_ADD_POSTIT } from '../actions/actionTypes';

const initialState = {
  id: '',
  remetente: '',
  destinatario: '',
  dataCriacao: moment().format('YYYY-MM-DD'),
  cor: '#ffee00',
  lembrete: ''
};

export const postitReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ADD_POSTIT:
      return {
        ...state,
        id: action.payload.id,
        remetente: action.payload.remetente,
        destinatario: action.payload.destinatario,
        dataCriacao: action.payload.dataCriacao,
        cor: action.payload.cor,
        lembrete: action.payload.lembrete
      };
      default:
        return state;
  }
};
