import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { requestAPIMoney, salveFormSpent } from '../actions';

// import ButtonAdd from '../components/ButtonAdd';
// import Select from '../components/Select';
// import SelectCoins from '../components/SelectCoins.jsx';
// import SelectMethod from '../components/SelectMethod';
import Input from '../components/Input';
import SelectCoins from '../components/SelectCoins';
import SelectMethod from '../components/SelectMethod';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      // id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      // tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  // async componentDidMount() {
  //   const { fetchMoney } = this.props;
  //   const response = await fetchMoney();
  //   return response;
  // }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  // async handleClick() {
  //   const { id, value, description, currency, method, tag } = this.state;

  //   const { inputForm, fetchMoney } = this.props;
  //   const response = await fetchMoney();
  //   const data = await response.payload;
  //   const exchangeRates = data.filter((money) => (
  //     money !== 'USDT'));

  //   console.log(exchangeRates);

  //   this.setState((prevState) => ({ id: prevState.id + 1 }));

  //   inputForm({ id, value, description, currency, method, tag });

  //   this.setState({
  //     value: 0,
  //     description: '',
  //     currency: '',
  //     method: '',
  //     tag: '',
  //   });
  // }

  render() {
    const { userEmail } = this.props;
    const { value, description, currency, method } = this.state;
    return (
      <header>
        <h3 data-testid="email-field">{ userEmail }</h3>
        <form>
          Valor:
          <Input
            type="number"
            datatestid="value-input"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
          <span data-testid="total-field">{ value }</span>
          <span data-testid="header-currency-field">BRL</span>
          {/* <SelectCoins
            labelhtmlfor="moeda"
            description="Moeda"
            // currencies={ currencies }
            value={ currency }
            onChange={ this.handleChange }
          />
          <SelectMethod value={ method } onChange={ this.handleChange } /> */}
          {/* <Select
            value={ tag }
            onChange={ this.handleChange }
          /> */}
          <label htmlFor="descrição">
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          {/* <ButtonAdd onClick={ () => {} } /> */}
        </form>
      </header>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
