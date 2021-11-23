import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../App.css';

import { requestAPIMoney, salveFormSpent } from '../actions';

import Input from '../components/Input';
import SelectCoins from '../components/SelectCoins';
import SelectMethod from '../components/SelectMethod';
import Select from '../components/Select';
import ButtonSubmit from '../components/ButtonSubmit';
import TableExpenses from '../components/TableExpenses';
import InfoPerson from '../components/InfoPerson';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { fetchMoney } = this.props;
    const response = await fetchMoney();
    return response;
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async handleClick() {
    const { id, value, description, currency, method, tag } = this.state;

    const { submitForms } = this.props;
    // const response = await fetchMoney();
    // const data = await response.payload;
    // delete data.USDT;
    // const exchangeRates = data;

    this.setState((prevState) => ({ id: prevState.id + 1 }));

    submitForms({ id, value, description, currency, method, tag, exchangeRates: {} });

    this.setState({
      value: '0',
      description: '',
      tag: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <header>
        <InfoPerson />
        <form>
          <div className="form-inputs">
            <Input
              description="Valor"
              type="number"
              datatestid="value-input"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
            <SelectCoins
              description="Moeda"
              currencies={ currencies }
              datatestid="currency-input"
              value={ currency }
              onChange={ this.handleChange }
            />
            <SelectMethod
              value={ method }
              onChange={ this.handleChange }
              datatestid="method-input"
            />
            <Select
              value={ tag }
              onChange={ this.handleChange }
            />
            <Input
              description="description"
              type="text"
              datatestid="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
            <ButtonSubmit onClick={ this.handleClick } />
          </div>
        </form>
        <TableExpenses />
      </header>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoney: () => dispatch(requestAPIMoney()),
  submitForms: (state) => dispatch(salveFormSpent(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
