import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectMethod extends Component {
  render() {
    const { datatestid, value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select
            data-testid={ datatestid }
            id="pagamento"
            name="method"
            value={ value }
            onChange={ onChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
      </section>
    );
  }
}

SelectMethod.propTypes = {
  datatestid: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default SelectMethod;
