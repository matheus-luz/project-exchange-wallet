import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalData extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <h4 data-testid="email-field">
          Email
          {' '}
          { userEmail }
        </h4>
        <span data-testid="total-field">
          Despesa Total:
          <span data-testid="header-currency-field">BRL</span>
        </span>
      </div>
    );
  }
}

PersonalData.propTypes = {
  userEmail: PropTypes.string,
  value: PropTypes.number,
}.isRequired;

export default PersonalData;
