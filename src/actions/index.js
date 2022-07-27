export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';
export const GET_INPUTFORM = 'GET_INPUTFORM';
export const GET_MONEY_FORMS = 'GET_MONEY_FORMS';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const REQUEST_API = 'REQUEST_API';
export const GET_MONEY = 'GET_MONEY';

export const setEmailValue = (payload) => ({ type: SET_EMAIL_VALUE, payload });

export const getMoney = (payload) => ({ type: GET_MONEY, payload });

export const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error });

export function requestAPIMoney() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json()
      .then(
        (data) => dispatch(getMoney(data)),
      ),
    (error) => dispatch(failedRequest(error)));
}

export const salveInput = (payload) => ({ type: GET_INPUTFORM, payload });

export const moneyForm = (payload) => ({ type: GET_MONEY_FORMS, payload });

export function salveFormSpent(payload) {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json()
      .then(
        (data) => {
          dispatch(salveInput({ ...payload, exchangeRates: data }));
          dispatch(getMoney(data));
        },
      ),
    (error) => dispatch(failedRequest(error)));
}
