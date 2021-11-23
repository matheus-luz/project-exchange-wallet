import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectCoins extends Component {
  render() {
    const { datatestid, description, currencies, value, onChange } = this.props;
    return (
      <section>
        <label htmlFor={ description }>
          { description }
          <select
            variant="success"
            id={ description }
            data-testid={ datatestid }
            name="currency"
            value={ value }
            onChange={ onChange }
          >
            {
              currencies.map((category) => (
                <option value={ category } key={ category }>{ category }</option>
              ))
            }
          </select>
        </label>
      </section>
    );
  }
}

SelectCoins.propTypes = {
  description: PropTypes.string,
  datatestid: PropTypes.string,
}.isRequired;

export default SelectCoins;
