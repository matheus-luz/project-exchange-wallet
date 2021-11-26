// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FAILED_REQUEST, GET_INPUTFORM, GET_MONEY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_MONEY:
    return ({
      ...state,
      currencies: Object.keys(action.payload)
        .filter((money) => money !== 'USDT'),
      exchangeRates: action.payload,
    });
  case FAILED_REQUEST:
    return ({
      ...state,
      error: action.error,
    });

  case GET_INPUTFORM:
    return ({
      ...state,
      expenses: [...state.expenses, action.payload],
    });

  default:
    return ({ ...state });
  }
}

export default wallet;
