import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class InfoPerson extends Component {
  constructor() {
    super();

    this.handleReducer = this.handleReducer.bind(this);
  }

  handleReducer() {
    const { expenses } = this.props;
    if (expenses.length >= 1) {
      const total = expenses.reduce((acc, curr) => {
        const changeCurrency = curr.value * curr.exchangeRates[curr.currency].ask;
        return Number(acc) + Number(changeCurrency).toFixed(2);
      }, 0);
      return total;
    }
    return 0;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <div className="person-info">
        <h3 data-testid="email-field">
          Email:
          {' '}
          { userEmail }
        </h3>
        <h4 data-testid="total-field">
          Despesa Total:
          {' '}
          { this.handleReducer() }
          <span data-testid="header-currency-field">BRL</span>
        </h4>
      </div>
    );
  }
}

InfoPerson.propTypes = {
  userEmail: PropTypes.string,
  value: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(InfoPerson);
