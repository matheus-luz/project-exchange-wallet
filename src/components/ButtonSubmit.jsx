import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonSubmit extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <section>
        <button
          variant="primary"
          type="button"
          onClick={ onClick }
        >
          Adicionar despesas
        </button>
      </section>
    );
  }
}

ButtonSubmit.propTypes = {
  onclick: PropTypes.func,
}.isRequired;

export default ButtonSubmit;
